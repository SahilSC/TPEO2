import React, { useState } from 'react'

function Box() {
    let [counter, setCounter] = useState(null); 
  let [cnt, setCnt] = useState(0); 
  let myPromise = new Promise((resolve, error) => {
    if (counter === null) {
      error("ERROR: counter has no val")
    }
    else {
      resolve("SUCCESS" + counter);
      
    }
  });
  
  myPromise
  .then((resolve) => {
    document.getElementById("text").innerHTML = resolve
  })
//   .catch();

  setTimeout(function() {
    setCounter(3)
  }, 3000);


  return (
    <div id = "text"></div>
  )
}

export default Box