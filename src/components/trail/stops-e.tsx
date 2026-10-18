import { Stop } from "./journey";
import { ReferenceFooter } from "./ReferenceFooter";
import { VoicesCollage } from "./VoicesCollage";

export function Postcards() {
  return (
    <Stop index={3} className="voices-stop">
      <VoicesCollage />
    </Stop>
  );
}

export function BaseCampEnd() {
  return (
    <Stop index={4} className="reference-footer-stop">
      <ReferenceFooter />
    </Stop>
  );
}
