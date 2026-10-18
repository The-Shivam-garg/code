import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as validLanguage, i as useLanguage, r as languages, t as LANGUAGE_STORAGE_KEY } from "./language-provider-DKKj0NBv.mjs";
import { Ft as ArrowRight, It as ArrowLeft, P as Menu, ct as Earth, dt as Copy, lt as Download, n as X, xt as Check } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose$1, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as SelectTrigger, i as SelectItem, n as Select, r as SelectContent, s as cn, t as Button } from "./select-kZT_4T7Q.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-nav-RvkA18aU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogClose = DialogClose$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, overlayClassName, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: overlayClassName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose$1, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var LANGUAGE_HINT_STORAGE_KEY = "shivam-language-hint-dismissed";
function shouldShowLanguageHint(savedLanguage, dismissed) {
	return savedLanguage === null && dismissed !== "true";
}
function LanguageSelector({ welcome = false }) {
	const { language, setLanguage, t } = useLanguage();
	const [hint, setHint] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!welcome || window.scrollY > 40) return;
		let eligible = true;
		try {
			eligible = shouldShowLanguageHint(localStorage.getItem(LANGUAGE_STORAGE_KEY), localStorage.getItem(LANGUAGE_HINT_STORAGE_KEY));
		} catch {}
		if (!eligible) return;
		const timer = window.setTimeout(() => setHint(true), 900);
		const hide = () => {
			if (window.scrollY > 40) setHint(false);
		};
		window.addEventListener("scroll", hide, { passive: true });
		return () => {
			window.clearTimeout(timer);
			window.removeEventListener("scroll", hide);
		};
	}, [welcome]);
	const dismiss = () => {
		setHint(false);
		try {
			localStorage.setItem(LANGUAGE_HINT_STORAGE_KEY, "true");
		} catch {}
	};
	const current = languages.find((item) => item.code === language) ?? languages[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "language-selector",
		"data-no-translate": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			value: language,
			onOpenChange: (opened) => {
				if (opened) dismiss();
			},
			onValueChange: (value) => {
				dismiss();
				setLanguage(validLanguage(value));
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger, {
				className: "language-trigger",
				"aria-label": t("Choose language"),
				title: current.name,
				"aria-describedby": hint ? "language-welcome" : void 0,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: current.short })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
				className: "language-options",
				position: "popper",
				align: "end",
				children: languages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: item.code,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						lang: item.code,
						children: item.name
					})
				}, item.code))
			})]
		}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "language-welcome",
			id: "language-welcome",
			role: "status",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { "aria-hidden": "true" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [t("Read in your language"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("Choose your preferred language above.") })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "language-welcome-close",
					"aria-label": t("Dismiss language hint"),
					onClick: dismiss,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				})
			]
		})]
	});
}
var homeNavItems = [
	{
		id: "home",
		label: "Home",
		target: "#gate"
	},
	{
		id: "expertise",
		label: "Expertise",
		target: ".expertise-page"
	},
	{
		id: "work",
		label: "Work",
		target: ".work-section"
	},
	{
		id: "gtm",
		label: "GTM Map",
		target: ".gtm-section"
	},
	{
		id: "journey",
		label: "Journey",
		target: ".journey-section"
	},
	{
		id: "community",
		label: "Community",
		target: "#village"
	},
	{
		id: "resources",
		label: "Resources",
		target: "#resources"
	},
	{
		id: "product",
		label: "Product",
		target: "#products"
	},
	{
		id: "testimonials",
		label: "Testimonials",
		target: "#postcards"
	}
];
var aboutInPageLinks = [{
	id: "the-book",
	label: "The Book",
	target: "#about-book"
}, {
	id: "rules",
	label: "Rules",
	target: ".about-rules"
}];
var smooth = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
var goTo = (selector) => {
	if (typeof document === "undefined") return;
	document.querySelector(selector)?.scrollIntoView({
		behavior: smooth(),
		block: "start"
	});
};
function SiteNav({ page }) {
	const { t } = useLanguage();
	const [active, setActive] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [contact, setContact] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let frame = 0;
		const update = () => {
			frame = 0;
			setScrolled(window.scrollY > 40);
			const line = window.innerHeight * .35;
			let currentId = null;
			const targetsToCheck = page === "home" ? homeNavItems : aboutInPageLinks;
			for (const item of targetsToCheck) {
				if (!item.target) continue;
				const el = document.querySelector(item.target);
				if (el && el.getBoundingClientRect().top <= line) currentId = item.id;
			}
			setActive(currentId);
		};
		const schedule = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", schedule, { passive: true });
		window.addEventListener("resize", schedule);
		return () => {
			window.removeEventListener("scroll", schedule);
			window.removeEventListener("resize", schedule);
			cancelAnimationFrame(frame);
		};
	}, [page]);
	const jump = (target) => {
		setOpen(false);
		if (page === "home") goTo(target);
		else window.location.href = `/${target}`;
	};
	const top = () => {
		setOpen(false);
		if (page === "home") window.scrollTo({
			top: 0,
			behavior: smooth()
		});
		else window.location.href = "/";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `site-nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": t("Site navigation"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: "site-nav-brand",
					onClick: top,
					"aria-label": t("Back to top"),
					children: [t("Shivam "), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "✦"
					})]
				}),
				page === "about" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					className: "site-nav-link site-nav-about",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-1 h-3.5 w-3.5" }), t("Home")]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "site-nav-links",
					children: page === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						homeNavItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "site-nav-link text-xs px-2.5",
							"data-active": active === item.id,
							"aria-current": active === item.id ? "true" : void 0,
							onClick: () => item.target && jump(item.target),
							children: t(item.label)
						}, item.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "site-nav-link site-nav-about text-xs px-2.5",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/about",
								children: [t("About"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-3.5 w-3.5" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/shivam-garg-cv.txt",
							download: true,
							className: "site-nav-link inline-flex items-center text-xs px-2.5 font-medium",
							"aria-label": t("Download CV"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 h-3 w-3" }), t("CV")]
						})
					] }) : aboutInPageLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "site-nav-link",
						"data-active": active === item.id,
						"aria-current": active === item.id ? "true" : void 0,
						onClick: () => item.target && jump(item.target),
						children: t(item.label)
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "site-nav-contact text-xs px-3",
					onClick: () => setContact(true),
					children: t("Say Hello")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelector, { welcome: page === "home" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "site-nav-toggle",
					"aria-label": t(open ? "Close menu" : "Open menu"),
					"aria-expanded": open,
					onClick: () => setOpen(!open),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "site-nav-drawer",
			children: page === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				homeNavItems.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					"data-active": active === item.id,
					onClick: () => item.target && jump(item.target),
					className: "w-full justify-start text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-xs opacity-50 mr-2",
						children: [
							"[",
							String(idx + 1).padStart(2, "0"),
							"]"
						]
					}), t(item.label)]
				}, item.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					asChild: true,
					className: "w-full justify-start text-left text-sm site-nav-about",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs opacity-50 mr-2",
								children: "[10]"
							}),
							t("About"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-3.5 w-3.5" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/shivam-garg-cv.txt",
					download: true,
					onClick: () => setOpen(false),
					className: "flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground font-medium",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs opacity-50 mr-2",
							children: "[11]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }),
						t("Download CV")
					]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					asChild: true,
					className: "w-full justify-start text-left text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), t("Home")]
					})
				}),
				aboutInPageLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					"data-active": active === item.id,
					onClick: () => item.target && jump(item.target),
					className: "w-full justify-start text-left text-sm",
					children: t(item.label)
				}, item.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/shivam-garg-cv.txt",
					download: true,
					onClick: () => setOpen(false),
					className: "flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), t("Download CV")]
				})
			] })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: contact,
		onOpenChange: (val) => {
			setContact(val);
			if (!val) setCopied(false);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "intro-dialog",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: t("Let’s start a conversation.") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t("Find the communities, products and people behind DoraDAO.") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "intro-copy",
						onClick: async () => {
							try {
								const url = new URL(window.location.href);
								url.hash = "";
								await navigator.clipboard.writeText(url.href);
								setCopied(true);
							} catch {
								setCopied(false);
							}
						},
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mr-2 h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "mr-2 h-4 w-4" }), t(copied ? "Portfolio link copied" : "Copy portfolio link")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.linkedin.com/in/meshivamgarg",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: t("Connect on LinkedIn ↗")
					})]
				})
			]
		})
	})] });
}
//#endregion
export { DialogTitle as a, DialogDescription as i, DialogClose as n, SiteNav as o, DialogContent as r, Dialog as t };
