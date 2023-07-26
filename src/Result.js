export default function Result() {
  return (
    <div className="Result">
      <h3 className="result-header">Your Result</h3>
      <div className="result-circle">
        <p className="of-100">
          <span>76</span>
          <br />
          of 100
        </p>
      </div>
      <h3 className="result-great">Great</h3>
      <p className="result-para">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
