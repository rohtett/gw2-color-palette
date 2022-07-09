import { useState } from "react";

  const weights = ["Cloth", "Leather", "Metal", "Fur"]

  const Menu = (props) => {

  return (
    <form>
        {
          weights.map((weight) => (
            <div className = "formInput">
              <input
                onChange = { event => {
                  props.setWeight(event.target.value);
                }}
                checked = { props.selectedWeight === weight }
                type = "radio"
                name = "weight"
                id = { weight }
                value = { weight }
              />
              <label htmlFor = { weight }>
                { weight }
              </label>
            </div>
          ))
        }
        <br />
      </form>
  );
}

export default Menu;
