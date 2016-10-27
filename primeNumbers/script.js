// Identify Prime Numbers

// If # is divisible by 2, 3, 5, 7 then not prime else prime
// Run from 2 to infinity as array
// Loop through prime array and check if each i is divisible



// puts 1 to 8000 in an array

    var allNumbersArray = [0, 1]
    var primeNumbersArray = ['', 2, 3, 5, 7]
    function findPrimes() {        
        for (var i = 2; i < 1000; i++) {
        allNumbersArray.push(i);
            if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % Math.sqrt(i) !==0) {
            primeNumbersArray.push(i);  
            }    
        }
    }
    findPrimes();


// if (primeNumbersArray[i] divides into i then do not put it in primeNumbersArray)

var myIndex = 1;
var currentPrimeNumber = document.getElementById('currentPrimeNumber');
var previousPrimeNumber = document.getElementById('previousPrimeNumber');

currentPrimeNumber.innerHTML = primeNumbersArray[0]; //Print first value of array right away.
previousPrimeNumber.innerHTML = primeNumbersArray[0];

function nextPrimeClick() {
  if (myIndex < primeNumbersArray.length) {
     currentPrimeNumber.innerHTML = primeNumbersArray[myIndex];
     previousPrimeNumber.innerHTML = primeNumbersArray[myIndex - 1];
     myIndex++;
  }
  else {
     currentPrimeNumber.innerHTML = "CONGRATS! You made it through first 1000 Prime Numbers! Your finger should be sore. Go outside and play!";   
  }
};






// BUG: a prime * prime is being put into the primeNumbersArray --> obviously not a prime number
// if primeNumbersArray[i*i] = # in primeNumbersArray then remove from primeNumbersArray