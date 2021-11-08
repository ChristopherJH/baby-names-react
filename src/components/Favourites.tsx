import BabyProps from "./BabyProps";

interface FavProps {
  favourites: string[];
  setFavourites: (input: string[]) => void;
  babyList: BabyProps[];
}

export function Favourites(favProps: FavProps): JSX.Element {
  return (
    <div className="favourites-bar">
      <h2>Favourites:</h2>
      {/* {favourites.map(ObjectToBaby)} */}
    </div>
  );
}

// export function toggleFavourite(babyName: string, favProps: FavProps) {
//   // if baby is in favourites remove and add to baby list
//   // else add to favourites and remove from baby list
// //   const filteredBabies = babyList.filter((baby) =>
// // baby.name.toLowerCase().includes(searchProps.searchInput.toLowerCase())
// // );
//   console.log(babyName)
//   if (favProps.favourites.includes(babyName)) {
//     console.log('Removed from favourites!');
//   } else {
//     console.log('Added to favourites!');
//     favProps.setFavourites([...favProps.favourites, baby.name]);
//   }
// }
