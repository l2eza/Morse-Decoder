var lettersToMorse = {
  /* ... */
};

function encode() {
  var englishText = document.getElementById("englishText").value.toLowerCase();
  var morseText = "";
  
  for (var i = 0; i < englishText.length; i++) {
    var character = englishText[i];
    if (lettersToMorse[character]) {
      morseText += lettersToMorse[character] + " ";
    } else {
      morseText += "   "; // Three spaces for word separation
    }
  }
  
  document.getElementById("result").innerText = morseText;
}

function decode() {
  var morseCode = document.getElementById("morseCode").value.trim();
  var decodedMessage = "";
  var morseCodeArray = morseCode.split(" ");
  
  for (var i = 0; i < morseCodeArray.length; i++) {
    var morseValue = morseCodeArray[i];
    if (morseValue === "") {
      decodedMessage += " ";
    } else if (lettersToMorse[morseValue]) {
      decodedMessage += lettersToMorse[morseValue];
    }
  }
  
  document.getElementById("result").innerText = decodedMessage;
}
