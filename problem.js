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
  
  
  // 