import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds > 0) {
      var id = setTimeout(() => {
        setSeconds(seconds - 1);
        // console.log("Timer active");
      }, 1000);
    }
    return () => {
      clearTimeout(id);
    };
  }, [seconds]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => {
              let inpVal = event.target.value;
              if (event.keyCode === 13) {
                if (isNaN(inpVal) || inpVal < 0) {
                  setSeconds(0);
                } else {
                  setSeconds(Math.floor(inpVal));
                }
              }
            }}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{seconds}</div>
    </div>
  );
};

export default App;
