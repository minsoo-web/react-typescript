type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? `welcome` : `you have to log in`}
      <h2>
        hi {props.name} {props.messageCount}
      </h2>
    </div>
  );
};
