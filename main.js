// main.js
// created by Jesse Jurman, Ethan Jurman

// load in the dictionary
var dictionaryLoader = new XMLHttpRequest();
dictionaryLoader.open("GET", "dictionary.txt", true);
dictionaryLoader.send();

// load and prepare full text for multiple images
var dictionaryString;
dictionaryLoader.onreadystatechange = function() {
  if (this.readyState== 4 && this.status == 200){
    dictionaryString = this.responseText.split("\n").map(function(e){
      return e.trim();
    });

  }
}

var checkKey = function(e){
  var word = document.getElementById('focusedInput').value.toUpperCase();
  document.getElementById('check').classList.remove("btn-success");
  document.getElementById('check').classList.remove("btn-primary");
  if (e.keyCode == 13) {
    checkWord();
  }
  else if (word != "") {
    document.getElementById('check').innerHTML = "Is " + word + " a word?";
  }
  else {
    document.getElementById('check').innerHTML = "Is it a word?";
  }
}

var checkWord = function(){
  var word = document.getElementById('focusedInput').value.trim().toUpperCase();

  if (dictionaryString.indexOf(word) > -1) {
    document.getElementById('check').classList.add("btn-success");
    document.getElementById('check').innerHTML = word + " is a word";
  }
  else {
    document.getElementById('check').classList.add("btn-primary");
    document.getElementById('check').innerHTML = word + " is not a word";
  }

  if (word == "BIRD") {
    window.open('https://www.youtube.com/watch?v=UAJEbuTBodI','_blank');
    document.getElementById('check').innerHTML = word + " is the word";
  }
}
