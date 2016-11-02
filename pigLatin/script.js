// Pig Latin - Pig Latin is a game of alterations played on the English language game. 
// To create the Pig Latin form of an English word the initial consonant sound is 
// transposed to the end of the word and an ay is affixed 
// (Ex.: "banana" would yield anana-bay). 

var pigLatin = {
  phrase: [],
  translatePhrase: function(userPhraseText) {
    this.phrase.push({
      userPhraseText: userPhraseText,   //first is property, second is param
    });
  }
};

var handlers = {
  translatePhrase: function() {
    var addPhraseToTranslate = document.getElementById('addPhraseToTranslate');
    if(addPhraseToTranslate.value !== '') {
      pigLatin.translatePhrase(addPhraseToTranslate.value);
      addPhraseToTranslate.value = '';
      view.displayPigLatin();
    } else {
      alert("You didn't enter anything to translate!");
    }
  }
};


var view = {
  displayPigLatin: function() {
    var pigLatinUl = document.querySelector('ul');
    pigLatinUl.innerHTML = '';
  
    pigLatin.phrase.forEach(function(userPhrase, position) {
        var pigLatinLi = document.createElement('li');
        var displayPigLatinOnScreen = userPhrase.userPhraseText;
        pigLatin.phrase;
      
        pigLatinLi.id = position;
        pigLatinLi.textContent = displayPigLatinOnScreen;
        pigLatinUl.appendChild(pigLatinLi);
    });
  }
};