const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const excludeNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const excludeSymbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]
let firstPassDisplay = document.getElementById("first-generated-pasword")
let secondPassDisplay = document.getElementById("second-generated-pasword")
let includeSymbols = true
let includeNumbers = true
var inputValue = 15

function generatePassword() {
     firstPassDisplay.textContent = randomizeString()
     secondPassDisplay.textContent = randomizeString()
     
}

function randomizeString() {
    let randomizedPass = "";
    let randomCharacter;
    let excludedValues = []
    if(!includeSymbols) {
        excludedValues.push(...excludeSymbols)
    }
    
    if(!includeNumbers) {
        excludedValues.push(...excludeNumbers)
    }
    
    for (let x = 0; x < inputValue; x++) {
        let randomCharacter;

        do {
            randomCharacter = characters[Math.floor(Math.random() * characters.length)];
        } while (excludedValues.includes(randomCharacter));

        randomizedPass += randomCharacter;
    }
    
   
   return randomizedPass;
      
}

function showAppropriatePage() {
    var x = document.getElementById("settings-page-dark");
    var y = document.getElementById("home-page");
  if (x.style.display === "none") {
    y.style.display = "none";
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function changeToggle(firstToggle) {
    if(firstToggle) {
        var x = document.getElementById("toogle-off-button");
        var y = document.getElementById("toogle-on-button");     
    } else {
        var x = document.getElementById("toogle-off-button-2");
        var y = document.getElementById("toogle-on-button-2");    
    }
   
  if (x.style.display === "none") {
    y.style.display = "none";
    x.style.display = "block";
    if(firstToggle) {
        includeSymbols = true
    } else {
        includeNumbers = true
    }
  } else {
    x.style.display = "none";
    y.style.display = "block";
    if(firstToggle) {
        includeSymbols = false
        
    } else {
        includeNumbers = false
    }
  }
}

function saveUserPassAdjustments() {
    var inputElement = document.getElementById("desired-length");
    console.log(inputElement)
    if (inputElement.value != 0 && inputElement.value <= 15) {
        inputValue = inputElement.value;   
    }
}

function showIconReferences() {
       var x = document.getElementById("logo-credit-page");
    var y = document.getElementById("home-page");
    var referencesButton = document.getElementById("logo-references-show-hide");
    
  if (x.style.display === "none") {
    y.style.display = "none";
    x.style.display = "block";
    referencesButton.textContent = "Hide References"
  } else {
    x.style.display = "none";
    y.style.display = "block";
    referencesButton.textContent = "Credits for logos used"
  }
}

function copyPassword() {
    var passwordInput = document.getElementById("first-generated-pasword");
    
    //Tried clipboard through this method but is causing errors
    // navigator.clipboard.writeText(passwordInput.textContent);

      alert("Password copied to clipboard: " + passwordInput.textContent);
}