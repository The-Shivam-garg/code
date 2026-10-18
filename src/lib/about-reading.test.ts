import { describe, expect, it } from "vitest";
import { readingTopicAt, readingTopics } from "./about-reading";

describe("reading topic selection", () => {
  it.each(["philosophy", "research", "life", "fantasy"])(
    "selects the same %s topic for cover, pages and writing",
    (id) => {
      const index = readingTopics.findIndex((topic) => topic.id === id);
      const selected = readingTopicAt(index);
      expect(selected.id).toBe(id);
      expect(selected).toBe(readingTopics[index]);
    },
  );
  it("wraps next from Fantasy to Philosophy", () => {
    expect(readingTopicAt(4).id).toBe("philosophy");
  });
  it("wraps previous from Philosophy to Fantasy", () => {
    expect(readingTopicAt(-1).id).toBe("fantasy");
  });
});
