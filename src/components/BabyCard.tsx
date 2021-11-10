import BabyProps from "./BabyProps";

interface CardProps {
  baby: BabyProps;
  setFavourites: (callback: (previous: BabyProps[]) => BabyProps[]) => void;
}

export function BabyCard(props: CardProps): JSX.Element {
  return (
    <div
      id={props.baby.name}
      className={props.baby.sex}
      onClick={() =>
        props.setFavourites((prevFavs: BabyProps[]) => [
          ...prevFavs,
          props.baby,
        ])
      }
    >
      {" "}
      {props.baby.name}
    </div>
  );
}
