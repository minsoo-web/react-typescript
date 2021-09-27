type PersonProps = {
  name: string;
};

export const Person = (props: PersonProps) => {
  return <h2>{props.name}</h2>;
};
