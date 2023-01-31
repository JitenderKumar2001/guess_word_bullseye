


let wordList = [
  {
  word: "python",
  hint: "programming language"
  },
  {
  word: "guitar",
  hint: "a musical instrument"
  },
  {
  word: "aim",
  hint: "a purpose or intention"
  },
  {
  word: "venus",
  hint: "planet of our solar system"
  },
  {
  word: "gold",
  hint: "a yellow precious metal"
  },
  {
  word: "ebay",
  hint: "online shopping site"
  },
  {
  word: "golang",
  hint: "programming language"
  },
  {
  word: "coding",
  hint: "related to programming"
  },
  {
  
  word: "matrix",
  hint: "science fiction movie"
  },
  {
  word: "bugs",
  hint: "related to programming"
  },
  {
  word: "avatar",
  hint: "epic science fiction film"
  },
  {
  word: "gif",
  hint: "a file format for image"
  },
  {
  word: "mental",
  hint: "related to the mind"
  },
  {
  word: "map",
  hint: "diagram represent of an area"
  },
  {
  word: "island",
  hint: "land surrounded by water"
  },
  {
  word: "hockey",
  hint: "a famous outdoor game"
  },
  {
  word: "chess",
  hint: "related to a indoor game"
  },
  {
  word: "viber",
  hint: "a social media app"
  },
  {
  
  word: "github",
  hint: "code hosting platform"
  },
  {
  word: "png",
  hint: "a image file format"
  },
  {
  word: "silver",
  hint: "precious greyish-white metal"
  },
  {
  word: "mobile",
  hint: "an electronic device"
  },
  {
  word: "gpu",
  hint: "computer component"
  },
  {
  word: "java",
  hint: "programming language"
  },
  {
  word: "google",
  hint: "famous search engine"
  },
  {
  word: "venice",
  hint: "famous city of waters"
  },
  {
  word: "excel",
  hint: "microsoft product for windows"
  },
  {
  word: "mysql",
  hint: "a relational database system"
  },
  {
  
  word: "nepal",
  hint: "developing country name"
  },
  {
  word: "flute",
  hint: "a musical instrument"
  },
  {
  word: "crypto",
  hint: "related to cryptocurrency"
  },
  {
  word: "tesla",
  hint: "unit of magnetic flux density"
  },
  {
  word: "mars",
  hint: "planet of our solar system"
  },
  {
  word: "proxy",
  hint: "related to server application"
  },
  {
  word: "email",
  hint: "related to exchanging message"
  },
  {
  word: "html",
  hint: "markup language for the web"
  },
  {
  word: "air",
  hint: "related to a gas"
  },
  {
  word: "idea",
  hint: "a thought or suggestion"
  },
  {
  
  word: "server",
  hint: "related to computer or system"
  },
  {
  word: "svg",
  hint: "a vector image format"
  },
  {
  word: "jpeg",
  hint: "a image file format"
  },
  {
  word: "search",
  hint: "act to find something"
  },
  {
  word: "key",
  hint: "small piece of metal"
  },
  {
  word: "egypt",
  hint: "a country name"
  },
  {
  word: "joker",
  hint: "psychological thriller film"
  },
  {
  word: "dubai",
  hint: "developed country name"
  },
  {
  word: "photo",
  hint: "representation of person or scene"
  },
  {
  word: "nile",
  hint: "largest river in the world"
  },
  {
  
  word: "rain",
  hint: "related to a water"
  },
  ];
    
    let word = wordList[Math.floor(Math.random() * wordList.length)];
    let wordArray = word.word.split("");
    let wordDisplay = [];
    let wrongLetter = [];
    let chances = 8;
    let inputGuess = document.getElementById("guess");
    inputGuess.addEventListener('input', function() {
      if(inputGuess.value.length > 1) {
        inputGuess.value  = inputGuess.value.slice(0,1)
      }
    })
    
    for (let i = 0; i < wordArray.length; i++) {
    wordDisplay.push("_");
    }
    
    document.getElementById("word-display").innerHTML = wordDisplay.join(" ");
    document.getElementById("hint").innerHTML = "Hint: " + word.hint;
    
    document.getElementById("submit-button").addEventListener("click", function() {
    let guess = document.getElementById("guess").value;
    let message = document.getElementById("message");
    let wrong = document.getElementById("wrong");

    if (wordArray.indexOf(guess) !== -1) {
        for (let i = 0; i < wordArray.length; i++) {
          if (wordArray[i] === guess) {
            wordDisplay[i] = guess;
          }
        }
        document.getElementById("word-display").innerHTML = wordDisplay.join(" ");
        message.innerHTML = "Correct! Keep going.";
        if (wordDisplay.join("") === word.word) {
          message.innerHTML = "You won! The word was " + word.word + ".";
          document.getElementById("submit-button").disabled = true;
        }
      } else {
        chances--;
        wrongLetter.push(guess)  
        wrong.innerHTML = "Wrong letters: " + wrongLetter;
        message.innerHTML = "Remaining guesses: " + chances;
        if (chances === 0) {
          message.innerHTML = "You lose! The word was " + word.word + ".";
          document.getElementById("submit-button").disabled = true;
        }
      }
      
      });


      function reFunction() {
        location.reload();
      }
  