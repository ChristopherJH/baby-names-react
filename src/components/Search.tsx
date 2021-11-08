interface SearchProps {
  searchInput: string;
  setSearchInput: (input: string) => void;
  sexSearch: string;
  setSexSearch: (input: string) => void;
}

export default function Search(props: SearchProps): JSX.Element {
  return (
    <div className="search">
      <SearchBar
        searchInput={props.searchInput}
        setSearchInput={props.setSearchInput}
        sexSearch={props.sexSearch}
        setSexSearch={props.setSexSearch}
      />
      <div className="sex-buttons">
        <SexButton setSexSearch={props.setSexSearch} sexToSet="" />
        <SexButton setSexSearch={props.setSexSearch} sexToSet="m" />
        <SexButton setSexSearch={props.setSexSearch} sexToSet="f" />
      </div>
    </div>
  );
}

function SearchBar(props: SearchProps): JSX.Element {
  return (
    <div className="searchbar">
      <input
        placeholder="Search"
        value={props.searchInput}
        onChange={(e) => props.setSearchInput(e.target.value)}
      />
    </div>
  );
}

interface SexButtonProps {
  setSexSearch: (input: string) => void;
  sexToSet: string;
}

function SexButton(props: SexButtonProps): JSX.Element {
  function setSex() {
    props.setSexSearch(props.sexToSet);
  }
  return (
    <button id={props.sexToSet + "-button"} onClick={setSex}>
      {props.sexToSet}
    </button>
  );
}
