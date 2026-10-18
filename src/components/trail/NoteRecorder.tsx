import { useEffect, useRef, useState } from "react";
import { Mic, Video, Square, Upload, Trash2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MAX_MEDIA_BYTES, mediaExtension } from "@/lib/note-schema";

export function NoteRecorder({
  kind,
  file,
  onChange,
  disabled,
}: {
  kind: "audio" | "video";
  file: File | null;
  onChange: (file: File | null) => void;
  disabled: boolean;
}) {
  const [recording, setRecording] = useState(false);
  const [requesting, setRequesting] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState("");
  const recorder = useRef<MediaRecorder | null>(null);
  const stream = useRef<MediaStream | null>(null);
  const live = useRef<HTMLVideoElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const mounted = useRef(true);
  const callback = useRef(onChange);
  callback.current = onChange;
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (recorder.current?.state === "recording") recorder.current.stop();
      stream.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);
  useEffect(() => {
    if (!file) {
      setPreview("");
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);
  useEffect(() => {
    if (!recording) return;
    const timer = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(timer);
  }, [recording]);
  useEffect(() => {
    if (seconds >= 120 && recorder.current?.state === "recording") recorder.current.stop();
  }, [seconds]);
  useEffect(() => {
    if (live.current && stream.current) live.current.srcObject = stream.current;
  }, [recording]);
  async function start() {
    setError("");
    setRequesting(true);
    try {
      if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined")
        throw new Error("Recording is not supported here. You can upload a recording instead.");
      const device = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: kind === "video",
      });
      if (!mounted.current) {
        device.getTracks().forEach((t) => t.stop());
        return;
      }
      stream.current = device;
      const types =
        kind === "audio"
          ? ["audio/webm;codecs=opus", "audio/mp4", "audio/webm"]
          : ["video/webm;codecs=vp8,opus", "video/mp4", "video/webm"];
      const mimeType = types.find((type) => MediaRecorder.isTypeSupported(type));
      const next = new MediaRecorder(device, mimeType ? { mimeType } : undefined);
      recorder.current = next;
      const chunks: Blob[] = [];
      let size = 0;
      next.ondataavailable = (e) => {
        if (e.data.size) {
          chunks.push(e.data);
          size += e.data.size;
          if (size >= MAX_MEDIA_BYTES && next.state === "recording") next.stop();
        }
      };
      next.onstop = () => {
        device.getTracks().forEach((t) => t.stop());
        stream.current = null;
        if (!mounted.current) return;
        setRecording(false);
        const blob = new Blob(chunks, { type: next.mimeType });
        const result = new File([blob], `${kind}-note`, { type: blob.type });
        try {
          mediaExtension(result, kind);
          callback.current(result);
        } catch (e) {
          setError(e instanceof Error ? e.message : "Recording failed. Try again.");
        }
      };
      next.onerror = () => {
        device.getTracks().forEach((t) => t.stop());
        if (mounted.current) {
          setRecording(false);
          setError("Recording stopped unexpectedly. Please try again or upload a file.");
        }
      };
      next.start(1000);
      setSeconds(0);
      setRecording(true);
    } catch (e) {
      stream.current?.getTracks().forEach((t) => t.stop());
      if (mounted.current)
        setError(
          e instanceof DOMException && e.name === "NotAllowedError"
            ? "Microphone or camera access was declined. Allow access or upload a recording."
            : e instanceof Error
              ? e.message
              : "Could not start recording.",
        );
    } finally {
      if (mounted.current) setRequesting(false);
    }
  }
  const Icon = kind === "audio" ? Mic : Video;
  return (
    <div className="note-recorder">
      <div className="note-recorder-heading">
        <Icon aria-hidden />
        <h3>{kind === "audio" ? "A voice note" : "A little video"}</h3>
        <span>Optional</span>
      </div>
      {recording ? (
        <div className="note-live">
          {kind === "video" && (
            <video ref={live} autoPlay muted playsInline aria-label="Camera preview" />
          )}
          <p role="status">
            <Circle aria-hidden />
            Recording · {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
          </p>
          <Button type="button" variant="outline" onClick={() => recorder.current?.stop()}>
            <Square />
            Stop recording
          </Button>
        </div>
      ) : file ? (
        <div className="note-playback">
          {kind === "audio" ? (
            <audio src={preview} controls preload="metadata" />
          ) : (
            <video src={preview} controls playsInline preload="metadata" />
          )}
          <div>
            <span>
              {file.name} · {(file.size / 1024 / 1024).toFixed(1)} MB
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Remove ${kind} recording`}
              disabled={disabled}
              onClick={() => onChange(null)}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      ) : (
        <>
          <p>
            {kind === "audio"
              ? "Some stories sound better in your own voice."
              : "A familiar face. A memory. A few honest words."}
          </p>
          <div className="note-record-actions">
            <Button
              type="button"
              variant="outline"
              disabled={disabled || requesting}
              onClick={start}
            >
              <Icon />
              {requesting ? "Opening…" : "Record"}
            </Button>
            <Button
              type="button"
              variant="ghost"
              disabled={disabled || requesting}
              onClick={() => input.current?.click()}
            >
              <Upload />
              Upload
            </Button>
          </div>
          <small>Up to 2 minutes when recording · 50 MB per file</small>
        </>
      )}
      <input
        ref={input}
        type="file"
        className="sr-only"
        aria-label={`Upload ${kind} recording`}
        accept={
          kind === "audio"
            ? "audio/webm,audio/ogg,audio/mpeg,audio/wav,audio/mp4,audio/x-m4a"
            : "video/webm,video/mp4,video/quicktime"
        }
        disabled={disabled}
        onChange={(e) => {
          const chosen = e.target.files?.[0];
          e.target.value = "";
          if (!chosen) return;
          try {
            mediaExtension(chosen, kind);
            setError("");
            onChange(chosen);
          } catch (err) {
            setError(err instanceof Error ? err.message : "Choose another file.");
          }
        }}
      />
      {error && (
        <p className="note-error" role="alert">
          {error}
        </p>
      )}
      <input type="hidden" data-recording={recording} />
    </div>
  );
}
