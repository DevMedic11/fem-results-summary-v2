import jsonData from "./data.json";

export default function Summary() {
  return (
    <>
      <h2>Summary</h2>
      {jsonData.map((item) => {
        return (
          <div className="Summary">
            <div className="summary-label">
              <img src={item.icon} alt="test" />
              <p key={item.category}>{item.category}</p>
            </div>
            <p key={item.score}>{item.score}/100</p>
          </div>
        );
      })}
    </>
  );
}
