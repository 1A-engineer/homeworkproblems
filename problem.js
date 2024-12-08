// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // Output: "olleh"
  
  // Check if a number is string
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
  }
  
  console.log(isPrime(11)); // Output: true
  console.log(isPrime(10)); // Output: false
  
  //  Remove Duplicates from an Array
  
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
  
  
  
  
  // Greatest common divisor 
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  const num1 = 48;
  const num2 = 18;
  
  console.log("GCD:", gcd(num1, num2));
  
  // Least common muptiple
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  const numlcm1 = 12;
  const numlcm2 = 18;
  
  const result23 = lcm(numlcm1, numlcm2);
  console.log("LCM of", numlcm1, "and", numlcm2, "is", result23);
  
  
// Check if number is in array.

function checkNumber(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      console.log("YES");
      return; // 
    }
  }
  console.log("NO"); 
}
const numbers = [1, 2, 3, 4, 5]; 
const target = 3; 

checkNumber(numbers, target); 



// Calculating the area and circumference of a circle

const PI = 3.141592;
const radius = 5;
const area = PI * Math.pow(radius, 2);
console.log(`The area of the circle: ${area.toFixed(2)} cm^2`);
const circumference = 2 * PI * radius;
console.log(`The circumference of the circle: ${circumference.toFixed(2)} cm`);

// alternative way:

function calculateCircleProperties(radius) {
  if (radius <= 0) {
    console.log("Radius must be a positive number.");
    return;
  }

  const pi = 3.141592;
  const area = pi * radius * radius; 
  const circumference = 2 * pi * radius; 

  console.log("For a circle with radius " + radius + ":");
  console.log("Area: " + area.toFixed(2)); 
  console.log("Circumference: " + circumference.toFixed(2)); // Round the circumference to 2 decimal places
}

calculateCircleProperties(5);  





