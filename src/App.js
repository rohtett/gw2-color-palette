import { useState, useEffect } from "react";

import Menu from "./Menu";
import Palette from "./Palette";
import Article from "./Article";

import "./App.css";

const apiEndpoint = "https://api.guildwars2.com/v2/colors";
const thresholds = [10, 20, 30, 40];

const App = () => {
  const [colors, setColor] = useState([]);
  const [resultThreshold, setThreshold] = useState(sessionStorage.threshold);
  const [selectedWeight, setWeight] = useState("Cloth")

  const ping = () => {
    return fetch(apiEndpoint);
  }

  const results = data => {
    let ids = [];
    while (ids.length < resultThreshold) {
      let id = data[Math.floor(Math.random() * data.length)];
      ids.push(id);
    }
    const string = ids.join(",");
    const search = apiEndpoint + "?ids=" + string;
    query(search);
  }

  const query = async search => {
    const response = await fetch(search);
    const data = await response.json();
    setColor(data);
  }

  useEffect(() => {
    if (!sessionStorage.threshold) {
      console.log("Setting Threshold...")
      sessionStorage.setItem("threshold", 20);
      window.location.reload();
    } else {
      ping()
        .then((response) => {
          const data = response;
          data.json().then(result => {
            results(result);
          })
        })
    }
  }, [sessionStorage.threshold]);

  return (
    <div className = "container">
      <div className = "Header">
        <div className = "logo">
        </div>
        <nav>
          <h2>Guild Wars 2 Colour Palette</h2>
          <Menu selectedWeight = { selectedWeight } setWeight = { setWeight } />
        </nav>
      </div>
      <div className = "colors" >
        <label id="results">
          <div>
            Show Results:
            <select
              value = { resultThreshold }
              onChange = {
                (event) => {
                  sessionStorage.setItem("threshold", event.target.value);
                  setThreshold(event.target.value);
                }
              }
            >
              {
                thresholds.map((threshold) => (
                  <option
                    value = { threshold }
                  > { threshold }
                  </option>
                ))
              }
            </select>
          </div>
        </label>
          <div className = "main">
            <nav>
              <Menu selectedWeight = { selectedWeight } setWeight = { setWeight } />
              </nav>
            <div>
              <section>
              {
                colors? (
                  colors.map((color) => (
                      <Palette color = { color } selectedWeight = { selectedWeight } />
                  ))
                ) : (
                  <h2> Error </h2>
                )
              }
            </section>
            <Article />
          </div>
        </div>
        <div className = "hr">
        </div>
      </div>
    </div>
  );
}

export default App;
