import jsonData from "./data.json";

export default function Summary() {

  function selectColor( category ){
    let color;
    switch(category){
      case "Reaction": 
        color= 'hsl(0, 100%, 67%)';
      break;
      case "Memory":
        color= 'hsl(39, 100%, 56%)';
      break;
      case "Verbal":
        color = 'hsl(166, 100%, 37%)';
      break;
      case "Visual":
        color= 'hsl(234, 85%, 45%)';
    }
    return color;
  }

  function selectBackground( category ){
    let color;
    switch(category){
      case "Reaction": 
        color= 'hsla(0, 100%, 67%, .06)';
      break;
      case "Memory":
        color= 'hsla(39, 100%, 56%, .06)';
      break;
      case "Verbal":
        color = 'hsla(166, 100%, 37%, .06)';
      break;
      case "Visual":
        color= 'hsla(234, 85%, 45%, .06)';
    }
    return color;
  }
  return (
    <div className="summary-container">
      <h4 className="summary-header">Summary</h4>
      {jsonData.map((item) => {
        return (
          <div className="Summary" style={{backgroundColor : `${selectBackground(item.category)}` , }}>
            <div className="summary-label" style={{color : `${selectColor(item.category)}`}}>
              <img className="summary-icon" src={item.icon} alt="test" />
              <p className="summary-text" key={item.category} >{item.category}</p>
            </div>
            <p className="score-text" key={item.score}><span>{item.score}</span> / 100</p>
          </div>
        );
      })}
    </div>
  );
}
