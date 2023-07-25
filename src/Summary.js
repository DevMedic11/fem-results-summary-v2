import jsonData from "../public/data.json";

export default function Summary() {
  return (
    <>
      <h2>Summary</h2>
      {jsonData.map((item) => {
        return (
          <>
            <img src={item.icon} alt="test" />
            <p key={item.category}>{item.category}</p>
            <p key={item.score}>{item.score}/100</p>
          </>
        );
      })}
    </>
  );
}
