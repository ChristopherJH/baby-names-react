import { useState } from "react";
import BabyList from "./components/BabyList";
import babies from "./babyNamesData.json"
import Search from "./components/Search";

function App(): JSX.Element {
  const [searchInput, setSearchInput] = useState("")

  return (
    <>
      <Search 
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <BabyList 
        searchInput={searchInput}
        babies={babies}
      />
    </>
  );
  }

export default App;
