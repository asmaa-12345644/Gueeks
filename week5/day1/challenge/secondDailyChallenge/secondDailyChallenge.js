const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

const toJs =()=>{
    return new Promise((resolve,reject)=>{
      const parsed = JSON.parse(morse);
      if (Object.keys(parsed).length === 0)
        reject("The javascript object is empty ")
      else
        resolve(parsed)
    })
}

const toMorse = (morseJS) => {
        return new Promise((resolve, reject) => {
          const userInput = prompt("Enter a word or a sentence").toLowerCase();
          const result = [];
      
          for (let char of userInput) {
            if (morseJS[char]) {
              result.push(morseJS[char]);
            } else {
              reject(`Character "${char}" not found in Morse dictionary`);
              return;
            }
          }
      
          resolve(result);
        });
};
    
const joinWords = (morseTranslation) => {
    document.body.innerHTML = morseTranslation.join("<br>");
  };
  
  toJs()
    .then((morseObj) => toMorse(morseObj))
    .then((translation) => joinWords(translation))
    .catch((err) => console.error("Error:", err));