import { useState } from "react";
import BabyList from "./components/BabyList";
import babies from "./babyNamesData.json";
import Search from "./components/Search";
import { Favourites } from "./components/Favourites";
import BabyProps from "./components/BabyProps";

function App(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const [sexSearch, setSexSearch] = useState("");
  const [favourites, setFavourites] = useState<string[]>([]);
  const [babyList, setBabyList] = useState<BabyProps[]>(babies);

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
        babyList={babyList}
      />
      <BabyList
        searchInput={searchInput}
        babyList={babyList}
        setBabyList={setBabyList}
        sexSearch={sexSearch}
      />
    </>
  );
}

export default App;
