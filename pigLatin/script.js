// Pig Latin - Pig Latin is a game of alterations played on the English language game. 
// To create the Pig Latin form of an English word the initial consonant sound is 
// transposed to the end of the word and an ay is affixed 
// (Ex.: "banana" would yield anana-bay). 

var pigLatin = {
  phrase: [],
  addPhrase: function(userPhraseText) {
    this.phrase.push({
      userPhraseText: userPhraseText,  //first is property, second is param
    });
  }
};

var handlers = {
  addPhrase: function() {
    var addPhraseToTranslate = document.getElementById('addPhraseToTranslate');
    if(addPhraseToTranslate.value !== '') {
      pigLatin.addPhrase(addPhraseToTranslate.value);
      addPhraseToTranslate.value = '';
      view.displayOriginal();
      view.displayPigLatin();
    } else {
      alert("You didn't enter anything to translate!");
    }
  }
};

var view = {
  displayOriginal: function() {
    pigLatin.phrase.forEach(function(userPhrase, position) {
        var showPigLatinBefore = document.getElementById('showPigLatinBefore');
        showPigLatinBefore.innerHTML = '';
        showPigLatinBefore.innerHTML += userPhrase.userPhraseText;
    });
  }, 
  displayPigLatin: function() {
    var splitPhrase = pigLatin.phrase[pigLatin.phrase.length - 1].userPhraseText;
    var splitArray = splitPhrase.split(' ');
    pigLatin.phrase.forEach(function(userPhrase, position) { 
        var showPigLatinAfter = document.getElementById('showPigLatinAfter');
        showPigLatinAfter.innerHTML = '';
        for(var i = 0; i < splitArray.length; i++) {
          var firstLetter = splitArray[i].substring(0, 1);
          if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u') {
            showPigLatinAfter.innerHTML += splitArray[i].substr(1) + "-" + splitArray[i].substring(0, 1) + "bay ";
          } else {
            showPigLatinAfter.innerHTML += splitArray[i].substr(1) + "-" + splitArray[i].substring(0, 1) + "ay ";
          }
        }
    });  
  }
};





//Next: account/delete for special characters