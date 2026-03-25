// ----- Functions to implement -----

// 1) myFunc(): persistent counter

// 2) getRandomNum(max): 1..max int or 0 if invalid

// 3) myAdder(x, y): numeric sum

// 4) distance(x1, y1, x2, y2): Euclidean distance

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0


// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----
var counter = 0;
function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
// increments counter
function myFunc() {
  counter++;
  return counter
}

// returns valid number
function getRandomNum(max) {
  //checks for invalid inputs
  if (max <= 0 || parseInt(max) !== parseInt(max)) {
    return 0;
  }
  // if input is valid, makes a random number
  else if (max > 0) {
    return Math.ceil(Math.random() * max);
  }
}
  // add 2 numbers
function myAdder(x, y) {
  return parseInt(x) + parseInt(y);
}

// distance formula between points (x1,y1)(x2,y2)
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
//the quadratic formula
function quadratic(a, b, c) {
  const solutions = [];
  if (b ** 2 - 4 * a * c < 0) {
    // factors out an i then converts parts into strings to display
    solutions[0] = -b / (2 * a) + '+' + Math.sqrt(-(b ** 2 - 4 * a * c)) / (2 * a) + 'i'
    solutions[1] = -b / (2 * a) + '-' + Math.sqrt(-(b ** 2 - 4 * a * c)) / (2 * a) + 'i'
  }
  else if (b ** 2 - 4 * a * c > 0) {
    //does the formula
    solutions[0] = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
    solutions[1] = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
  }
  else if (b ** 2 - 4 * a * c == 0) {
    //finds one solution since discriminant is 0
    solutions[0] = -b / (2 * a);
  }
  return solutions;
}