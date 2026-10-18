import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/language-provider-DKKj0NBv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var languages = [
	{
		code: "en",
		name: "English",
		short: "En"
	},
	{
		code: "es",
		name: "Español",
		short: "Es"
	},
	{
		code: "fr",
		name: "Français",
		short: "Fr"
	},
	{
		code: "de",
		name: "Deutsch",
		short: "De"
	},
	{
		code: "hi",
		name: "हिन्दी",
		short: "हि"
	},
	{
		code: "zh-CN",
		name: "中文",
		short: "中"
	},
	{
		code: "ms",
		name: "Bahasa Melayu",
		short: "Ms"
	},
	{
		code: "ko",
		name: "한국어",
		short: "한"
	}
];
var LANGUAGE_STORAGE_KEY = "shivam-language";
function validLanguage(value) {
	return languages.find((language) => language.code === value)?.code ?? "en";
}
function translateText(text, dictionary) {
	const key = text.replace(/\s+/g, " ").trim();
	const translated = dictionary[key] ?? dictionary[key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()];
	if (translated) return `${text.match(/^\s*/)?.[0] ?? ""}${translated}${text.match(/\s*$/)?.[0] ?? ""}`;
	return text.split(/( · | — |, |: |\n)/).map((part) => {
		const exact = dictionary[part.trim()];
		if (exact) return exact;
		let value = part;
		for (const phrase of Object.keys(dictionary).sort((a, b) => b.length - a.length)) {
			if (!phrase || !value.includes(phrase)) continue;
			const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
			value = value.replace(new RegExp(`(?<![\\p{L}])${escaped}(?![\\p{L}])`, "gu"), dictionary[phrase] ?? phrase);
		}
		return value;
	}).join("");
}
function createLocaleLoader(loaders) {
	const pending = /* @__PURE__ */ new Map();
	return (language) => {
		if (language === "en") return Promise.resolve({});
		const cached = pending.get(language);
		if (cached) return cached;
		const load = loaders[`../lib/locales/${language}.json`];
		if (!load) return Promise.reject(/* @__PURE__ */ new Error("Language unavailable"));
		const request = Promise.resolve().then(load).catch((error) => {
			pending.delete(language);
			throw error;
		});
		pending.set(language, request);
		return request;
	};
}
var LanguageContext = (0, import_react.createContext)({
	language: "en",
	setLanguage: () => {},
	t: (text) => text,
	translateNode: (node) => node
});
var loadDictionary = createLocaleLoader(/* @__PURE__ */ Object.assign({
	"../lib/locales/de.json": () => import("./de-BSdIHv8E.mjs").then((m) => m["default"]),
	"../lib/locales/es.json": () => import("./es-TfqdNKLb.mjs").then((m) => m["default"]),
	"../lib/locales/fr.json": () => import("./fr-vLh_xoGL.mjs").then((m) => m["default"]),
	"../lib/locales/hi.json": () => import("./hi-BsSotF4b.mjs").then((m) => m["default"]),
	"../lib/locales/ko.json": () => import("./ko-CPbwXrHG.mjs").then((m) => m["default"]),
	"../lib/locales/ms.json": () => import("./ms-BJrF5QvX.mjs").then((m) => m["default"]),
	"../lib/locales/zh-CN.json": () => import("./zh-CN-5Nq3Fplt.mjs").then((m) => m["default"])
}));
function LanguageProvider({ children }) {
	const [language, updateLanguage] = (0, import_react.useState)("en");
	const [dictionary, setDictionary] = (0, import_react.useState)({});
	const [retry, setRetry] = (0, import_react.useState)(0);
	const setLanguage = (0, import_react.useCallback)((next) => {
		updateLanguage(next);
		setRetry((value) => value + 1);
		try {
			localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			updateLanguage(validLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY)));
		} catch {}
		const onStorage = (event) => {
			if (event.key === "shivam-language") updateLanguage(validLanguage(event.newValue));
		};
		window.addEventListener("storage", onStorage);
		const onOnline = () => setRetry((value) => value + 1);
		window.addEventListener("online", onOnline);
		return () => {
			window.removeEventListener("storage", onStorage);
			window.removeEventListener("online", onOnline);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		if (language === "en") {
			setDictionary({});
			document.documentElement.lang = "en";
			return;
		}
		let timer;
		let attempts = 0;
		const attempt = () => {
			loadDictionary(language).then((value) => {
				if (!cancelled) {
					setDictionary(value);
					document.documentElement.lang = language;
				}
			}).catch(() => {
				if (!cancelled && navigator.onLine && attempts < 2) {
					attempts += 1;
					timer = setTimeout(attempt, attempts * 5e3);
				}
			});
		};
		attempt();
		return () => {
			cancelled = true;
			clearTimeout(timer);
		};
	}, [language, retry]);
	const t = (0, import_react.useMemo)(() => {
		const cache = /* @__PURE__ */ new Map();
		return (text) => {
			const cached = cache.get(text);
			if (cached !== void 0) return cached;
			const translated = translateText(text, dictionary);
			cache.set(text, translated);
			return translated;
		};
	}, [dictionary]);
	const translateNode = (0, import_react.useCallback)(function translate(node) {
		return import_react.Children.map(node, (child) => {
			if (typeof child === "string") return t(child);
			if (!(0, import_react.isValidElement)(child) || child.props.children === void 0) return child;
			return (0, import_react.cloneElement)(child, {}, translate(child.props.children));
		});
	}, [t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value: {
			language,
			setLanguage,
			t,
			translateNode
		},
		children
	});
}
var useLanguage = () => (0, import_react.useContext)(LanguageContext);
//#endregion
export { validLanguage as a, useLanguage as i, LanguageProvider as n, languages as r, LANGUAGE_STORAGE_KEY as t };
