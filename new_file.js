// function sum() {
//     let total = 0;
//     for(let i=0; i<arguments.length; i++) {
//         total += arguments[i];
//     }
//     return console.log(total);
// }

// sum(1, 2, 3, 4);
// sum(1, 2, 3, 4, 5);


// function sum(...arguments) {
//     let total = 0;
//     for(let i=0; i<arguments.length; i++) {
//         total += arguments[i];
//     }
//     return console.log(total);
// }

// sum(1, 2, 3, 4);
// sum(1, 2, 3, 4, 5);



// Function.prototype.myBind = function(ctx) {
//     const bindTimeArgs = Array.from(arguments).slice(1);
//     const originalFunc = this

//     return function(...callTimeArgs) {
//         // const callTimeArgs = Array.from(arguments).slice(1);
//         return originalFunc.apply(ctx, bindTimeArgs.concat(callTimeArgs));
//     };
// }

// call-time
// this.apply(a)(b);

// bind-time
// this.apply(a,b)();

// lamp.turnOn.myBind("Lampname");



// class Cat {
//     constructor(name) {
//       this.name = name;
//     }

//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }

//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");

//   markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true

  // bind time args are "meow" and "Kush", no call time args
  // markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true

  // no bind time args (other than context), call time args are "meow" and "a tree"
  // markov.says.myBind(pavlov)("meow", "a tree");

  // Pavlov says meow to a tree!
  // true

  // bind time arg is "meow", call time arg is "Markov"
  //   markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true

  // no bind time args (other than context), call time args are "meow" and "me"
  //   const notMarkovSays = markov.says.myBind(pavlov);
  //   notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true

//   function curriedSum(numArgs) {
//     let numbers = [];

//     return function _curriedSum(num) {
//       numbers.push(num);

//       if (numbers.length === numArgs) {
//         return numbers.reduce((acc,el) => acc + el);
//       } else {
//         return _curriedSum;
//       }
//     }
//   };

//   const sum = curriedSum(4);
//   console.log(sum(5)(30)(20)(1)); // => 56

//   function curriedSum(numArgs) {
//     let numbers = [];

//     return function _curriedSum(num) {
//       numbers.push(num);

//       if (numbers.length === numArgs) {
//         return numbers.reduce((acc,el) => acc + el);
//       } else {
//         return _curriedSum;
//       }
//     }
//   };

//   Function.prototype.curry = function(numArgs) {
//     let args = [];
//     let originalFunc = this;

//     return function _curry(element) {
//       args.push(element);

//       if (args.length === numArgs) {
//         return originalFunc(...args);
//       } else {
//         return _curry;
//       }
//     }
//   }

//   function printer(arg1,arg2,arg3) {
//     console.log(`${arg1 * 2},${arg2 * 2},${arg3 * 2}`)
//   }

//   let printerFunc = printer.curry(3);
//   printerFunc(3)(6)(9);



Function.prototype.inherits = function() {
    Object.create.protoype = MovingObject.prototype;
    Ship.prototype = new Object();
    Ship.prototype.constructor = Ship;
};

Ship.prototype.shoot = function() {
    console.log(`${this.name} is shooting`);
};

function Ship(name) {
    this.name = name;
}

const ship = new Ship('Batman');
ship.shoot();
