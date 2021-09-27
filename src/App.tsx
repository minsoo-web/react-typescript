import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

const nameList = [
  {
    first: "minsoo",
    last: "kim"
  },
  {
    first: "minsoo2",
    last: "ki2m"
  }
];

function App() {
  return (
    <div className="App">
      <Greet name="minsoo" messageCount={10} isLoggedIn={false} />
      <Person name="minsoo" />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
