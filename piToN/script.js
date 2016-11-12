function decimalOfPi(){
        var pi = Math.PI;
        var piLocation = document.getElementById('showPi');
        var nthDigitOfPi = document.getElementById('nthDigitOfPi');
        piLocation.innerHTML = pi.toFixed(nthDigitOfPi.value.round);
    }   

//Things to Improve: 
//Round the Decimal
//Use longer decimal as shown below
    //code below will show the nth term but nothing before it

// function moreDecimal() {
//     var pi = "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825"
//     var piLocation = document.getElementById('showPi');
//     var nth = document.getElementById('nthDigitOfPi');
//     var cut = pi.charAt(nth.value);
//     piLocation.innerHTML = cut;
// }


