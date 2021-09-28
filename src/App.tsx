import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { Name } from "./components/Person.types";
import { PersonList } from "./components/PersonList";

const names: Name[] = [
  {
    first: "minsoo",
    last: "kim"
  },
  {
    first: "minsoo1",
    last: "kim1"
  }
];

function App() {
  return (
    <div className="App">
      <PersonList names={names} />

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
