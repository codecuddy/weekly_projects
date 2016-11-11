var pigLatin = {
  phrase: [],
  addPhrase: function(userPhraseText) {
    this.phrase.push({
      userPhraseText: userPhraseText.toLowerCase(),  //first is property, second is param
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
        var easyToReadTranslation = document.getElementById('easyToReadTranslation');
        showPigLatinAfter.innerHTML = '';
        
        if(easyToReadTranslation.checked === true) {
          for(var i = 0; i < splitArray.length; i++) {
            var firstLetter = splitArray[i].substring(0, 1);
            if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u') {
              showPigLatinAfter.innerHTML += splitArray[i].substr(1) + "-" + splitArray[i].substring(0, 1) + "bay ";
            } else {
              showPigLatinAfter.innerHTML += splitArray[i].substr(1) + "-" + splitArray[i].substring(0, 1) + "ay ";
            }
          }
        } else {
          for(var j = 0; j < splitArray.length; j++) {
            var firstLetter = splitArray[j].substring(0, 1);
            if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u') {
              showPigLatinAfter.innerHTML += splitArray[j].substr(1) + splitArray[j].substring(0, 1) + "bay ";
            } else {
              showPigLatinAfter.innerHTML += splitArray[j].substr(1) + splitArray[j].substring(0, 1) + "ay ";
            }
          }
        }
    });  
  }
};





//Next: account/delete for special characters


//      ****** OTHER OPTIONS TO ADD MORE SPECIFICS OF PIG LATIN ****** 
// _______________________________________________________________________
// Basically, the Pig Latin system used here works as follows:

// Words that start with a vowel (A, E, I, O, U) simply have "WAY or BAY" appended to the end of the word.
// Words that start with a consonant have all consonant letters up to the first vowel moved to the end of the word (as opposed to just the first consonant letter), and "AY" is appended.
//     ('Y' is counted as a vowel in this context)
// The algorithm incorporates the following features and special case functionality:

// Ensures proper capitalization
// Correct upper case and lower case formatting
// Correctly translates "qu" (e.g., ietquay instead of uietqay)
// Differentiates between "Y" as vowel and "Y" as consonant
// (e.g. yellow = elloyay and style = ylestay) — (except for a very few exceptions)
// Correctly translates contractions
// Hyphenated words are treated as two words
// Words may consist of alphabetic characters only (A-Z and a-z)
// All punctuation, numerals, symbols and whitespace are not modified