import "./styles.css";
import Result from "./Result";
import Summary from "./Summary";

export default function App() {
  return (
    <div className="App">
      <Result className="Result" />
      <Summary className="Summary" />
      <button>Continue</button>
    </div>
  );
}
