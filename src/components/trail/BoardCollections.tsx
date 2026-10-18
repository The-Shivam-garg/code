import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { hoomanBoard } from "@/data/hooman-board";
import { hoomanItems } from "@/data/hooman";

export function BoardCollections() {
  const [active, setActive] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const [viewer, setViewer] = useState<{ collection: number; photo: number } | null>(null);
  const collection = active === null ? null : hoomanBoard.collections[active];
  const viewedCollection = viewer ? hoomanBoard.collections[viewer.collection] : null;
  const photo = viewer && viewedCollection ? viewedCollection.photos[viewer.photo] : null;
  const step = (delta: number) =>
    setViewer((current) => {
      if (!current) return current;
      const selected = hoomanBoard.collections[current.collection];
      if (!selected || !selected.photos.length) return current;
      const length = selected.photos.length;
      return { ...current, photo: (current.photo + delta + length) % length };
    });

  return (
    <div
      className="hooman-collection-region"
      onMouseLeave={() => setActive(pinned)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setActive(pinned);
      }}
    >
      <div className="hooman-board-collections">
        {hoomanBoard.collections.map((item, index) => (
          <figure key={item.label}>
            <Button
              variant="ghost"
              className="hooman-collection-trigger"
              aria-label={`${item.label} photo collection`}
              aria-expanded={active === index}
              aria-controls="hooman-collection-gallery"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => {
                const next = pinned === index ? null : index;
                setPinned(next);
                setActive(next);
              }}
            >
              <span className="hooman-collection-stack">
                <span className="hooman-stack-back hooman-print-layer" aria-hidden />
                <span className="hooman-stack-middle hooman-print-layer" aria-hidden />
                <span className="hooman-stack-cover hooman-print-layer">
                  <img
                    src={hoomanItems.find((photo) => photo.id === item.coverId)?.src}
                    alt={hoomanItems.find((photo) => photo.id === item.coverId)?.alt ?? item.label}
                    loading="lazy"
                    decoding="async"
                    width="240"
                    height="240"
                  />
                  <span className="hooman-print-caption">{item.label}</span>
                  <span className="hooman-board-count">{item.photos.length}</span>
                </span>
              </span>
              <span className="hooman-collection-label">{item.label}</span>
            </Button>
          </figure>
        ))}
      </div>
      <div
        id="hooman-collection-gallery"
        className="hooman-collection-expansion"
        data-open={Boolean(collection)}
      >
        <div>
          {collection && (
            <div className="hooman-collection-gallery">
              <h3>
                {collection.label}
                <span>{collection.photos.length} photographs</span>
              </h3>
              <div className="hooman-collection-grid">
                {collection.photos.map((item, index) => (
                  <Button
                    variant="ghost"
                    key={item.src}
                    className="hooman-gallery-photo"
                    aria-label={`View ${item.alt}`}
                    onClick={() => {
                      if (active !== null) setViewer({ collection: active, photo: index });
                    }}
                  >
                    <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Dialog
        open={Boolean(viewer)}
        onOpenChange={(open) => {
          if (!open) setViewer(null);
        }}
      >
        <DialogContent
          className="hooman-photo-dialog"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              step(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              step(1);
            }
          }}
        >
          <DialogTitle>{viewedCollection?.label}</DialogTitle>
          <DialogDescription>{photo?.alt}</DialogDescription>
          {photo && <img className="hooman-lightbox-image" src={photo.src} alt={photo.alt} />}
          <div className="hooman-lightbox-controls">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous photograph"
              onClick={() => step(-1)}
            >
              <ArrowLeft />
            </Button>
            <span aria-live="polite">
              {viewer ? viewer.photo + 1 : 0} / {viewedCollection?.photos.length}
            </span>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next photograph"
              onClick={() => step(1)}
            >
              <ArrowRight />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
