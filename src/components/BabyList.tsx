import BabyProps from "./BabyProps"

interface SearchProps {
  searchInput: string;
  babies: BabyProps[];
}

export default function BabyList(searchProps: SearchProps): JSX.Element {
  function organiseBabies() {
    const sortedBabies = searchProps.babies.sort(alphabetizeBabies);
    const sortedAndFilteredBabies = sortedBabies.filter((baby) => baby.name.toLowerCase().includes(searchProps.searchInput.toLowerCase()));
    const objectBabies = sortedAndFilteredBabies.map(ObjectToBaby);
    return objectBabies;
  }

  return (
    <div className="baby-list">
      <hr />
      <section id="baby-names">
        {organiseBabies()}
      </section>
    </div>
  );
}

function alphabetizeBabies(a: BabyProps, b: BabyProps) {
  if (a.name < b.name) { return -1; }
  if (a.name > b.name) { return 1; }
  return 0;
}
  
function BabyCard(props: BabyProps): JSX.Element {
    return (
      <div id={props.name} className={props.sex}>
        {props.name}
      </div>
    )
  }
  
function ObjectToBaby(baby: BabyProps): JSX.Element {
    return (
      <BabyCard 
        id = {baby.id}
        name = {baby.name}
        sex = {baby.sex}
      />
    );
  }
