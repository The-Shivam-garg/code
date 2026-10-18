import { i as stringType, n as literalType, r as objectType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/note-schema-CD0GC0fS.js
var relationships = [
	"Worked together",
	"Met in the community",
	"Built together",
	"Something else"
];
var noteSchema = objectType({
	id: stringType().uuid(),
	name: stringType().trim().min(1, "Please add your name.").max(100),
	email: stringType().trim().email().max(254).nullable(),
	relationship: enumType(relationships),
	message: stringType().trim().max(5e3),
	audio_path: stringType().nullable(),
	video_path: stringType().nullable(),
	consent: literalType(true)
}).superRefine((value, ctx) => {
	if (!value.message && !value.audio_path && !value.video_path) ctx.addIssue({
		code: "custom",
		message: "Leave a message, voice note, or video.",
		path: ["message"]
	});
	for (const kind of ["audio", "video"]) {
		const path = value[`${kind}_path`];
		const extensions = kind === "audio" ? "webm|mp4|ogg|mp3|wav|m4a" : "webm|mp4|mov";
		if (path && !new RegExp(`^${value.id}/${kind}\\.(${extensions})$`).test(path)) ctx.addIssue({
			code: "custom",
			message: "Invalid recording attachment.",
			path: [`${kind}_path`]
		});
	}
});
function mediaExtension(file, kind) {
	if (!file.size || file.size > 52428800) throw new Error("Choose a recording smaller than 50 MB.");
	const extension = (kind === "audio" ? {
		"audio/webm": "webm",
		"audio/ogg": "ogg",
		"audio/mpeg": "mp3",
		"audio/wav": "wav",
		"audio/x-wav": "wav",
		"audio/mp4": "m4a",
		"audio/x-m4a": "m4a"
	} : {
		"video/webm": "webm",
		"video/mp4": "mp4",
		"video/quicktime": "mov"
	})[file.type.split(";")[0] ?? ""];
	if (!extension) throw new Error(`Choose a supported ${kind} recording.`);
	return extension;
}
//#endregion
export { noteSchema as n, relationships as r, mediaExtension as t };
