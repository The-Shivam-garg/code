import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/about-page";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shivam — Living in Check" },
      {
        name: "description",
        content:
          "A builder, learner and community guy. Journey with Shivam through technology, travel, ideas and A Polymath in Progress.",
      },
      { property: "og:title", content: "About Shivam — Living in Check" },
      {
        property: "og:description",
        content: "Explore Shivam’s story, thoughts and a window into his way of thinking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
