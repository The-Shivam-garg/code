import { useState } from "react";
import { ArrowRight, Backpack, Check, Download, Menu, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  defaultLibrary,
  featuredLibrary,
  libraryFilters,
  libraryResources,
  type LibraryResource,
} from "@/data/resource-library";
import background from "@/assets/resources-background.jpg";
import note from "@/assets/resource-note.jpg.asset.json";
import huntBottom from "@/assets/resource-hunt-bottom.jpg.asset.json";
import ambassadorBottom from "@/assets/resource-ambassador-bottom.jpg.asset.json";
import githubBottom from "@/assets/resource-github-bottom.jpg.asset.json";

export function ResourceLibrary() {
  const [filter, setFilter] = useState("All");
  const [more, setMore] = useState(false);
  const [pack, setPack] = useState<string[]>([]);
  const [packOpen, setPackOpen] = useState(false);
  const [reading, setReading] = useState<LibraryResource | null>(null);
  const rows =
    filter === "All"
      ? more
        ? libraryResources
        : defaultLibrary
      : libraryResources.filter((item) => item.category === filter);
  const packed = libraryResources.filter((item) => pack.includes(item.id));
  const toggle = (id: string) =>
    setPack((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  const exportPack = () => {
    const text =
      "# My resource pack\n\nResource overviews — original documents have not been supplied.\n\n" +
      packed.map((item) => `## ${item.title}\n${item.description}\n${item.format}\n`).join("\n");
    const url = URL.createObjectURL(new Blob([text], { type: "text/markdown" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "resource-pack-overviews.md";
    link.click();
    URL.revokeObjectURL(url);
  };
  return (
    <section
      id="resources"
      className="resource-reference"
      aria-label="Playbooks, templates and things I’ve learned"
    >
      <div className="resource-art-stage">
        <img className="resource-stage-background" src={background} alt="" loading="lazy" />
        <div className="resource-featured">
          {featuredLibrary.map((item, index) => (
            <article className="resource-playbook" key={item.id}>
              <Button
                variant="ghost"
                size="icon"
                className="resource-card-menu"
                aria-label={`About ${item.title}`}
                onClick={() => setReading(item)}
              >
                <Menu />
              </Button>
              <img className="resource-card-art" src={item.image} alt="" loading="lazy" />
              <h3>
                {index === 1
                  ? "Building an Iconic Ambassador Program in APAC and EMEA Region."
                  : item.title}
              </h3>
              <p>
                {index === 1
                  ? "Complete framework, strategies and systems to build, grow and scale a high-impact ambassador program globally."
                  : item.description}
              </p>
              <Button className="resource-read" onClick={() => setReading(item)}>
                Read Playbook <ArrowRight />
              </Button>
              <img
                className="resource-card-bottom"
                src={[huntBottom.url, ambassadorBottom.url, githubBottom.url][index]}
                alt=""
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
      <div className="resource-paper-panel">
        <header className="resource-library-heading">
          <div>
            <p className="resource-eyebrow">RESOURCES</p>
            <h2>
              Playbooks, templates
              <br />
              <span>
                and things <em>I’ve learned.</em>
              </span>
            </h2>
          </div>
          <p className="resource-header-description">
            Practical resources from real work — community building, growth, partnerships, product
            and everything in between.
          </p>
          <aside>
            <img src={note.url} alt="Classical painted portrait detail" loading="lazy" />
            <span>
              Ideas
              <br />
              that help
              <br />
              builders.
            </span>
          </aside>
        </header>
        <div className="resource-toolbar">
          <div role="group" aria-label="Filter resources" className="resource-filters">
            {libraryFilters.map((item) => (
              <Button
                key={item}
                variant="ghost"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </Button>
            ))}
          </div>
          {pack.length > 0 && (
            <Button
              variant="ghost"
              className="resource-pack-open"
              aria-label={`Open resource pack, ${pack.length} items`}
              onClick={() => setPackOpen(true)}
            >
              <Backpack />
              {pack.length}
            </Button>
          )}
        </div>
        <ul className="resource-library-rows">
          {rows.map((item) => (
            <li key={item.id}>
              <Button
                variant="ghost"
                className="resource-row-main"
                onClick={() => setReading(item)}
              >
                <img src={item.image} alt="" loading="lazy" />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.description}</small>
                </span>
              </Button>
              <span className="resource-format">{item.format}</span>
              <Button
                variant="ghost"
                size="icon"
                aria-label={`Download ${item.title}`}
                title="Original document not yet supplied"
                onClick={() => setReading(item)}
              >
                <Download />
              </Button>
              <Button
                variant="outline"
                className="resource-pack-toggle"
                aria-pressed={pack.includes(item.id)}
                onClick={() => toggle(item.id)}
              >
                {pack.includes(item.id) ? <Check /> : <Plus />}
                {pack.includes(item.id) ? "Packed" : "Pack"}
              </Button>
            </li>
          ))}
        </ul>
        {filter === "All" && (
          <Button
            variant="ghost"
            className="resource-show-more"
            onClick={() => setMore((value) => !value)}
          >
            {more ? "Show less" : "More resources"} <ArrowRight />
          </Button>
        )}
      </div>
      <Dialog
        open={Boolean(reading)}
        onOpenChange={(open) => {
          if (!open) setReading(null);
        }}
      >
        <DialogContent className="resource-dialog">
          <DialogTitle>{reading?.title}</DialogTitle>
          <DialogDescription>{reading?.format} · Resource preview</DialogDescription>
          {reading && (
            <>
              <img src={reading.image} alt="" />
              <p>{reading.description}</p>
              <p className="resource-availability">
                The original playbook or document hasn’t been supplied yet. This is an overview, not
                the full resource.
              </p>
              <Button variant="outline" onClick={() => toggle(reading.id)}>
                {pack.includes(reading.id) ? <Check /> : <Plus />}
                {pack.includes(reading.id) ? "Remove from pack" : "Add to pack"}
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={packOpen} onOpenChange={setPackOpen}>
        <DialogContent className="resource-dialog">
          <DialogTitle>Your resource pack</DialogTitle>
          <DialogDescription>{packed.length} selected resource overviews</DialogDescription>
          {packed.length ? (
            <ul className="resource-packed-list">
              {packed.map((item) => (
                <li key={item.id}>
                  <span>{item.title}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={`Remove ${item.title}`}
                    onClick={() => toggle(item.id)}
                  >
                    <Trash2 />
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No resources packed yet.</p>
          )}
          <Button disabled={!packed.length} onClick={exportPack}>
            <Download />
            Export overviews
          </Button>
          <Button variant="outline" disabled={!packed.length} onClick={() => setPack([])}>
            Clear pack
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
