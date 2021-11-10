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
    return babies.filter((baby) =>
      oddOccurences(favProps.favourites, baby.name)
    );
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
  console.log(favProps.favourites);
  return (
    <div className="favourites-bar">
      <h2>Favourites:</h2>
      <p>Click names to add/remove them to/from your favourites.</p>
      {displayFavourites(favProps.favourites)}
    </div>
  );
}
