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
    dictionaryString = this.responseText;
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
  var word = document.getElementById('focusedInput').value.toUpperCase();

  if (dictionaryString.includes(word)) {
    document.getElementById('check').classList.add("btn-success");
    document.getElementById('check').innerHTML = word + " is a word";
  }
  else {
    document.getElementById('check').classList.add("btn-primary");
    document.getElementById('check').innerHTML = word + " is not a word";
  }
}
