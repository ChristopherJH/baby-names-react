import { ObjectToBaby } from "./BabyCard";
import BabyProps from "./BabyProps";

interface SearchProps {
  searchInput: string;
  babyList: BabyProps[];
  setBabyList: (babies: BabyProps[]) => void;
  sexSearch: string;
}

export default function BabyList(searchProps: SearchProps): JSX.Element {
  function organiseBabies() {
    const sortedBabies = searchProps.babyList.sort(alphabetizeBabies);
    let sortedAndFilteredBabies = sortedBabies.filter((baby) =>
      baby.name.toLowerCase().includes(searchProps.searchInput.toLowerCase())
    );
    if (searchProps.sexSearch !== "") {
      sortedAndFilteredBabies = sortedAndFilteredBabies.filter(
        (baby) => baby.sex === searchProps.sexSearch
      );
    }
    const objectBabies = sortedAndFilteredBabies.map(ObjectToBaby);
    return objectBabies;
  }

  return (
    <div className="baby-list">
      <hr />
      <section id="baby-names">{organiseBabies()}</section>
    </div>
  );
}

function alphabetizeBabies(a: BabyProps, b: BabyProps) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
