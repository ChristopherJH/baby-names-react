import { BabyCard } from "./BabyCard";
import oddOccurences from "../utils/oddOccurences";

interface BabyProps {
  id: number;
  name: string;
  sex: string;
}

export interface FavProps {
  favourites: BabyProps[];
  setFavourites: (callback: (previous: BabyProps[]) => BabyProps[]) => void;
  babyList: BabyProps[];
}

export function Favourites(favProps: FavProps): JSX.Element {
  function filterFavourites(babies: BabyProps[]): BabyProps[] {
    const filteredBabies = babies.filter((baby) =>
      oddOccurences(favProps.favourites, baby.name)
    );
    const setBabies = new Set(filteredBabies);
    return Array.from(setBabies);
  }

  function displayFavourites(babies: BabyProps[]): JSX.Element {
    return (
      <>
        {filterFavourites(babies).map((baby) => {
          return (
            <BabyCard
              key={baby.id}
              baby={baby}
              setFavourites={favProps.setFavourites}
            />
          );
        })}
      </>
    );
  }
  return (
    <div className="favourites-bar">
      <h3>Favourites:</h3>
      {favProps.favourites.length === 0 && (
        <span>(Click names to add/remove them to/from your favourites)</span>
      )}
      {displayFavourites(favProps.favourites)}
    </div>
  );
}
