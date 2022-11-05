import logo from "./logo.svg";
import Text from "components/Text";

function App() {
  return (
    <div className="bg-violet-600">
      <header className="bg-violet-600">
        <img src={logo} alt="logo" />
        <Text />
      </header>
    </div>
  );
}

export default App;
