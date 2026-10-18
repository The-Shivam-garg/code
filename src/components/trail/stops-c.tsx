import { CommunityShelf } from "./CommunityShelf";
import { Stop } from "./journey";

export function Village() {
  return (
    <Stop index={1}>
      <CommunityShelf />
    </Stop>
  );
}
