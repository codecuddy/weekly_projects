// Identify Prime Numbers

// If # is divisible by 2, 3, 5, 7 then not prime else prime
// Run from 2 to infinity as array
// Loop through prime array and check if each i is divisible





// // while(var i = 0; i < primeArray.length)

// var numbers = {
//     compositeArray: [],
//     primeArray: [1, 2, 3, 5, 7]
    
// };

// // idea for first few button clicks
// // first click return primeArray[0]... etc on primeArray[5] start loop


// if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0) {
//   // push to compositeArray
// } else {
//   // push to primeArray
//   // return last primeArray entry 
//   // break
// };















// puts 1 to 10 in an array

var allNumbersArray = []
var primeNumbersArray = [2, 3, 5, 7]
debugger;
for (var i = 2; i < 1000; i++) {
    allNumbersArray.push(i);
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        primeNumbersArray.push(i);    
    }    
}
