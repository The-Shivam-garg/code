import { Award, Blocks, Check, Network, Users } from "lucide-react";
import academyCover from "@/assets/academy-cover.jpg";
import type { ThinkingProduct } from "@/data/products";

export function ProductPreview({ product }: { product: ThinkingProduct }) {
  return (
    <div
      className={`product-preview preview-${product.slug}`}
      aria-label={`${product.name} illustrative cover`}
    >
      <div className="preview-topline">
        <span>{product.name}</span>
        <span>CONCEPT COVER</span>
      </div>
      {product.slug === "ai-academy" ? (
        <>
          <img
            src={academyCover}
            alt="Glass network sculpture with a coral sphere, an illustrative AI Academy cover"
            width={1024}
            height={768}
            loading="lazy"
          />
          <div className="preview-title">
            Learn.
            <br />
            Build.
            <br />
            Repeat.
          </div>
        </>
      ) : product.slug === "certifier" ? (
        <>
          <Award className="preview-symbol" strokeWidth={1} />
          <div className="preview-title">
            Make it
            <br />
            official.
          </div>
          <div className="preview-certificate">
            <Check size={18} />
            <span>Certificate of achievement</span>
            <span className="preview-rule" />
          </div>
        </>
      ) : product.slug === "helasyn" ? (
        <>
          <Network className="preview-symbol" strokeWidth={1} />
          <div className="preview-title">
            HeLa
            <br />
            Syn.
          </div>
          <span className="preview-bottom">CONNECTION → POSSIBILITY</span>
        </>
      ) : product.slug === "ambassador-os" ? (
        <>
          <Users className="preview-symbol" strokeWidth={1} />
          <div className="preview-title">
            Belonging.
            <br />
            At scale.
          </div>
          <div className="preview-metric">
            62% <small>WEEK-8 RETENTION · SAMPLE</small>
          </div>
        </>
      ) : product.slug === "kol-campaign-tracker" ? (
        <>
          <div className="preview-title">
            Less noise.
            <br />
            More signal.
          </div>
          <div className="preview-chart">
            {[85, 66, 76, 45, 35, 20].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <span className="preview-bottom">$4.10 → $0.80 CPA · SAMPLE</span>
        </>
      ) : (
        <>
          <Blocks className="preview-symbol" strokeWidth={1} />
          <div className="preview-title">
            You’re in.
            <br />
            What’s next?
          </div>
          <div className="preview-checklist">
            <span>01 / A warm welcome</span>
            <span>02 / Find your people</span>
            <span>03 / Make a contribution</span>
          </div>
        </>
      )}
    </div>
  );
}
