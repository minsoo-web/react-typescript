import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  return (
    <p>
      <span>{props.name.first}</span>
      <span>{props.name.last}</span>
    </p>
  );
};
