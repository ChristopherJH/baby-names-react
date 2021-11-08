import BabyProps from "./BabyProps";

export function BabyCard(props: BabyProps): JSX.Element {
  return (
    <div id={props.name} className={props.sex}>
      {props.name}
    </div>
  );
}

export function ObjectToBaby(baby: BabyProps): JSX.Element {
  return <BabyCard id={baby.id} name={baby.name} sex={baby.sex} />;
}
