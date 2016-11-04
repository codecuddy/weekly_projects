// Pig Latin - Pig Latin is a game of alterations played on the English language game. 
// To create the Pig Latin form of an English word the initial consonant sound is 
// transposed to the end of the word and an ay is affixed 
// (Ex.: "banana" would yield anana-bay). 

var pigLatin = {
  phrase: [],
  addPhrase: function(userPhraseText) {
    this.phrase.push({
      userPhraseText: userPhraseText,   //first is property, second is param
    });
  }, 
  
  
};

var handlers = {
  addPhrase: function() {
    var addPhraseToTranslate = document.getElementById('addPhraseToTranslate');
    if(addPhraseToTranslate.value !== '') {
      pigLatin.addPhrase(addPhraseToTranslate.value);
      addPhraseToTranslate.value = '';
      view.displayPigLatin();
    } else {
      alert("You didn't enter anything to translate!");
    }
  }
};


var view = {
  displayPigLatin: function() {
    pigLatin.phrase.forEach(function(userPhrase, position) {
        var showPigLatin = document.getElementById('showPigLatin');
        showPigLatin.innerHTML = '';
        showPigLatin.innerHTML += userPhrase.userPhraseText;
    });
  }
};



//Next: Only have the most recent input appear on screen
//Then: Start running input through a function to change to pig latin...