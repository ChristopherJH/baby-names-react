import { BabyCard } from "./BabyCard";
import BabyProps from "./BabyProps";
import oddOccurences from "./oddOccurences";

export interface SearchProps {
  searchInput: string;
  babyList: BabyProps[];
  sexSearch: string;
  setFavourites: (callback: (previous: BabyProps[]) => BabyProps[]) => void;
  favourites: BabyProps[];
}

export default function BabyList(searchProps: SearchProps): JSX.Element {
  return (
    <div className="baby-list">
      <hr />
      <section id="baby-names">{organiseBabies(searchProps)}</section>
      <hr />
    </div>
  );
}

function organiseBabies(searchProps: SearchProps) {
  const sortedBabies = searchProps.babyList.sort(alphabetizeBabies);
  let sortedAndFilteredBabies = sortedBabies.filter(
    (baby) =>
      baby.name.toLowerCase().includes(searchProps.searchInput.toLowerCase()) &&
      !oddOccurences(searchProps.favourites, baby.name)
  );
  if (searchProps.sexSearch !== "") {
    sortedAndFilteredBabies = sortedAndFilteredBabies.filter(
      (baby) => baby.sex === searchProps.sexSearch
    );
  }
  const objectBabies = sortedAndFilteredBabies.map((baby) => {
    return (
      <BabyCard
        key={baby.id}
        baby={baby}
        setFavourites={searchProps.setFavourites}
      />
    );
  });
  return objectBabies;
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
