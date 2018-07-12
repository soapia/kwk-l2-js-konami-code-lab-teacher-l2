const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

  let idx = 0 // set our variable of index to zero

  document.body.addEventListener("keydown", (thingPressed) => { // detect when a key is pressed, store it in thingPressed
    const key = thingPressed.key // create a variable that stores the actual key, rather than the number
    console.log(key) // write it in the console
    
    // idx = (codes[idx] === key) ? ++idx : 0 
    
    if (codes[idx] === key) { // if the first key is the first item in the array
      ++idx // increment
    } else { // in every other scenario
      idx = 0 // start over
    }
    console.log(idx) 
    if (idx == 10) {
      alert("Hurray!");
      idx = 0
    }
    
  });
  

