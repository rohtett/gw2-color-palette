import react from "react";

const Palette = (props) => {
  let rarityColor = "";
  const color = props.color;
  const selectedWeight = (props.selectedWeight).toLowerCase();
  const rgb = (color[selectedWeight].rgb);

  switch(props.color.categories[2]) {
      case "Starter":
        rarityColor = "#000000";
        break;
      case "Common":
        rarityColor = "#62A4DA";
        break;
      case "Uncommon":
        rarityColor = "#1a9306";
        break;
      case "Rare":
        rarityColor = "#fcd00b";
        break;
      case "Exclusive":
        rarityColor = "#fcd00b";
        break;
  }

  return (
    <div
      className = "Palette"
      onClick = { () => {
        navigator.clipboard.writeText(props.color.name);
      }}
    >
      <div
        style = {{
          backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`,
          borderBottom: `3px solid ${rarityColor}`
        }}>
        <span className = "colorId"> #{ props.color.id } </span>
      </div>
      <span className = "colorName">
        { props.color.name }
      </span>
    </div>
  );
}

export default Palette;
