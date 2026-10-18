import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { H as LoaderCircle, It as ArrowLeft, M as MessageSquare, Pt as ArrowUpRight, Z as Heart, f as Square, ht as Circle, i as Video, j as Mic, l as Trash2, o as Upload, xt as Check } from "../_libs/lucide-react.mjs";
import { a as SelectTrigger, i as SelectItem, n as Select, o as SelectValue, r as SelectContent, s as cn, t as Button } from "./select-kZT_4T7Q.mjs";
import { U as isRedirect, b as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-DJmbmUg3.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { n as noteSchema, r as relationships, t as mediaExtension } from "./note-schema-CD0GC0fS.mjs";
import { t as voices_table_jpg_asset_default } from "./voices-table.jpg.asset-Dm77GlHu.mjs";
import { t as supabase } from "./client-BFFw235o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leave-a-note-et0BN4R8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function NoteRecorder({ kind, file, onChange, disabled }) {
	const [recording, setRecording] = (0, import_react.useState)(false);
	const [requesting, setRequesting] = (0, import_react.useState)(false);
	const [seconds, setSeconds] = (0, import_react.useState)(0);
	const [error, setError] = (0, import_react.useState)("");
	const [preview, setPreview] = (0, import_react.useState)("");
	const recorder = (0, import_react.useRef)(null);
	const stream = (0, import_react.useRef)(null);
	const live = (0, import_react.useRef)(null);
	const input = (0, import_react.useRef)(null);
	const mounted = (0, import_react.useRef)(true);
	const callback = (0, import_react.useRef)(onChange);
	callback.current = onChange;
	(0, import_react.useEffect)(() => {
		mounted.current = true;
		return () => {
			mounted.current = false;
			if (recorder.current?.state === "recording") recorder.current.stop();
			stream.current?.getTracks().forEach((t) => t.stop());
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!file) {
			setPreview("");
			return;
		}
		const url = URL.createObjectURL(file);
		setPreview(url);
		return () => URL.revokeObjectURL(url);
	}, [file]);
	(0, import_react.useEffect)(() => {
		if (!recording) return;
		const timer = window.setInterval(() => setSeconds((s) => s + 1), 1e3);
		return () => window.clearInterval(timer);
	}, [recording]);
	(0, import_react.useEffect)(() => {
		if (seconds >= 120 && recorder.current?.state === "recording") recorder.current.stop();
	}, [seconds]);
	(0, import_react.useEffect)(() => {
		if (live.current && stream.current) live.current.srcObject = stream.current;
	}, [recording]);
	async function start() {
		setError("");
		setRequesting(true);
		try {
			if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") throw new Error("Recording is not supported here. You can upload a recording instead.");
			const device = await navigator.mediaDevices.getUserMedia({
				audio: true,
				video: kind === "video"
			});
			if (!mounted.current) {
				device.getTracks().forEach((t) => t.stop());
				return;
			}
			stream.current = device;
			const mimeType = (kind === "audio" ? [
				"audio/webm;codecs=opus",
				"audio/mp4",
				"audio/webm"
			] : [
				"video/webm;codecs=vp8,opus",
				"video/mp4",
				"video/webm"
			]).find((type) => MediaRecorder.isTypeSupported(type));
			const next = new MediaRecorder(device, mimeType ? { mimeType } : void 0);
			recorder.current = next;
			const chunks = [];
			let size = 0;
			next.ondataavailable = (e) => {
				if (e.data.size) {
					chunks.push(e.data);
					size += e.data.size;
					if (size >= 52428800 && next.state === "recording") next.stop();
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
			next.start(1e3);
			setSeconds(0);
			setRecording(true);
		} catch (e) {
			stream.current?.getTracks().forEach((t) => t.stop());
			if (mounted.current) setError(e instanceof DOMException && e.name === "NotAllowedError" ? "Microphone or camera access was declined. Allow access or upload a recording." : e instanceof Error ? e.message : "Could not start recording.");
		} finally {
			if (mounted.current) setRequesting(false);
		}
	}
	const Icon = kind === "audio" ? Mic : Video;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "note-recorder",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "note-recorder-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: kind === "audio" ? "A voice note" : "A little video" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Optional" })
				]
			}),
			recording ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "note-live",
				children: [
					kind === "video" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: live,
						autoPlay: true,
						muted: true,
						playsInline: true,
						"aria-label": "Camera preview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						role: "status",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { "aria-hidden": true }),
							"Recording · ",
							Math.floor(seconds / 60),
							":",
							String(seconds % 60).padStart(2, "0")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => recorder.current?.stop(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, {}), "Stop recording"]
					})
				]
			}) : file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "note-playback",
				children: [kind === "audio" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
					src: preview,
					controls: true,
					preload: "metadata"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: preview,
					controls: true,
					playsInline: true,
					preload: "metadata"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					file.name,
					" · ",
					(file.size / 1024 / 1024).toFixed(1),
					" MB"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": `Remove ${kind} recording`,
					disabled,
					onClick: () => onChange(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
				})] })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: kind === "audio" ? "Some stories sound better in your own voice." : "A familiar face. A memory. A few honest words." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "note-record-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						disabled: disabled || requesting,
						onClick: start,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), requesting ? "Opening…" : "Record"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "ghost",
						disabled: disabled || requesting,
						onClick: () => input.current?.click(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {}), "Upload"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Up to 2 minutes when recording · 50 MB per file" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: input,
				type: "file",
				className: "sr-only",
				"aria-label": `Upload ${kind} recording`,
				accept: kind === "audio" ? "audio/webm,audio/ogg,audio/mpeg,audio/wav,audio/mp4,audio/x-m4a" : "video/webm,video/mp4,video/quicktime",
				disabled,
				onChange: (e) => {
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
				}
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "note-error",
				role: "alert",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				"data-recording": recording
			})
		]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitNote = createServerFn({ method: "POST" }).inputValidator((data) => noteSchema.parse(data)).handler(createSsrRpc("42fd767e055c4603e58d9612e8448fe4890b005713e29e000e764ce27c3c0850"));
function LeaveANote() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [relationship, setRelationship] = (0, import_react.useState)("Worked together");
	const [message, setMessage] = (0, import_react.useState)("");
	const [audio, setAudio] = (0, import_react.useState)(null);
	const [video, setVideo] = (0, import_react.useState)(null);
	const [consent, setConsent] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [status, setStatus] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	const id = (0, import_react.useRef)("");
	const uploaded = (0, import_react.useRef)({});
	const sendNote = useServerFn(submitNote);
	async function send(event) {
		event.preventDefault();
		setError("");
		if (event.currentTarget.querySelector("[data-recording=\"true\"]")) {
			setError("Stop your recording before sending your story.");
			return;
		}
		if (!consent) {
			setError("Please confirm that you are happy to share your story privately.");
			return;
		}
		if (!id.current) id.current = crypto.randomUUID();
		try {
			const paths = {
				audio_path: audio ? `${id.current}/audio.${mediaExtension(audio, "audio")}` : null,
				video_path: video ? `${id.current}/video.${mediaExtension(video, "video")}` : null
			};
			const data = noteSchema.parse({
				id: id.current,
				name,
				email: email.trim() || null,
				relationship,
				message,
				...paths,
				consent
			});
			setBusy(true);
			for (const kind of ["audio", "video"]) {
				const file = kind === "audio" ? audio : video;
				const path = paths[`${kind}_path`];
				if (!file || !path) continue;
				if (uploaded.current[kind]?.file === file) continue;
				if (uploaded.current[kind]) throw new Error("An attachment changed after uploading. Refresh the page before sending a different recording.");
				setStatus(`Uploading your ${kind === "audio" ? "voice note" : "video"}…`);
				const { error: uploadError } = await supabase.storage.from("voice-submissions").upload(path, file, {
					contentType: file.type,
					upsert: false
				});
				if (uploadError) throw new Error("Your recording could not upload. Check your connection and try again; your draft is still here.");
				uploaded.current[kind] = {
					file,
					path
				};
			}
			setStatus("Sending your story…");
			if ((await sendNote({ data })).received) {
				setSent(true);
				setAudio(null);
				setVideo(null);
			}
		} catch (err) {
			if (err && typeof err === "object" && "issues" in err) setError("Please add your name and a message or recording, and check your email address.");
			else setError(err instanceof Error ? err.message : "Your story could not be sent. Please try again.");
		} finally {
			setBusy(false);
			setStatus("");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "note-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "note-nav",
				"aria-label": "Page navigation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), "Back to the trail"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Shivam Garg ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					children: "↗"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "note-page-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "note-intro",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "note-overline",
							children: "THE PEOPLE MAKE THE STORY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
							"Leave a ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"little ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "story." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Ever met Shivam? Worked together?",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Some of the best chapters are the ones we share."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "note-memory",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: voices_table_jpg_asset_default.url,
								alt: "People gathered around a community table",
								width: "600",
								height: "400",
								decoding: "async"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "Different places. Same conversations." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "note-margin",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { "aria-hidden": true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"No perfect words needed.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Just yours."
							] })]
						})
					]
				}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "note-success",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "note-success-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "note-overline",
							children: "A LITTLE STORY, WELL RECEIVED"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"Thank you for",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"being part of ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "it." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your story has been received privately. It won’t appear on the website without your permission." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "note-send",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								children: ["Back to the trail", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "note-form",
					onSubmit: send,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "note-format-icons",
								"aria-hidden": true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, {})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Your side of the story." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A message, a voice note, a video — or all three." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							disabled: busy,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "note-fields",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "note-name",
										children: ["Your name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "note-name",
											required: true,
											autoComplete: "name",
											maxLength: 100,
											value: name,
											onChange: (e) => setName(e.target.value),
											placeholder: "What should we call you?"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "note-email",
										children: [
											"Email ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "(optional)" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "note-email",
												type: "email",
												autoComplete: "email",
												maxLength: 254,
												value: email,
												onChange: (e) => setEmail(e.target.value),
												placeholder: "For a little thank-you"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "note-relationship",
									children: ["How do you know Shivam?", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: relationship,
										onValueChange: (v) => {
											const option = relationships.find((r) => r === v);
											if (option) setRelationship(option);
										},
										disabled: busy,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											"aria-label": "How do you know Shivam?",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { children: relationship })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: relationships.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: r,
											children: r
										}, r)) })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "note-message",
									className: "note-message-label",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { "aria-hidden": true }),
										"A few words",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Optional if you add a recording" })
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "note-message",
										value: message,
										onChange: (e) => setMessage(e.target.value),
										maxLength: 5e3,
										rows: 5,
										placeholder: "A memory, something we built together, or what it was like working with Shivam…"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "note-media-grid",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteRecorder, {
										kind: "audio",
										file: audio,
										onChange: (file) => {
											if (uploaded.current.audio || uploaded.current.video) {
												id.current = "";
												uploaded.current = {};
											}
											setAudio(file);
										},
										disabled: busy
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteRecorder, {
										kind: "video",
										file: video,
										onChange: (file) => {
											if (uploaded.current.audio || uploaded.current.video) {
												id.current = "";
												uploaded.current = {};
											}
											setVideo(file);
										},
										disabled: busy
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "note-consent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: consent,
										onChange: (e) => setConsent(e.target.checked)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I’m happy to share this story privately with Shivam. Please ask me before publishing it." })]
								})
							]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "note-error",
							role: "alert",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "note-submit-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"For Shivam.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"From you, with a little heart."
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "note-send",
								type: "submit",
								disabled: busy,
								children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {}), busy ? "Sending…" : "Send your story"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "note-status",
							role: "status",
							children: status
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "note-footer",
				children: "Good people. Shared chapters. An open internet."
			})
		]
	});
}
//#endregion
export { LeaveANote as component };
