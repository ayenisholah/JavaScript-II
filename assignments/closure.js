// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let nigeriaPopulation = "196M";

function nigeria() {
  const population = 190000000;
  console.log(`The population of Nigeria is: ${population}`)
  
  function lagos() {
    const governor = 'Ambode'
    console.log(`The governor of Lagos state is: ${governor} `);

    function ikeja() {
      const mayor = 'Shola'
      console.log(`${mayor} and ${governor} had `)
    }
    ikeja()
  }
  lagos()
}
nigeria()



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
