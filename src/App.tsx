import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>placeholder</Heading>
      <Oscar>
        <Heading>Oscar asd</Heading>
      </Oscar>

      <Greet name="minsoo" isLoggedIn={false} />
    </div>
  );
}

export default App;
