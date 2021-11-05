import babyNames from "./babyNamesData.json"

function App(): JSX.Element {
  return (
    <BabyList />
  );
}

function BabyList(): JSX.Element {
  return (
    <div className="baby-list">
      <hr />
      <section id="baby-names">
        {babyNames.sort(alphabetizeBabies).map(ObjectToBaby)}
      </section>
    </div>
  );
}

function alphabetizeBabies(a: BabyProps, b: BabyProps) {
  if(a.name < b.name) { return -1; }
  if(a.name > b.name) { return 1; }
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

interface BabyProps {
  id: number;
  name: string;
  sex: string;
}

export default App;
