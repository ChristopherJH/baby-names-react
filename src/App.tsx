import { useState } from "react";
import BabyList from "./components/BabyList";
import babies from "./babyNamesData.json";
import Search from "./components/Search";
import { Favourites } from "./components/Favourites";
import BabyProps from "./components/BabyProps";
import { Footer } from "./components/Footer";

function App(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const [sexSearch, setSexSearch] = useState("");
  const [favourites, setFavourites] = useState<BabyProps[]>([]);

  return (
    <>
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSexSearch={setSexSearch}
        sexSearch={sexSearch}
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
      <Footer />
    </>
  );
}

export default App;
