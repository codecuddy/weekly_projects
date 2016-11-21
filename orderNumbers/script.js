var numbers = {
    numbersArray: [],
    inputNumber: function(numbersEntered) {
        this.numbersArray.push({
           numbersEntered: numbersEntered
        });
    }
};

var handlers = {
    submitOrder: function() {
    var numbersToBeOrdered = document.getElementById('numbersToBeOrdered');
    if(numbersToBeOrdered.value !== '') {
        numbers.inputNumber(numbersToBeOrdered.value);
        numbersToBeOrdered.value='';
        } else {
            alert("You Did Not Enter Any Numbers")
        }
    }
};

// var view = {
//     displayEntries: function() {
//         numbers.numbersArray.forEach(function(numbersEntered){
//             var displayNumbers = document.getElementById('outputs');
//             outputs.innerHTML='';
//             outputs.innerHTML += numbersEntered.numbersEntered;
//         })
//     }
// };

