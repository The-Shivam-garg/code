import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { n as noteSchema } from "./note-schema-CD0GC0fS.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notes.functions-DJEBUcIG.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitNote_createServerFn_handler = createServerRpc({
	id: "42fd767e055c4603e58d9612e8448fe4890b005713e29e000e764ce27c3c0850",
	name: "submitNote",
	filename: "src/lib/notes.functions.ts"
}, (opts) => submitNote.__executeServer(opts));
var submitNote = createServerFn({ method: "POST" }).inputValidator((data) => noteSchema.parse(data)).handler(submitNote_createServerFn_handler, async ({ data }) => {
	const url = process.env["SUPABASE_URL"];
	const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
	if (!url || !key) throw new Error("Submissions are temporarily unavailable. Please try again.");
	const { error } = await createClient(url, key, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		},
		global: { fetch: (input, init) => {
			const headers = new Headers(init?.headers);
			if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
			headers.set("apikey", key);
			return fetch(input, {
				...init,
				headers
			});
		} }
	}).from("voice_submissions").insert(data);
	if (error && error.code !== "23505") throw new Error("Your note could not be sent. Please try again; your draft is still here.");
	return {
		received: true,
		id: data.id
	};
});
//#endregion
export { submitNote_createServerFn_handler };
