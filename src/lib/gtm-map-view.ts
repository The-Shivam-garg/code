import { geoNaturalEarth1 } from "d3-geo";
import { gtmCountrySquares, gtmRegions, type CountrySquare } from "./gtm-showcase";

export const MAP_VIEW = { x: -45, y: -95, width: 990, height: 525 } as const;
export type MapLocation = {
  label: string;
  kind: "Region" | "Country" | "State" | "City";
  points: { x: number; y: number }[];
  point?: CountrySquare;
};
export function fitMapPoints(points: { x: number; y: number }[], maxZoom = 24) {
  if (!points.length) return { k: 1, x: 0, y: 0 };
  const xs = points.map((p) => p.x),
    ys = points.map((p) => p.y);
  const left = Math.min(...xs),
    top = Math.min(...ys),
    right = Math.max(...xs) + 4,
    bottom = Math.max(...ys) + 4;
  const k = Math.max(
    1,
    Math.min(
      maxZoom,
      (MAP_VIEW.width * 0.7) / Math.max(12, right - left),
      (MAP_VIEW.height * 0.65) / Math.max(12, bottom - top),
    ),
  );
  return {
    k,
    x: MAP_VIEW.x + MAP_VIEW.width / 2 - (k * (left + right)) / 2,
    y: MAP_VIEW.y + MAP_VIEW.height / 2 - (k * (top + bottom)) / 2,
  };
}
const projection = geoNaturalEarth1().scale(168).translate([450, 187]);
const cities = [
  ["Delhi", 77.21, 28.61],
  ["Mumbai", 72.88, 19.08],
  ["Bengaluru", 77.59, 12.97],
  ["Chennai", 80.27, 13.08],
  ["Hyderabad", 78.49, 17.39],
  ["Kolkata", 88.36, 22.57],
  ["Agra", 78.01, 27.18],
  ["Jaipur", 75.79, 26.91],
  ["Lucknow", 80.95, 26.85],
  ["Kochi", 76.27, 9.93],
  ["Singapore", 103.82, 1.35],
  ["Jakarta", 106.85, -6.21],
  ["Beijing", 116.41, 39.9],
  ["Shanghai", 121.47, 31.23],
  ["London", -0.13, 51.51],
  ["New York", -74.01, 40.71],
  ["San Francisco", -122.42, 37.77],
  ["Toronto", -79.38, 43.65],
  ["Moscow", 37.62, 55.75],
  ["Manila", 120.98, 14.6],
  ["Tokyo", 139.69, 35.68],
  ["Seoul", 126.98, 37.57],
  ["Zurich", 8.54, 47.38],
  ["Nairobi", 36.82, -1.29],
  ["Lagos", 3.38, 6.52],
  ["Cape Town", 18.42, -33.92],
  ["Sydney", 151.21, -33.87],
  ["Paris", 2.35, 48.86],
  ["Berlin", 13.4, 52.52],
  ["São Paulo", -46.63, -23.55],
] as const;
const groups = new Map<string, MapLocation>();
for (const point of gtmCountrySquares) {
  for (const [key, label, kind] of [
    [point.code, point.country, "Country"],
    ...(point.state ? [[`${point.code}-${point.state}`, point.state, "State"]] : []),
  ] as [string, string, "Country" | "State"][]) {
    const existing = groups.get(key);
    if (existing) existing.points.push(point);
    else groups.set(key, { label, kind, points: [point], point });
  }
}
export const mapLocations: MapLocation[] = [
  ...gtmRegions.map((region) => ({
    label: region.label,
    kind: "Region" as const,
    points: gtmCountrySquares.filter(
      (point) =>
        point.region === region.id &&
        (region.id !== "asia" || (point.lon > 45 && point.lon < 155 && point.lat < 60)) &&
        (region.id !== "north-america" || point.lon < -40),
    ),
  })),
  ...groups.values(),
  ...cities.flatMap(([label, lon, lat]) => {
    const xy = projection([lon, lat]);
    if (!xy) return [];
    const point = gtmCountrySquares.reduce((best, p) =>
      Math.hypot(p.x - xy[0], p.y - xy[1]) < Math.hypot(best.x - xy[0], best.y - xy[1]) ? p : best,
    );
    return [{ label, kind: "City" as const, points: [{ x: xy[0], y: xy[1] }], point }];
  }),
];
