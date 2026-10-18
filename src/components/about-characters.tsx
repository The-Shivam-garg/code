import { useLanguage } from "@/components/language-provider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import reader from "@/assets/about/character-reader.png.asset.json";
import traveler from "@/assets/about/character-traveler.png.asset.json";
import dreamer from "@/assets/about/character-dreamer.png.asset.json";
import explorer from "@/assets/about/character-explorer.png.asset.json";
import builder from "@/assets/about/character-builder.png.asset.json";
import investor from "@/assets/about/character-investor.png.asset.json";
import wanderer from "@/assets/about/character-wanderer.png.asset.json";
import thinker from "@/assets/about/character-thinker.png.asset.json";

const characters = [
  {
    name: "The reader",
    asset: reader,
    text: "A learner by nature. There is always another idea to explore.",
  },
  {
    name: "The traveler",
    asset: traveler,
    text: "Across borders, meeting people and discovering new perspectives.",
  },
  {
    name: "The dreamer",
    asset: dreamer,
    text: "For curious minds — an open invitation to imagine what is possible.",
  },
  {
    name: "The explorer",
    asset: explorer,
    text: "Exploring technology, people and ideas, one question at a time.",
  },
  {
    name: "The builder",
    asset: builder,
    text: "A builder at heart, creating opportunities for more people to build and belong.",
  },
  {
    name: "The investor",
    asset: investor,
    text: "Chess, life and finance share one truth: understand the rules.",
  },
  {
    name: "The wanderer",
    asset: wanderer,
    text: "The journey is still unfolding. Curiosity keeps it moving.",
  },
  {
    name: "The thinker",
    asset: thinker,
    text: "Different communities. Same purpose. A polymath in progress.",
  },
];

export function AboutCharacters() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const current = selected === null ? undefined : characters[selected];
  return (
    <>
      <div className="about-characters" aria-label={t("People along the journey")}>
        {characters.map((character, index) => (
          <Button
            key={character.name}
            variant="ghost"
            className="about-character"
            aria-label={t(String(character.name))}
            title={t(String(character.name))}
            onClick={() => setSelected(index)}
          >
            <img src={character.asset.url} alt="" loading="lazy" />
          </Button>
        ))}
      </div>
      <Dialog
        open={current !== undefined}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="about-dialog">
          <DialogTitle>{t(String(current?.name))}</DialogTitle>
          <DialogDescription>{t(String(current?.text))}</DialogDescription>
          {current && <img src={current.asset.url} alt={t(String(current.name))} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
