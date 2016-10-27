// Identify Prime Numbers

// If # is divisible by 2, 3, 5, 7 then not prime else prime
// Run from 2 to infinity as array
// Loop through prime array and check if each i is divisible



// puts 1 to 8000 in an array

var allNumbersArray = [0, 1]
var primeNumbersArray = [2, 3, 5, 7]
for (var i = 2; i < 100; i++) {
    allNumbersArray.push(i);
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        primeNumbersArray.push(i);  
    }    
}


var primeNumberArray = document.getElementById('currentPrimeNumber');

debugger;
    for (i = 0; i < primeNumbersArray.length; i++) {
        primeNumberArray.innerHTML = primeNumbersArray[i];
    }


// BUG: a prime * prime is being put into the primeNumbersArray --> obviously not a prime number
// if primeNumbersArray[i*i] = # in primeNumbersArray then remove from primeNumbersArray