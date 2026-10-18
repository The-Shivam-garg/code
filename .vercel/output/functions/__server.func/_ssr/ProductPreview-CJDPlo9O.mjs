import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { D as Network, Mt as Award, a as Users, kt as Blocks, xt as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductPreview-CJDPlo9O.js
var import_jsx_runtime = require_jsx_runtime();
var academy_cover_default = "/assets/academy-cover-CZCapmAk.jpg";
function ProductPreview({ product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `product-preview preview-${product.slug}`,
		"aria-label": `${product.name} illustrative cover`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "preview-topline",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CONCEPT COVER" })]
		}), product.slug === "ai-academy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: academy_cover_default,
			alt: "Glass network sculpture with a coral sphere, an illustrative AI Academy cover",
			width: 1024,
			height: 768,
			loading: "lazy"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "preview-title",
			children: [
				"Learn.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"Build.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"Repeat."
			]
		})] }) : product.slug === "certifier" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
				className: "preview-symbol",
				strokeWidth: 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-title",
				children: [
					"Make it",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"official."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-certificate",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 18 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Certificate of achievement" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "preview-rule" })
				]
			})
		] }) : product.slug === "helasyn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, {
				className: "preview-symbol",
				strokeWidth: 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-title",
				children: [
					"HeLa",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Syn."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "preview-bottom",
				children: "CONNECTION → POSSIBILITY"
			})
		] }) : product.slug === "ambassador-os" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
				className: "preview-symbol",
				strokeWidth: 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-title",
				children: [
					"Belonging.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"At scale."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-metric",
				children: ["62% ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "WEEK-8 RETENTION · SAMPLE" })]
			})
		] }) : product.slug === "kol-campaign-tracker" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-title",
				children: [
					"Less noise.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"More signal."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "preview-chart",
				children: [
					85,
					66,
					76,
					45,
					35,
					20
				].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { height: `${h}%` } }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "preview-bottom",
				children: "$4.10 → $0.80 CPA · SAMPLE"
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, {
				className: "preview-symbol",
				strokeWidth: 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-title",
				children: [
					"You’re in.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"What’s next?"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-checklist",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01 / A warm welcome" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02 / Find your people" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03 / Make a contribution" })
				]
			})
		] })]
	});
}
//#endregion
export { ProductPreview as t };
