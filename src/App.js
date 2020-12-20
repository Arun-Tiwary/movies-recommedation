import React, { useState } from "react";
import "./styles.css";

var action = [
  "Fast & Furious   ",
  "Misson Impossible   ",
  "6 Underground   ",
  "Venom"
];

var drama = ["The Social Delima ", "Ford vs Ferrari ", "Parasite ", "Lion "];

var thriller = ["Joker ", "Gone Girl ", "Nightcrawler", "Predestination"];

export default function App() {
  const [country, setCountry] = useState("");
  return (
    <div className="App">
      <h1>Movies Recommendation</h1>
      <small>
        select your genre and we will give you the best recommendation ever
      </small>
      <br />
      <table class="center">
        <tr>
          <td>
            <button
              class="view"
              onClick={() =>
                setCountry(
                  action.map(function (item) {
                    return (
                      <ul>
                        {" "}
                        <li> {item} </li>{" "}
                      </ul>
                    );
                  })
                )
              }
            >
              Action Movies
            </button>
          </td>

          <td>
            <button
              class="view"
              onClick={() =>
                setCountry(
                  drama.map(function (item) {
                    return (
                      <ul>
                        {" "}
                        <li> {item} </li>{" "}
                      </ul>
                    );
                  })
                )
              }
            >
              Drama Movies
            </button>
          </td>

          <td>
            <button
              class="view"
              onClick={() =>
                setCountry(
                  thriller.map(function (item) {
                    return (
                      <ul>
                        {" "}
                        <li> {item} </li>{" "}
                      </ul>
                    );
                  })
                )
              }
            >
              Thriller Movies
            </button>
          </td>
        </tr>
      </table>

      <h2>{country}</h2>
    </div>
  );
}
