import { voices } from "@/data/voices";

export const VOICE_DWELL_MS = 7_000;
export const VOICE_PROMPT_SESSION_KEY = "trail-voice-prompt-seen";
const sectionVoices: Record<string, string> = {
  gate: "aisha",
  village: "priya",
  "communities-shelf": "priya",
  "night-camp": "rohan",
  resources: "daniel",
  products: "aisha",
  hooman: "kenji",
  "hooman-aspirations": "kenji",
};

export function voiceForSection(section: string) {
  const id = sectionVoices[section];
  return id
    ? voices.find((voice) => voice.id === id && voice.name && voice.image && voice.quote)
    : undefined;
}
