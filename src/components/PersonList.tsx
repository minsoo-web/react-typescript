type PersonProp = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (prop: PersonProp) => {
  return (
    <ul>
      {prop.names.map(name => (
        <li key={name.last}>{name.first}</li>
      ))}
    </ul>
  );
};
