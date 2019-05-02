var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(a,b) {

  var sqSum = a * a + b * b;
  var hyp = Math.sqrt(sqSum);
  return hyp;

});


//   a => hypotenuse(a.x, a.y));

// function squareIt(number) {

//    return number * number;

// }

// function hypotenuse(c, d) {

//   return Math.sqrt(squareIt(c) + squareIt(d));

// }

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);