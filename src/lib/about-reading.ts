export const readingTopics = [
  {
    id: "philosophy",
    name: "Philosophy",
    title: "A polymath in progress.",
    question: "What does it mean to become your best self?",
    heading: "A life examined.",
    text: "A builder at heart, a learner by nature, and a community guy by choice. Different communities. Same purpose.",
    reflection:
      "Building is more than making things. It is asking what matters, choosing where to put our attention, and finding people who want to make something meaningful together.",
    copy: "A window into my way of thinking.",
    description:
      "Thoughts on purpose, belonging and becoming. These reflections explore the questions behind the work: what we value, why we build, and how we choose to live.",
    quote: "Different communities. Same purpose.",
  },
  {
    id: "research",
    name: "Research",
    title: "Look a little closer.",
    question: "What changes when we look a little closer?",
    heading: "Questions before answers.",
    text: "Chess, life, and finance share one truth: everything changes when you understand the rules.",
    reflection:
      "Understanding starts with curiosity. Looking beyond the obvious, connecting ideas across disciplines, and testing assumptions can change the way we approach a problem.",
    copy: "A notebook for asking better questions.",
    description:
      "Observations across technology, people and ideas. This chapter follows curiosity through patterns, possibilities and the search for a clearer understanding.",
    quote: "Everything changes when you understand the rules.",
  },
  {
    id: "life",
    name: "Life",
    title: "Across borders.",
    question: "Where will curiosity take you next?",
    heading: "The people along the way.",
    text: "Exploring technology, people and ideas across borders, trying to create opportunities that help more people build, belong and become their best selves.",
    reflection:
      "Travel and community bring new perspectives. The conversations, small discoveries and shared experiences along the way become part of how we see the world.",
    copy: "Notes from a journey still unfolding.",
    description:
      "Reflections on travel, community and everyday life. A collection of lessons from meeting people, crossing borders and making room for new experiences.",
    quote: "Build, belong and become your best self.",
  },
  {
    id: "fantasy",
    name: "Fantasy",
    title: "For curious minds.",
    question: "What would you build if anything were possible?",
    heading: "Room for the impossible.",
    text: "For builders, dreamers and curious minds — this is an open invitation to think, explore and build a richer life.",
    reflection:
      "Imagination gives an idea somewhere to begin. Before a possibility becomes a product or a community, someone has to picture a world that does not yet exist.",
    copy: "An invitation to imagine what comes next.",
    description:
      "Ideas beyond the everyday: possibilities, imagined worlds and questions without easy answers. Space for the dreamer alongside the builder.",
    quote: "Think, explore and build a richer life.",
  },
] as const;

export function readingTopicAt(index: number) {
  return (
    readingTopics[((index % readingTopics.length) + readingTopics.length) % readingTopics.length] ??
    readingTopics[0]
  );
}
