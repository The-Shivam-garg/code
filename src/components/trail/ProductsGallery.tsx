import { Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { thinkingProducts } from "@/data/products";
import { ProductPreview } from "./ProductPreview";

export function ProductsGallery() {
  return (
    <section id="products" className="product-gallery" aria-labelledby="products-heading">
      <header className="product-gallery-header">
        <div>
          <p className="product-eyebrow">Chapter 5 / Night Camp / Products</p>
          <h2 id="products-heading">
            Things I built because
            <br />
            nobody else was<span className="product-heading-dot">.</span>
          </h2>
        </div>
        <div className="product-gallery-aside">
          <p>Products, systems & experiments.</p>
          <p className="product-eyebrow">03 REAL / 03 SAMPLE</p>
          <ArrowDownRight size={30} strokeWidth={1} />
        </div>
      </header>
      <div className="product-gallery-track">
        {thinkingProducts.map((p, i) => (
          <Link
            key={p.slug}
            to="/products/$slug"
            params={{ slug: p.slug }}
            className="product-gallery-item"
            aria-label={`Read ${p.name} Thinking${p.sample ? " — sample product" : ""}`}
          >
            <ProductPreview product={p} />
            <div className="product-card-caption">
              <span className="product-eyebrow">
                0{i + 1} / {p.category}
              </span>
              <ArrowUpRight size={20} />
              <h3>{p.name}</h3>
              <span className={`product-status status-${p.status.toLowerCase()}`}>{p.status}</span>
              <p>{p.sample ? "SAMPLE CONCEPT" : "REAL PRODUCT · NOTES PENDING"}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
