import react from "react";

const colors = {
  "Legendary": "#4C139D",
  "Ascended": "#fb3e8d",
  "Exotic": "#ffa405",
  "Rare": "#fcd00b",
  "Masterwork": "#1a9306",
  "Fine": "#62A4DA",
  "Basic": "#000000",
  "Junk": "#AAAAAA"
}

const Rarity = (props) => {
  const color = colors[props.keys];
  return (
    <span className = "rarity">
      <span
        style = {{
          backgroundColor: color
        }}
      >
      </span>
      {
        props.title
      }
    </span>
  );
}

export default Rarity;
