import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as useLanguage } from "./language-provider-DKKj0NBv.mjs";
import { Ft as ArrowRight, It as ArrowLeft, Nt as Atom, O as Mouse, Ot as BookOpen, Pt as ArrowUpRight, Z as Heart, at as Feather, p as Sparkles } from "../_libs/lucide-react.mjs";
import { t as Button } from "./select-kZT_4T7Q.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogTitle, i as DialogDescription, o as SiteNav, r as DialogContent, t as Dialog } from "./site-nav-RvkA18aU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-D-qzGVlI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function splitWords(children) {
	return import_react.Children.map(children, (child) => {
		if (typeof child === "string") return child.split(/(\s+)/).map((word, index) => /^\s*$/.test(word) ? word : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "about-scroll-word",
			children: word
		}, index));
		if (!(0, import_react.isValidElement)(child) || child.props.children === void 0) return child;
		return (0, import_react.cloneElement)(child, {}, splitWords(child.props.children));
	});
}
/** Keeps the original headings, inline artwork and reading order intact. */
function ScrollRevealText({ children }) {
	const { translateNode, t } = useLanguage();
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const element = ref.current;
		if (!element) return;
		const words = Array.from(element.querySelectorAll(".about-scroll-word"));
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
		let frame = 0;
		const update = () => {
			frame = 0;
			const bounds = element.getBoundingClientRect();
			const viewport = window.innerHeight;
			const distance = bounds.height + viewport * .5;
			const progress = Math.max(0, Math.min(1, (viewport * .85 - bounds.top) / distance));
			words.forEach((word, index) => {
				word.classList.toggle("is-revealed", reducedMotion.matches || progress >= (index + 1) / words.length);
			});
			element.dataset["scrollReady"] = "true";
		};
		const schedule = () => {
			if (!frame) frame = window.requestAnimationFrame(update);
		};
		const observer = new ResizeObserver(schedule);
		observer.observe(element);
		window.addEventListener("scroll", schedule, { passive: true });
		window.addEventListener("resize", schedule);
		reducedMotion.addEventListener("change", schedule);
		update();
		return () => {
			window.cancelAnimationFrame(frame);
			observer.disconnect();
			window.removeEventListener("scroll", schedule);
			window.removeEventListener("resize", schedule);
			reducedMotion.removeEventListener("change", schedule);
		};
	}, [t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "about-scroll-text",
		children: splitWords(translateNode(children))
	});
}
var readingTopics = [
	{
		id: "philosophy",
		name: "Philosophy",
		title: "A polymath in progress.",
		question: "What does it mean to become your best self?",
		heading: "A life examined.",
		text: "A builder at heart, a learner by nature, and a community guy by choice. Different communities. Same purpose.",
		reflection: "Building is more than making things. It is asking what matters, choosing where to put our attention, and finding people who want to make something meaningful together.",
		copy: "A window into my way of thinking.",
		description: "Thoughts on purpose, belonging and becoming. These reflections explore the questions behind the work: what we value, why we build, and how we choose to live.",
		quote: "Different communities. Same purpose."
	},
	{
		id: "research",
		name: "Research",
		title: "Look a little closer.",
		question: "What changes when we look a little closer?",
		heading: "Questions before answers.",
		text: "Chess, life, and finance share one truth: everything changes when you understand the rules.",
		reflection: "Understanding starts with curiosity. Looking beyond the obvious, connecting ideas across disciplines, and testing assumptions can change the way we approach a problem.",
		copy: "A notebook for asking better questions.",
		description: "Observations across technology, people and ideas. This chapter follows curiosity through patterns, possibilities and the search for a clearer understanding.",
		quote: "Everything changes when you understand the rules."
	},
	{
		id: "life",
		name: "Life",
		title: "Across borders.",
		question: "Where will curiosity take you next?",
		heading: "The people along the way.",
		text: "Exploring technology, people and ideas across borders, trying to create opportunities that help more people build, belong and become their best selves.",
		reflection: "Travel and community bring new perspectives. The conversations, small discoveries and shared experiences along the way become part of how we see the world.",
		copy: "Notes from a journey still unfolding.",
		description: "Reflections on travel, community and everyday life. A collection of lessons from meeting people, crossing borders and making room for new experiences.",
		quote: "Build, belong and become your best self."
	},
	{
		id: "fantasy",
		name: "Fantasy",
		title: "For curious minds.",
		question: "What would you build if anything were possible?",
		heading: "Room for the impossible.",
		text: "For builders, dreamers and curious minds — this is an open invitation to think, explore and build a richer life.",
		reflection: "Imagination gives an idea somewhere to begin. Before a possibility becomes a product or a community, someone has to picture a world that does not yet exist.",
		copy: "An invitation to imagine what comes next.",
		description: "Ideas beyond the everyday: possibilities, imagined worlds and questions without easy answers. Space for the dreamer alongside the builder.",
		quote: "Think, explore and build a richer life."
	}
];
function readingTopicAt(index) {
	return readingTopics[(index % readingTopics.length + readingTopics.length) % readingTopics.length] ?? readingTopics[0];
}
var thinker_png_asset_default = {
	version: 1,
	asset_id: "77fb711e-9874-4294-b048-7a12080fb724",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/77fb711e-9874-4294-b048-7a12080fb724/about-thinker.png",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/77fb711e-9874-4294-b048-7a12080fb724/about-thinker.png",
	original_filename: "about-thinker.png",
	size: 6794,
	content_type: "image/png",
	created_at: "2026-10-07T10:36:32Z"
};
var reader_png_asset_default = {
	version: 1,
	asset_id: "a0ccec81-6e3a-4d6d-be4f-d42cdf9e4cc4",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/a0ccec81-6e3a-4d6d-be4f-d42cdf9e4cc4/about-reader.png",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/a0ccec81-6e3a-4d6d-be4f-d42cdf9e4cc4/about-reader.png",
	original_filename: "about-reader.png",
	size: 6279,
	content_type: "image/png",
	created_at: "2026-10-07T10:36:24Z"
};
var icons = [
	Feather,
	Atom,
	BookOpen,
	Sparkles
];
function AboutReading() {
	const { t } = useLanguage();
	const [index, setIndex] = (0, import_react.useState)(0);
	const [reading, setReading] = (0, import_react.useState)(false);
	const current = readingTopicAt(index);
	const position = readingTopics.indexOf(current);
	const Icon = icons[position] ?? Feather;
	const turn = (direction) => setIndex((position + direction + readingTopics.length) % readingTopics.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "about-book",
		id: "about-book",
		"aria-label": t("A polymath in progress book"),
		"data-reading-topic": current.id,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "about-book-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: `about-book-cover about-topic-${current.id}`,
					onClick: () => setReading(true),
					"aria-label": t(String(`Open ${current.name} book`)),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "about-book-spine",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "about-book-cover-face",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("SHIVAM GARG") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "about-book-cover-title",
								children: [
									t("A Polymath"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t("in Progress.") })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: current.id === "life" || current.id === "fantasy" ? thinker_png_asset_default.url : reader_png_asset_default.url,
								alt: "",
								loading: "lazy",
								decoding: "async"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "about-book-cover-topic",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), t(String(current.name))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "about-book-cover-caption",
								children: t(String(current.question))
							})
						]
					}, current.id)]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "about-thoughts",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [t("Read Thoughts "), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t("About") })] }), readingTopics.map((thought, next) => {
						const TopicIcon = icons[next] ?? Feather;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							"aria-pressed": position === next,
							onClick: () => setIndex(next),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopicIcon, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(String(thought.name)) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
							]
						}, thought.id);
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "about-book-right",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "about-book-preview",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "about-live-spread about-readable-spread",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [t("A POLYMATH IN PROGRESS · "), t(String(current.name))] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(String(current.title)) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(String(current.text)) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "about-page-art",
								src: reader_png_asset_default.url,
								alt: "",
								loading: "lazy",
								decoding: "async"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: 12 + position * 2 })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(current.name).toUpperCase() }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(String(current.heading)) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(String(current.reflection)) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: t(String(current.question)) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: 13 + position * 2 })
						] })]
					}, current.id), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "about-page-controls",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t(String(current.title)) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								position + 1,
								" / ",
								readingTopics.length
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon",
								"aria-label": t("Previous book page"),
								title: t("Previous page"),
								onClick: () => turn(-1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								"aria-label": t("Next book page"),
								title: t("Next page"),
								onClick: () => turn(1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "about-book-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t(String(current.copy)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(String(current.description)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: t(String(current.quote)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "link",
							onClick: () => setReading(true),
							children: [
								t("Read "),
								t(String(current.name)),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
							]
						})
					]
				}, `copy-${current.id}`)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: reading,
				onOpenChange: setReading,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "about-dialog",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [
							t(String(current.name)),
							" — ",
							t(String(current.title))
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t(String(current.question)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(String(current.text)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(String(current.heading)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(String(current.reflection)) })
					]
				})
			})
		]
	});
}
var characters = [
	{
		name: "The reader",
		asset: {
			version: 1,
			asset_id: "c5638eea-793d-4e5b-82ce-6661956813a1",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/c5638eea-793d-4e5b-82ce-6661956813a1/about-character-reader.png",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/c5638eea-793d-4e5b-82ce-6661956813a1/about-character-reader.png",
			original_filename: "about-character-reader.png",
			size: 10919,
			content_type: "image/png",
			created_at: "2026-10-07T10:51:25Z"
		},
		text: "A learner by nature. There is always another idea to explore."
	},
	{
		name: "The traveler",
		asset: {
			version: 1,
			asset_id: "28bf908e-d821-49af-96a2-0b30affb60ce",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/28bf908e-d821-49af-96a2-0b30affb60ce/about-character-traveler.png",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/28bf908e-d821-49af-96a2-0b30affb60ce/about-character-traveler.png",
			original_filename: "about-character-traveler.png",
			size: 12877,
			content_type: "image/png",
			created_at: "2026-10-07T10:51:25Z"
		},
		text: "Across borders, meeting people and discovering new perspectives."
	},
	{
		name: "The dreamer",
		asset: {
			version: 1,
			asset_id: "c8638d8a-f798-425b-af25-a5af0611a2b4",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/c8638d8a-f798-425b-af25-a5af0611a2b4/about-character-dreamer.png",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/c8638d8a-f798-425b-af25-a5af0611a2b4/about-character-dreamer.png",
			original_filename: "about-character-dreamer.png",
			size: 12614,
			content_type: "image/png",
			created_at: "2026-10-07T10:51:25Z"
		},
		text: "For curious minds — an open invitation to imagine what is possible."
	},
	{
		name: "The explorer",
		asset: {
			version: 1,
			asset_id: "b79fbdcc-47e3-4051-a73a-a907c175d7ba",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/b79fbdcc-47e3-4051-a73a-a907c175d7ba/about-character-explorer.png",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/b79fbdcc-47e3-4051-a73a-a907c175d7ba/about-character-explorer.png",
			original_filename: "about-character-explorer.png",
			size: 13300,
			content_type: "image/png",
			created_at: "2026-10-07T10:51:25Z"
		},
		text: "Exploring technology, people and ideas, one question at a time."
	},
	{
		name: "The builder",
		asset: {
			version: 1,
			asset_id: "d95449c2-810b-42d1-b169-23e1b76f80cc",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/d95449c2-810b-42d1-b169-23e1b76f80cc/about-character-builder.png",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/d95449c2-810b-42d1-b169-23e1b76f80cc/about-character-builder.png",
			original_filename: "about-character-builder.png",
			size: 9752,
			content_type: "image/png",
			created_at: "2026-10-07T10:51:25Z"
		},
		text: "A builder at heart, creating opportunities for more people to build and belong."
	},
	{
		name: "The investor",
		asset: {
			version: 1,
			asset_id: "0258d1f7-2484-4c25-a431-d0099a2ec84b",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/0258d1f7-2484-4c25-a431-d0099a2ec84b/about-character-investor.png",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/0258d1f7-2484-4c25-a431-d0099a2ec84b/about-character-investor.png",
			original_filename: "about-character-investor.png",
			size: 17034,
			content_type: "image/png",
			created_at: "2026-10-07T10:51:25Z"
		},
		text: "Chess, life and finance share one truth: understand the rules."
	},
	{
		name: "The wanderer",
		asset: {
			version: 1,
			asset_id: "70f89ac3-0569-43ee-9483-025c98b566d5",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/70f89ac3-0569-43ee-9483-025c98b566d5/about-character-wanderer.png",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/70f89ac3-0569-43ee-9483-025c98b566d5/about-character-wanderer.png",
			original_filename: "about-character-wanderer.png",
			size: 10465,
			content_type: "image/png",
			created_at: "2026-10-07T10:51:25Z"
		},
		text: "The journey is still unfolding. Curiosity keeps it moving."
	},
	{
		name: "The thinker",
		asset: {
			version: 1,
			asset_id: "239343a8-5c77-4eac-a588-698a53a450b9",
			project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
			url: "/__l5e/assets-v1/239343a8-5c77-4eac-a588-698a53a450b9/about-character-thinker.png",
			r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/239343a8-5c77-4eac-a588-698a53a450b9/about-character-thinker.png",
			original_filename: "about-character-thinker.png",
			size: 10905,
			content_type: "image/png",
			created_at: "2026-10-07T10:51:25Z"
		},
		text: "Different communities. Same purpose. A polymath in progress."
	}
];
function AboutCharacters() {
	const { t } = useLanguage();
	const [selected, setSelected] = (0, import_react.useState)(null);
	const current = selected === null ? void 0 : characters[selected];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "about-characters",
		"aria-label": t("People along the journey"),
		children: characters.map((character, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			className: "about-character",
			"aria-label": t(String(character.name)),
			title: t(String(character.name)),
			onClick: () => setSelected(index),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: character.asset.url,
				alt: "",
				loading: "lazy"
			})
		}, character.name))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: current !== void 0,
		onOpenChange: (open) => {
			if (!open) setSelected(null);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "about-dialog",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: t(String(current?.name)) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t(String(current?.text)) }),
				current && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: current.asset.url,
					alt: t(String(current.name))
				})
			]
		})
	})] });
}
var sculpture_png_asset_default = {
	version: 1,
	asset_id: "9124a2b1-6651-495c-a570-9566ebd5a379",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/9124a2b1-6651-495c-a570-9566ebd5a379/about-sculpture-clean.png",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/9124a2b1-6651-495c-a570-9566ebd5a379/about-sculpture-clean.png",
	original_filename: "about-sculpture-clean.png",
	size: 83461,
	content_type: "image/png",
	created_at: "2026-10-07T10:36:58Z"
};
var traveler_png_asset_default = {
	version: 1,
	asset_id: "38dd56b4-1458-4194-92b2-301fda7b8601",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/38dd56b4-1458-4194-92b2-301fda7b8601/about-traveler.png",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/38dd56b4-1458-4194-92b2-301fda7b8601/about-traveler.png",
	original_filename: "about-traveler.png",
	size: 7922,
	content_type: "image/png",
	created_at: "2026-10-07T10:36:34Z"
};
var resting_png_asset_default = {
	version: 1,
	asset_id: "ef5471ee-9f90-42d6-85da-80649ea73c46",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/ef5471ee-9f90-42d6-85da-80649ea73c46/about-resting.png",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/ef5471ee-9f90-42d6-85da-80649ea73c46/about-resting.png",
	original_filename: "about-resting.png",
	size: 6848,
	content_type: "image/png",
	created_at: "2026-10-07T10:36:26Z"
};
var money_png_asset_default = {
	version: 1,
	asset_id: "082ff48e-721c-4670-817c-8ec7a6c702ad",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/082ff48e-721c-4670-817c-8ec7a6c702ad/about-money.png",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/082ff48e-721c-4670-817c-8ec7a6c702ad/about-money.png",
	original_filename: "about-money.png",
	size: 26083,
	content_type: "image/png",
	created_at: "2026-10-07T10:36:22Z"
};
var signature_png_asset_default = {
	version: 1,
	asset_id: "ccec9e84-bf3c-48fb-9d36-4d512e525009",
	project_id: "45d78f5c-6060-4c82-88af-7d0eefadd9b4",
	url: "/__l5e/assets-v1/ccec9e84-bf3c-48fb-9d36-4d512e525009/signature.png",
	r2_key: "a/v1/45d78f5c-6060-4c82-88af-7d0eefadd9b4/ccec9e84-bf3c-48fb-9d36-4d512e525009/signature.png",
	original_filename: "signature.png",
	size: 306238,
	content_type: "image/png",
	created_at: "2026-10-07T13:52:25Z"
};
function AboutPage() {
	const { t, language } = useLanguage();
	const [dialog, setDialog] = (0, import_react.useState)(null);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [clock, setClock] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const update = () => setClock(new Intl.DateTimeFormat(language, {
			dateStyle: "medium",
			timeStyle: "short",
			timeZone: "Asia/Kolkata"
		}).format(/* @__PURE__ */ new Date()));
		update();
		const interval = setInterval(update, 6e4);
		return () => clearInterval(interval);
	}, [language]);
	const move = (event) => {
		if (event.pointerType !== "mouse") return;
		const rect = event.currentTarget.getBoundingClientRect();
		event.currentTarget.style.setProperty("--about-shift", `${((event.clientX - rect.left) / rect.width - .5) * 16}px`);
	};
	const scrollBook = () => document.getElementById("about-book")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "about-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, { page: "about" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "about-cover",
				onPointerMove: move,
				onPointerLeave: (e) => e.currentTarget.style.setProperty("--about-shift", "0px"),
				"aria-label": t("Living in Check"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "about-scribble scribble-one",
						"aria-hidden": "true",
						children: [
							"H!",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							t("Nf3")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "about-scribble scribble-two",
						"aria-hidden": "true",
						children: [
							t("Bc5"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"N"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "about-cover-figure",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("LIVING") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("IN CHECK") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "about-sculpture",
							onClick: () => setDialog("A polymath in progress"),
							"aria-label": t("Meet the human behind this"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: sculpture_png_asset_default.url,
								alt: t("Sculpture carrying a passport, travel journals and a camera"),
								fetchPriority: "high",
								decoding: "async"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "about-journey",
						children: [t("Journey with "), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t("Shivam") })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "about-scroll",
						onClick: scrollBook,
						"aria-label": t("Explore the book"),
						title: t("Explore the book"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mouse, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "about-cover-meta",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("Shivam Garg.") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("A Polymath in Progress.") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { children: clock })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "about-statement",
				"aria-label": t("About Shivam"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollRevealText, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"A builder at heart, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: reader_png_asset_default.url,
								alt: "",
								loading: "lazy",
								decoding: "async"
							}),
							" a learner by nature,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "about-wide-break" }),
							" and a community guy by choice —",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: traveler_png_asset_default.url,
								alt: "",
								loading: "lazy",
								decoding: "async"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "about-wide-break" }),
							" exploring",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: thinker_png_asset_default.url,
								alt: "",
								loading: "lazy",
								decoding: "async"
							}),
							" technology, people and ideas",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "about-wide-break" }),
							" across borders, trying to create opportunities",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "about-wide-break" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"that help more people build, belong",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: resting_png_asset_default.url,
									alt: "",
									loading: "lazy",
									decoding: "async"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "about-wide-break" }),
								" and become their best selves."
							] })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Some lessons came from chessboards and books. Most came from people — builders, dreamers and generous strangers who showed me that",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "curiosity is a practice, not a personality." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Today I split my time between building products, gathering communities and asking better questions — convinced that",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "the right room, the right people and the right question can change what anyone believes is possible." })
						] })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "about-statement-signature",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: signature_png_asset_default.url,
							alt: t("Shivam's handwritten signature"),
							loading: "lazy",
							decoding: "async"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("Shivam Garg.") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("A Polymath in Progress.") })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "about-scribble",
						"aria-hidden": "true",
						children: "e4"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutReading, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "about-statement about-reflection",
				"aria-label": t("A Polymath in Progress."),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollRevealText, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I want a life that leaves room for more than work: a strong body, a curious mind, honest friendships and the freedom to explore. Building matters to me, but so does becoming someone who can pause, listen and notice what ambition alone might miss." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Being a polymath is not about collecting titles or having an answer to everything. It is about letting different parts of life teach each other — carrying curiosity into unfamiliar places, bringing creativity to difficult questions and choosing character over applause. I am still learning how to hold those things together." })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "about-rules",
				"aria-label": t("Chess, life and finance"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRevealText, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Chess, life, and finance",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"share one truth",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"everything changes",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"when you understand"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "the rules." })
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "about-money",
						src: money_png_asset_default.url,
						alt: t("Illustrated dollar bill"),
						loading: "lazy",
						decoding: "async"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "about-scribble",
						"aria-hidden": "true",
						children: "b8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutCharacters, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "about-footer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("Money in Check.") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "link",
							onClick: scrollBook,
							children: t("The Book")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "link",
							onClick: () => setDialog("About the author"),
							children: t("About the Author")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "link",
							onClick: () => setSaved(!saved),
							"aria-pressed": saved,
							children: [
								t(String(saved ? "On your Wishlist" : "Check the Wishlist")),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { fill: saved ? "currentColor" : "none" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "link",
							onClick: () => setDialog("Connect with Shivam"),
							children: [t("Connect with Shivam "), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						t(" Shivam Garg ( aka Hooman )")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "about-signature",
						children: t("Shivam")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "about-footer-social",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("Meet the human behind this.") }), [
							"LinkedIn",
							"Instagram",
							"Twitter"
						].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "link",
							onClick: () => setDialog(name),
							children: t(String(name))
						}, name))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: dialog !== null,
				onOpenChange: (open) => {
					if (!open) setDialog(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "about-dialog",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: dialog }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t(String(dialog === "LinkedIn" || dialog === "Instagram" || dialog === "Twitter" || dialog === "Connect with Shivam" ? "The contact destination has not been provided yet." : "A builder at heart, a learner by nature, and a community guy by choice.")) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								children: [t("Explore Shivam’s work "), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						})
					]
				})
			})
		]
	});
}
var SplitComponent = AboutPage;
//#endregion
export { SplitComponent as component };
