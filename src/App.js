import React, { useState } from "react";
import "./styles.css";

var action = ["Fast & Furious", "Misson Impossible", "6 Underground", "Venom"];

var drama = ["The Social Delima", "Ford vs Ferrari", "Parasite", "Lion"];

var thriller = ["Joker", "Gone Girl", "Nightcrawler"];

export default function App() {
  const [country, setCountry] = useState("");
  return (
    <div className="App">
      <h2> {country}</h2>
      <button
        onClick={() =>
          setCountry(
            action.map(function (item) {
              return item;
            })
          )
        }
      ></button>
    </div>
  );
}
