import { Person } from "./Person";
import { Name } from "./Person.types";

type PersonProp = {
  names: Name[];
};

export const PersonList = (prop: PersonProp) => {
  return (
    <ul>
      {prop.names.map(name => (
        <li key={name.last}>
          <Person name={name} />
        </li>
      ))}
    </ul>
  );
};
