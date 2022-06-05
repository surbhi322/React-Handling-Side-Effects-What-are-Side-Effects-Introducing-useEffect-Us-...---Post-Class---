import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [count, setCount] = useState(0);
  const [timeOn, setTimeON] = useState(false);
  
  useEffect(()=>{
    let interval = null;
   if(timeOn){
     interval = setInterval(()=>{
       setCount(prevTime => prevTime == 0 ? clearInterval(interval) : prevTime - 1);
     },1000)
   }else{
     clearInterval(interval);
   }
   return ()=> clearInterval(interval);
  },[timeOn])
 
   return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={(event)=>{
          let val = Number(event.target.value);
          console.log(typeof val)
          val = Math.floor(val);
          if(isNaN(val)){
            if(event.key === 'Enter'){
              setTimeON(false);
              setCount(0);
           }
          }else{
            if(event.key === 'Enter'){
              if(val === 0){
                setCount(0);
                setTimeON(false);
              }else{
                setTimeON(true);
                setCount(val);
              }
              
           }
          }

          }} /> sec.
        </h1>
      </div>
      <div id="current-time">{count}</div>
    </div>
  )
}
export default App;
