import { hoomanItems } from "@/data/hooman";

const collectionPhotos = (ids: string[]) =>
  ids.flatMap((id) => {
    const photo = hoomanItems.find((item) => item.id === id);
    return photo ? [{ src: photo.src, alt: photo.alt }] : [];
  });

export const hoomanBoard = {
  label: "Things that make me hooman — aspirations",
  eyebrow: "THINGS THAT MAKES ME",
  titleStart: "hoo",
  titleAccent: "man",
  titleEnd: ".",
  introduction: [
    "The places I want to see. The people I want to help.",
    "The things I still want to learn.",
  ],
  values: [
    "People. Places. Purpose. Curiosity. Kindness. Failure.",
    "Adventure. Learning. Giving back. And a few unreasonable dreams.",
  ],
  aspirations: [
    ["TRAVEL", "Explore more of the world"],
    ["LEARN", "Keep being a student"],
    ["CREATE", "Build products that matter"],
    ["COMMUNITY", "Bring people together"],
    ["TEACH", "Share what I know"],
    ["GIVE BACK", "Work on projects that reduce poverty"],
    ["ENVIRONMENT", "Plant trees and protect ecosystems"],
    ["WOMEN", "Support more women in tech"],
    ["OPPORTUNITY", "Help underrepresented groups"],
    ["ISLAND", "Own a small island someday"],
    ["CULTURE", "Experience different cultures deeply"],
    ["HEALTH", "Stay curious and healthy"],
    ["FRIENDS", "Keep amazing people around"],
    ["FREEDOM", "Design a location-independent life"],
    ["IMPACT", "Leave things better than I found them"],
    ["STORIES", "Document the journey"],
    ["KINDNESS", "Choose kindness, always"],
    ["BALANCE", "Build a life I enjoy waking up to"],
    ["BELONG", "Be part of a kinder internet"],
    ["HOOMAN", "Stay real, stay grounded"],
  ],
  collections: [
    {
      label: "Places",
      coverId: "img-03",
      photos: collectionPhotos(["img-03", "img-06", "img-07", "img-08", "img-18", "img-19"]),
    },
    {
      label: "People",
      coverId: "img-16",
      photos: collectionPhotos(["img-04", "img-05", "img-13", "img-16"]),
    },
    {
      label: "Purpose",
      coverId: "img-09",
      photos: collectionPhotos([
        "img-01",
        "img-02",
        "img-09",
        "img-10",
        "img-11",
        "img-12",
        "img-14",
        "img-17",
      ]),
    },
  ],
  conversations: [
    {
      title: "Tell me your story",
      description: "Have you done something from this list? I’d genuinely love to hear about it.",
      icon: "book",
      href: "https://www.linkedin.com/in/meshivamgarg",
    },
    {
      title: "You’ve got one too",
      description: "Found something here that you’ve been dreaming about? Share the excitement.",
      icon: "spark",
      href: "https://x.com/Shivams_twt",
    },
    {
      title: "Come say hi",
      description: "No agenda. No pitch. Let’s do it together.",
      icon: "people",
      href: "https://www.linkedin.com/in/meshivamgarg",
    },
  ],
} as const;
