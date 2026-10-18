export type ControlBounds = { left: number; right: number; top: number; bottom: number };

export function findNavigationLift(
  width: number,
  height: number,
  controls: ControlBounds[],
  inset = 16,
) {
  const dock = {
    left: width - inset - 76,
    right: width - inset,
    bottom: height - inset,
    top: height - inset - 112,
  };
  for (let lift = 0; lift <= height - inset - 128; lift += 24) {
    const overlaps = controls.some(
      (control) =>
        control.right > dock.left - 8 &&
        control.left < dock.right + 8 &&
        control.bottom > dock.top - lift - 8 &&
        control.top < dock.bottom - lift + 8,
    );
    if (!overlaps) return lift;
  }
  return null;
}
