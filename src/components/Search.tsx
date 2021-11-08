
interface SearchProps {
  searchInput: string;
  setSearchInput: (input: string) => void;
}

export default function Search(props: SearchProps): JSX.Element {
  return (
    <SearchBar
      searchInput={props.searchInput}
      setSearchInput={props.setSearchInput} />
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
