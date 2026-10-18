import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { It as ArrowLeft, Pt as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as thinkingFields } from "./products-amuyvifo.mjs";
import { t as Route } from "./products._slug-BmPUnluV.mjs";
import { t as ProductPreview } from "./ProductPreview-CJDPlo9O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-EAk8d1bw.js
var import_jsx_runtime = require_jsx_runtime();
function ProductThinkingPage() {
	const product = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "thinking-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "thinking-nav",
				"aria-label": "Product navigation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					hash: "products",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 }), " All products"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "product-eyebrow",
					children: "SHIVAM GARG / THINKING"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "thinking-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "product-eyebrow",
						children: [
							product.category,
							" / ",
							product.sample ? "SAMPLE CONCEPT" : "REAL PRODUCT"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: product.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "thinking-lead",
						children: product.oneLiner
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `product-status status-${product.status.toLowerCase()}`,
						children: product.status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "thinking-note",
						children: product.note
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPreview, { product })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "thinking-body",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "product-eyebrow",
					children: "THE THINKING"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: thinkingFields.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#thinking-${i}`,
					children: [
						String(i + 1).padStart(2, "0"),
						" / ",
						f
					]
				}) }, f)) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", { children: [
					product.oneLiner,
					product.audience,
					product.problem,
					product.insight,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "thinking-decisions",
						children: product.decisions.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "product-eyebrow",
								children: ["DECISION 0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: d.decision }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tradeoff / " }), d.tradeoff] })
						] }, i))
					}, "decisions"),
					product.cuts,
					product.measurement,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "thinking-results",
						children: product.results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: r.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: r.label })] }, r.label))
					}, "results"),
					product.next,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `product-status status-${product.status.toLowerCase()}`,
						children: product.status
					}), !product.statusConfirmed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "thinking-note",
						children: "Provisional — current status not yet confirmed."
					})] }, "status"),
					product.links.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: product.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: l.href,
						target: "_blank",
						rel: "noreferrer",
						children: [
							l.label,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })
						]
					}) }, l.href)) }, "links") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.sample ? "No public link — sample concept." : "Verified product links have not been supplied yet." }, "links")
				].map((content, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: `thinking-${i}`,
					className: "thinking-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "product-eyebrow",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [thinkingFields[i], i === 7 ? " (numbers)" : ""] }), typeof content === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content }) : content] })]
				}, thinkingFields[i])) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "thinking-footer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					hash: "products",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 }), " Back to Night Camp"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "product-eyebrow",
					children: "PRODUCTS / SYSTEMS / EXPERIMENTS"
				})]
			})
		]
	});
}
//#endregion
export { ProductThinkingPage as component };
