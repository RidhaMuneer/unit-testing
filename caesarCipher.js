function caesarCipher(text){
    var encryptedText = "";

    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      if (char.match(/[a-z]/i)) {
        var code = text.charCodeAt(i);
        if (char === char.toUpperCase()) {
          // Uppercase letters
          char = String.fromCharCode((code - 65 + 1) % 26 + 65);
        } else {
          // Lowercase letters
          char = String.fromCharCode((code - 97 + 1) % 26 + 97);
        }
      }
      encryptedText += char;
    }
  
    return encryptedText;
}
module.exports = caesarCipher;