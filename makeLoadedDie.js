function makeLoadedDie() {

  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

  var rollCount = 0;

  return function() {

    rollCount += 1;
    return list[rollCount - 1];

  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6