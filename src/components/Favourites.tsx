import { BabyCard } from "./BabyCard";
import oddOccurences from "./oddOccurences";

interface BabyProps {
  id: number;
  name: string;
  sex: string;
}

export interface FavProps {
  favourites: string[];
  setFavourites: React.Dispatch<React.SetStateAction<string[]>>;
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
              id={baby.id}
              sex={baby.sex}
              name={baby.name}
              setFavourites={favProps.setFavourites}
            />
          );
        })}
      </>
    );
  }
  return (
    <div className="favourites-bar">
      <h2>Favourites:</h2>
      {displayFavourites(favProps.babyList)}
    </div>
  );
}
