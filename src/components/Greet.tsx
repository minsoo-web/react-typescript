type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? `welcome` : `you have to log in`}
      <h2>
        hi {props.name} {messageCount}
      </h2>
    </div>
  );
};
