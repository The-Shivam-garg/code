export type MuseumPlacement = readonly [left: number, top: number, width: number, aspect: number];
export const museumLayouts: {
  start: number;
  end: number;
  placements: MuseumPlacement[];
  narrow: MuseumPlacement[];
}[] = [
  {
    start: 0,
    end: 3,
    placements: [
      [2, 6, 19, 1.6],
      [3, 66, 12, 1.25],
      [78, 29, 18, 0.95],
    ],
    narrow: [
      [4, 62, 34, 1.6],
      [6, 38, 28, 1.5],
      [64, 26, 30, 1.2],
    ],
  },
  {
    start: 3,
    end: 8,
    placements: [
      [4, 10, 20, 1.7],
      [43, 2, 14, 0.95],
      [77, 28, 19, 1.65],
      [9, 65, 17, 1.5],
      [46, 66, 21, 1.9],
    ],
    narrow: [
      [5, 3, 36, 1.7],
      [67, 15, 27, 1.1],
      [6, 40, 33, 1.65],
      [61, 53, 32, 1.5],
      [10, 79, 35, 1.9],
    ],
  },
  {
    start: 8,
    end: 12,
    placements: [
      [4, 12, 20, 1.6],
      [45, 2, 15, 0.95],
      [14, 67, 23, 1.8],
      [77, 47, 19, 1.5],
    ],
    narrow: [
      [5, 3, 36, 1.6],
      [67, 17, 27, 1.1],
      [8, 54, 36, 1.8],
      [63, 72, 30, 1.5],
    ],
  },
];
