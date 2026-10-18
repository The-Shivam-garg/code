import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { thinkingFields, thinkingProducts } from "@/data/products";
import { ProductPreview } from "@/components/trail/ProductPreview";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = thinkingProducts.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.name} — Thinking | Shivam Garg`
      : "Product not found — Shivam Garg";
    const description = loaderData
      ? `${loaderData.name}: ${loaderData.oneLiner}`
      : "This product is not available.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductThinkingPage,
});

function ProductThinkingPage() {
  const product = Route.useLoaderData();
  return (
    <main className="thinking-page">
      <nav className="thinking-nav" aria-label="Product navigation">
        <Link to="/" hash="products">
          <ArrowLeft size={18} /> All products
        </Link>
        <span className="product-eyebrow">SHIVAM GARG / THINKING</span>
      </nav>
      <header className="thinking-header">
        <div>
          <p className="product-eyebrow">
            {product.category} / {product.sample ? "SAMPLE CONCEPT" : "REAL PRODUCT"}
          </p>
          <h1>{product.name}</h1>
          <p className="thinking-lead">{product.oneLiner}</p>
          <span className={`product-status status-${product.status.toLowerCase()}`}>
            {product.status}
          </span>
          <p className="thinking-note">{product.note}</p>
        </div>
        <ProductPreview product={product} />
      </header>
      <div className="thinking-body">
        <aside>
          <p className="product-eyebrow">THE THINKING</p>
          <ol>
            {thinkingFields.map((f, i) => (
              <li key={f}>
                <a href={`#thinking-${i}`}>
                  {String(i + 1).padStart(2, "0")} / {f}
                </a>
              </li>
            ))}
          </ol>
        </aside>
        <article>
          {[
            product.oneLiner,
            product.audience,
            product.problem,
            product.insight,
            <ol className="thinking-decisions" key="decisions">
              {product.decisions.map((d, i) => (
                <li key={i}>
                  <span className="product-eyebrow">DECISION 0{i + 1}</span>
                  <h3>{d.decision}</h3>
                  <p>
                    <strong>Tradeoff / </strong>
                    {d.tradeoff}
                  </p>
                </li>
              ))}
            </ol>,
            product.cuts,
            product.measurement,
            <dl key="results" className="thinking-results">
              {product.results.map((r) => (
                <div key={r.label}>
                  <dd>{r.value}</dd>
                  <dt>{r.label}</dt>
                </div>
              ))}
            </dl>,
            product.next,
            <div key="status">
              <span className={`product-status status-${product.status.toLowerCase()}`}>
                {product.status}
              </span>
              {!product.statusConfirmed && (
                <p className="thinking-note">Provisional — current status not yet confirmed.</p>
              )}
            </div>,
            product.links.length ? (
              <ul key="links">
                {product.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <ArrowUpRight size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p key="links">
                {product.sample
                  ? "No public link — sample concept."
                  : "Verified product links have not been supplied yet."}
              </p>
            ),
          ].map((content, i) => (
            <section key={thinkingFields[i]} id={`thinking-${i}`} className="thinking-section">
              <span className="product-eyebrow">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2>
                  {thinkingFields[i]}
                  {i === 7 ? " (numbers)" : ""}
                </h2>
                {typeof content === "string" ? <p>{content}</p> : content}
              </div>
            </section>
          ))}
        </article>
      </div>
      <footer className="thinking-footer">
        <Link to="/" hash="products">
          <ArrowLeft size={18} /> Back to Night Camp
        </Link>
        <span className="product-eyebrow">PRODUCTS / SYSTEMS / EXPERIMENTS</span>
      </footer>
    </main>
  );
}
