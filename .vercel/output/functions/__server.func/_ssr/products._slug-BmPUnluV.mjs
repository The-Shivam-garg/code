import { _ as createFileRoute, g as lazyRouteComponent, q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as thinkingProducts } from "./products-amuyvifo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-BmPUnluV.js
var $$splitComponentImporter = () => import("./products._slug-EAk8d1bw.mjs");
var Route = createFileRoute("/products/$slug")({
	loader: ({ params }) => {
		const product = thinkingProducts.find((p) => p.slug === params.slug);
		if (!product) throw notFound();
		return product;
	},
	head: ({ loaderData }) => {
		const title = loaderData ? `${loaderData.name} — Thinking | Shivam Garg` : "Product not found — Shivam Garg";
		const description = loaderData ? `${loaderData.name}: ${loaderData.oneLiner}` : "This product is not available.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
