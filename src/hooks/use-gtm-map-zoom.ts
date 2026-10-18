import { useEffect, useRef, useState } from "react";
import { select } from "d3-selection";
import { zoom, zoomIdentity, type ZoomBehavior, type ZoomTransform } from "d3-zoom";
import { fitMapPoints, MAP_VIEW } from "@/lib/gtm-map-view";

export function useGtmMapZoom() {
  const svgRef = useRef<SVGSVGElement>(null);
  const behaviorRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const [transform, setTransform] = useState<ZoomTransform>(zoomIdentity);
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const behavior = zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 24])
      .extent([
        [MAP_VIEW.x, MAP_VIEW.y],
        [MAP_VIEW.x + MAP_VIEW.width, MAP_VIEW.y + MAP_VIEW.height],
      ])
      .translateExtent([
        [MAP_VIEW.x, MAP_VIEW.y],
        [MAP_VIEW.x + MAP_VIEW.width, MAP_VIEW.y + MAP_VIEW.height],
      ])
      .clickDistance(5)
      .on("zoom", (event) => setTransform(event.transform));
    behaviorRef.current = behavior;
    select(svg).call(behavior);
    return () => {
      select(svg).on(".zoom", null);
      behaviorRef.current = null;
    };
  }, []);
  const reset = () => {
    if (svgRef.current && behaviorRef.current)
      select(svgRef.current).call(behaviorRef.current.transform, zoomIdentity);
  };
  const scale = (factor: number) => {
    if (svgRef.current && behaviorRef.current)
      select(svgRef.current).call(behaviorRef.current.scaleBy, factor);
  };
  const focus = (points: { x: number; y: number }[]) => {
    if (!svgRef.current || !behaviorRef.current) return;
    const t = fitMapPoints(points);
    select(svgRef.current).call(
      behaviorRef.current.transform,
      zoomIdentity.translate(t.x, t.y).scale(t.k),
    );
  };
  return { svgRef, transform, reset, scale, focus };
}
