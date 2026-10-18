CREATE TABLE public.voice_submissions (
 id uuid PRIMARY KEY,
 name text NOT NULL CHECK (char_length(btrim(name)) BETWEEN 1 AND 100),
 email text CHECK (email IS NULL OR (char_length(email) <= 254 AND email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$')),
 relationship text NOT NULL CHECK (relationship IN ('Worked together','Met in the community','Built together','Something else')),
 message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 5000),
 audio_path text,
 video_path text,
 consent boolean NOT NULL CHECK (consent = true),
 created_at timestamptz NOT NULL DEFAULT now(),
 CHECK (char_length(btrim(message)) > 0 OR audio_path IS NOT NULL OR video_path IS NOT NULL),
 CHECK (audio_path IS NULL OR audio_path ~ ('^' || id::text || '/audio\.(webm|mp4|ogg|mp3|wav|m4a)$')),
 CHECK (video_path IS NULL OR video_path ~ ('^' || id::text || '/video\.(webm|mp4|mov)$'))
);
GRANT INSERT ON public.voice_submissions TO anon, authenticated;
GRANT ALL ON public.voice_submissions TO service_role;
ALTER TABLE public.voice_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors may leave private notes" ON public.voice_submissions FOR INSERT TO anon, authenticated WITH CHECK (consent = true);
CREATE POLICY "Visitors may upload note recordings" ON storage.objects FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'voice-submissions' AND name ~ '^[0-9a-f-]{36}/(audio\.(webm|mp4|ogg|mp3|wav|m4a)|video\.(webm|mp4|mov))$');
COMMENT ON TABLE public.voice_submissions IS 'Private visitor submissions, accessible to the site owner through Lovable Cloud only; no visitor read/update/delete access.';