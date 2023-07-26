import "./styles.css";
import Result from "./Result";
import Summary from "./Summary";

export default function App() {
  return (
    <div className="App">
      <Result className="Result" />
      <div className="panel-right">
      <Summary className="Summary" />
      <button>Continue</button>
      </div>
    </div>
  );
}
