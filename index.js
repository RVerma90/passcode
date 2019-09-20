console.log('We need to recover our 5 key passcode. We have the following hints:');

console.log('1) A * B = 24');
console.log('2) B = 3D');
console.log('3) A + C = D + E ');
console.log('4) A + B + C + D + E = 26');


// Instead of iterating from 00000 - 99999, we will breakdown the problem into smaller 

// Find AB permutations
let ab = [];

for (i = 10; i < 99; i++) {
  
  let A = getFirstFigure(i);
  let B = getSecondFigure(i);

  if (A * B === 24) {
    
    ab.push(i);
  }
}


// Match AB permutations with constriction set by B = 3D and must be integer
let abd = [];

ab.map((i) => {

  let secondFigure = getSecondFigure(i);

  let fourthFigure = secondFigure / 3;
  
  // If divisible by 3 without remainders
  if (secondFigure % 3 === 0) {
    let abdOption = [];
    abdOption.push(i);
    abdOption.push(fourthFigure);
    abd.push(abdOption);
  } else {
  }

});



// A + C = D + E, can be refactored to their C = E - 2 or E = C + 2
// Also A + B + C + D + E = 26
// We will go for C, then E so we can get ABCDE options
// A + B + 2C + D = 24
// or C = (24 - A - B - D)/2

console.log('The last three equations can be reused as follows:');
console.log('5) B = 3D, A + C = D + E => A + B + C = 4D + E');
console.log('6) A + B + C + D + E = 26 => 5D + 2E = 26');
abcde = []
abd.map((i) => {
  abCopy = i[0];
  d = i[1];

  let firstFigure = getFirstFigure(abCopy);
  let secondFigure = getSecondFigure(abCopy);
  let fourthFigure = getFirstFigure(d);
  let thirdFigure = (24 - firstFigure - secondFigure - fourthFigure) / 2;

  // 
  let fifthFigure = 26 - firstFigure - secondFigure - thirdFigure - fourthFigure;

  abcdeOption = [];
  abcdeOption.push(firstFigure);
  abcdeOption.push(secondFigure);
  abcdeOption.push(thirdFigure);
  abcdeOption.push(fourthFigure);
  abcdeOption.push(fifthFigure);


  if ((firstFigure + secondFigure + thirdFigure + fourthFigure + fifthFigure == 26) && (5*fourthFigure + 2*fifthFigure == 26)) {
    abcde.push(abcdeOption);
  }


});


console.log('then ABCDE can be calculated as', abcde);


function getFirstFigure (i) {
  return parseInt(String(i).charAt(0));
}

function getSecondFigure (i) {
  return parseInt(String(i).charAt(1));
}