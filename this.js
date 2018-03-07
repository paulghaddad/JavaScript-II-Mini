/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

function helloWorld(args) {
  console.log(`this is ${this} with args ${args}`);
}

myObj = {
  helloWorld: helloWorld,
};

function Obj() {
  this.name = 'Constructor';
  this.myMethod = function() {
    console.log(`I am a ${this.name}`);
  };
}

// Principle 1
// code example for Window Binding
helloWorld(1);

// Principle 2
// code example for Implicit Binding
myObj.helloWorld(1);

// Principle 3
// code example for New Binding
myNewObj = new Obj;
myNewObj.myMethod();


// Principle 4
// code example for Explicit Binding
const boundFunction = helloWorld.bind(myObj, 4);
boundFunction();

helloWorld.call(myObj, 2);
helloWorld.apply(myObj, [3]);
