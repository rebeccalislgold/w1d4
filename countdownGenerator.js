//Implement a function countdownGenerator() that takes in a
//number x and returns a function that counts down when it
//is called (see starter code below).


var countdownGenerator = function (x) {

  var messageIndex = x;

  return function() {

    if (messageIndex > 0) {

      console.log("T-minus " + messageIndex + "...")

    } else if (messageIndex === 0) {

      console.log("Blast Off!")

    } else {

      console.log("Rockets already gone, bub!")

    }

    messageIndex = messageIndex - 1

  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!