interface CardProps {
  id: number;
  name: string;
  sex: string;
  setFavourites: React.Dispatch<React.SetStateAction<string[]>>;
}

export function BabyCard(props: CardProps): JSX.Element {
  return (
    <div
      id={props.name}
      className={props.sex}
      onClick={() =>
        props.setFavourites((prevFavs: string[]) => [...prevFavs, props.name])
      }
    >
      {" "}
      {props.name}
    </div>
  );
}
