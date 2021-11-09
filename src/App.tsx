import { useState } from "react";
import BabyList from "./components/BabyList";
import babies from "./babyNamesData.json";
import Search from "./components/Search";
import { Favourites } from "./components/Favourites";

function App(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const [sexSearch, setSexSearch] = useState("");
  const [favourites, setFavourites] = useState<string[]>([]);

  return (
    <>
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        sexSearch={sexSearch}
        setSexSearch={setSexSearch}
      />
      <Favourites
        favourites={favourites}
        setFavourites={setFavourites}
        babyList={babies}
      />
      <BabyList
        searchInput={searchInput}
        babyList={babies}
        sexSearch={sexSearch}
        setFavourites={setFavourites}
        favourites={favourites}
      />
    </>
  );
}

export default App;
