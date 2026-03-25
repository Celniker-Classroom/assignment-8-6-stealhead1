[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=23285168)
# CS++ JavaScript — Lesson 8.6: Functions

> **Lesson 8.6** | 100 Points | 7 Autograded Tests

In this assignment you will implement five JavaScript functions and connect them to buttons on a web page. All output is written to the page using `textContent` — no prompts, no alerts, no console.log for output.

---

## Table of Contents

1. [Concepts You Need](#concepts-you-need)
2. [Project Overview](#project-overview)
3. [Functions to Implement](#functions-to-implement)
4. [Required IDs](#required-ids)
5. [File Structure](#file-structure)
6. [Autograding](#autograding)
7. [Try It Yourself — Practice Examples](#try-it-yourself--practice-examples)
8. [Tips for Success](#tips-for-success)
9. [FAQ](#faq)

---

## Concepts You Need

### Defining Functions

A function is a reusable block of code that takes inputs (parameters) and returns an output:

```javascript
function add(a, b) {
    return a + b;
}

let result = add(3, 5);  // result is 8
```

### Parameters vs Arguments

- **Parameters** are the names in the function definition: `function add(a, b)`
- **Arguments** are the actual values you pass when calling: `add(3, 5)`

### Return Values

`return` sends a value back to the caller. Without `return`, a function returns `undefined`:

```javascript
function double(n) {
    return n * 2;
}

let x = double(5);  // x is 10
```

### Persistent Variables (Closures)

A variable declared **outside** a function keeps its value between function calls:

```javascript
let count = 0;

function increment() {
    count++;
    return count;
}

increment();  // returns 1
increment();  // returns 2
increment();  // returns 3
```

### Math Functions

```javascript
Math.sqrt(16)     // 4 (square root)
Math.floor(4.7)   // 4 (rounds down)
Math.random()     // random decimal 0 to 1
Math.PI           // 3.14159...
```

### The Quadratic Formula

For the equation `ax² + bx + c = 0`:

```
x = (-b ± sqrt(b² - 4ac)) / (2a)
```

The **discriminant** is `b² - 4ac`:
- If positive: two real roots
- If zero: one real root (repeated)
- If negative: complex roots (involves `i`, the imaginary unit)

### textContent

Write output to the page instead of using alert or console.log:

```javascript
document.getElementById("output").textContent = "Hello!";
```

---

## Project Overview

Your page has five sections, each with a button, optional inputs, and an output area. Clicking each button calls a handler that runs your function and displays the result using `textContent`.

The starter `index.html` and click handlers are provided. You only need to implement the five functions.

---

## Functions to Implement

### 1. myFunc()
A persistent counter that increments by 1 each time it is called and returns the current count.

```
First call: returns 1
Second call: returns 2
Third call: returns 3
```

### 2. getRandomNum(max)
Returns a random integer between 1 and `max` (inclusive). If `max` is not a positive number, return `0`.

```
getRandomNum(10)  // returns a number 1-10
getRandomNum(-5)  // returns 0
getRandomNum("abc") // returns 0
```

### 3. myAdder(x, y)
Returns the **numeric** sum of `x` and `y`. Be careful — input values come from text fields as strings. You must convert them to numbers.

```
myAdder("3", "5")  // returns 8 (not "35")
myAdder("10", "20") // returns 30
```

### 4. distance(x1, y1, x2, y2)
Returns the Euclidean distance between two points using the formula:

```
distance = sqrt((x2 - x1)² + (y2 - y1)²)
```

```
distance(0, 0, 3, 4)  // returns 5
distance(1, 1, 4, 5)  // returns 5
```

### 5. quadratic(a, b, c)
Solves `ax² + bx + c = 0` and returns an array of roots.
- For positive discriminant: return two real roots (e.g., `[2, 3]`)
- For zero discriminant: return one root (e.g., `[4]`)
- For negative discriminant: return complex roots as strings with `i` (e.g., `["2+3i", "2-3i"]`)

```
quadratic(1, -5, 6)   // returns [2, 3]  (x²-5x+6=0)
quadratic(1, -8, 16)  // returns [4]     (x²-8x+16=0)
quadratic(1, 0, 1)    // returns ["0+1i", "0-1i"]  (x²+1=0)
```

---

## Required IDs

These IDs must exist in your HTML for the autograder. They are included in the starter `index.html`.

**Buttons:** `btnMyFunc`, `btnRandom`, `btnAdder`, `btnDistance`, `btnQuadratic`

**Inputs:** `maxRand`, `addX`, `addY`, `x1`, `y1`, `x2`, `y2`, `qa`, `qb`, `qc`

**Outputs:** `outMyFunc`, `outRandom`, `outAdder`, `outDistance`, `outQuadratic`

---

## File Structure

```
JS-Functions/
├── index.html              <-- Page with buttons and inputs (provided)
├── script.js               <-- YOUR CODE GOES HERE
└── .github/
    └── workflows/
        └── classroom.yml   <-- Autograding tests (DO NOT MODIFY)
```

**Edit only `script.js`.** The helper functions (`$()`, `setText()`) and click handlers are provided at the bottom of the starter file.

---

## Autograding

| Test | What It Checks | Points |
|------|---------------|--------|
| Required elements exist | All buttons, inputs, and output divs are present | 10 |
| myFunc() persistent counter | Returns 1, then 2, then 3 on repeated calls | 15 |
| getRandomNum(max) range or 0 | Returns 1..max for valid input, 0 for invalid | 15 |
| myAdder(x, y) correct sum | Numeric addition, not string concatenation | 15 |
| distance() calculates correctly | Euclidean distance formula | 20 |
| quadratic() real roots | Solves x²-5x+6=0 and returns [2, 3] | 15 |
| quadratic() complex roots | Handles negative discriminant with "i" | 10 |

**Total: 100 points**

---

## Try It Yourself — Practice Examples

Create `practice.js` and run it with `node practice.js`.

**Example 1 — Persistent counter:**
```javascript
// practice.js — counter pattern
let count = 0;

function myFunc() {
    count++;
    return count;
}

console.log(myFunc());  // 1
console.log(myFunc());  // 2
console.log(myFunc());  // 3
```

**Example 2 — Random numbers:**
```javascript
// practice.js — random in range
function getRandomNum(max) {
    max = parseInt(max);
    if (isNaN(max) || max < 1) return 0;
    return Math.floor(Math.random() * max) + 1;
}

for (let i = 0; i < 5; i++) {
    console.log("Random 1-10:", getRandomNum(10));
}
console.log("Invalid:", getRandomNum(-5));   // 0
console.log("Invalid:", getRandomNum("abc")); // 0
```

**Example 3 — Distance formula:**
```javascript
// practice.js — Euclidean distance
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

console.log(distance(0, 0, 3, 4));   // 5
console.log(distance(1, 1, 4, 5));   // 5
console.log(distance(0, 0, 0, 0));   // 0
```

**Example 4 — Quadratic formula:**
```javascript
// practice.js — quadratic solver
function quadratic(a, b, c) {
    let disc = b * b - 4 * a * c;
    if (disc > 0) {
        let r1 = (-b + Math.sqrt(disc)) / (2 * a);
        let r2 = (-b - Math.sqrt(disc)) / (2 * a);
        return [r1, r2];
    } else if (disc === 0) {
        return [-b / (2 * a)];
    } else {
        let real = (-b / (2 * a));
        let imag = (Math.sqrt(-disc) / (2 * a));
        return [real + "+" + imag + "i", real + "-" + imag + "i"];
    }
}

console.log(quadratic(1, -5, 6));   // [3, 2]
console.log(quadratic(1, -8, 16));  // [4]
console.log(quadratic(1, 0, 1));    // ["0+1i", "0-1i"]
```

---

## Tips for Success

1. Declare your counter variable **outside** the `myFunc()` function so it persists between calls
2. Use `parseInt()` or `parseFloat()` to convert string inputs to numbers in `myAdder` and `getRandomNum`
3. Remember that `"3" + "5"` is `"35"` (string concatenation) — you need `parseFloat("3") + parseFloat("5")` for `8`
4. For the quadratic function, calculate the discriminant first, then branch based on whether it is positive, zero, or negative
5. Do not use `prompt()` or `alert()` — this assignment uses buttons and `textContent`
6. Keep the exact function names — the autograder calls them directly

---

## FAQ

**Q: What does "persistent counter" mean?**
The counter variable keeps its value between function calls. Declare it with `let count = 0;` outside the function, then increment it inside the function.

**Q: My adder returns "35" instead of 8 — why?**
The input values are strings. `"3" + "5"` concatenates to `"35"`. Use `parseFloat()` to convert them to numbers first.

**Q: What format should complex roots use?**
Return strings like `"2+3i"` and `"2-3i"`. The real and imaginary parts should be numbers (not formatted to specific decimals).

**Q: Do I need to handle division by zero in the quadratic function?**
The autograder will always provide a nonzero value for `a`, so you do not need to handle `a = 0`.

---

View all assignments and scoring breakdowns at [csplusplus.com/js-tests](https://csplusplus.com/js-tests)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
