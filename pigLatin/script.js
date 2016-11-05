// Pig Latin - Pig Latin is a game of alterations played on the English language game. 
// To create the Pig Latin form of an English word the initial consonant sound is 
// transposed to the end of the word and an ay is affixed 
// (Ex.: "banana" would yield anana-bay). 

var pigLatin = {
  phrase: [],
  addPhrase: function(userPhraseText) {
    this.phrase.push({
      userPhraseText: userPhraseText,  //first is property, second is param
      translated: false
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
  
  //, translate: function(userPhraseText) {
    // this.translated.push({
    //     userPhraseText: userPhraseText,
    //     translated: true
    // })
  //}
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
    pigLatin.phrase.forEach(function(userPhrase, position) { 
        var showPigLatinAfter = document.getElementById('showPigLatinAfter');
        showPigLatinAfter.innerHTML = '';
        if (userPhrase.userPhraseText.substring(0, 1) === 'a') {
          showPigLatinAfter.innerHTML += userPhrase.userPhraseText.substr(1) + "-" + userPhrase.userPhraseText.substring(0, 1) + "bay";
        } else if (userPhrase.userPhraseText.substring(0, 1) === 'e') {
          showPigLatinAfter.innerHTML += userPhrase.userPhraseText.substr(1) + "-" + userPhrase.userPhraseText.substring(0, 1) + "bay";
        } else if (userPhrase.userPhraseText.substring(0, 1) === 'i') {
          showPigLatinAfter.innerHTML += userPhrase.userPhraseText.substr(1) + "-" + userPhrase.userPhraseText.substring(0, 1) + "bay";
        } else if (userPhrase.userPhraseText.substring(0, 1) === 'o') {
          showPigLatinAfter.innerHTML += userPhrase.userPhraseText.substr(1) + "-" + userPhrase.userPhraseText.substring(0, 1) + "bay";
        } else if (userPhrase.userPhraseText.substring(0, 1) === 'u') {
          showPigLatinAfter.innerHTML += userPhrase.userPhraseText.substr(1) + "-" + userPhrase.userPhraseText.substring(0, 1) + "bay";
        } else {
          showPigLatinAfter.innerHTML += userPhrase.userPhraseText.substr(1) + "-" + userPhrase.userPhraseText.substring(0, 1) + "ay";
        }
    });  
  }
};





//Next: Apply the translation to more than one word entered at a time