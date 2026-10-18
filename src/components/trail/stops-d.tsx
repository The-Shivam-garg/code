import { ProductsGallery } from "./ProductsGallery";
import { ResourceLibrary } from "./ResourceLibrary";
import { Stop } from "./journey";

export function NightCamp() {
  return (
    <Stop index={2}>
      <ResourceLibrary />
      <ProductsGallery />
    </Stop>
  );
}
