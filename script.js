
// URLS & Global Variables
let baseURL = "https://www.dnd5eapi.co/api/";
let alignmentURL = baseURL + "alignments";
let classURL = baseURL + "classes";
let raceURL = baseURL + "races";
let classImg = document.querySelector("img");
classImg.style.display = "none";

// Page Display
// Display Race Name
const displayRace = (randomRace) => {
    console.log(randomRace);
    document.getElementById("race").innerText = "Race: " +randomRace;
};

// Display Class Name, Class Icon, Class Color
const displayClass = (randomClass) => {
    console.log(randomClass);
    document.getElementById("class").innerText = "Class: " + randomClass;
    classImg.style.display = "block";
    if(randomClass === "Barbarian") {
        classImg.src = "./assets/Barbarian.svg"
        classImg.style.backgroundColor = "rgb(195, 96, 72)"
    } else if(randomClass === "Bard") {
        classImg.src = "./assets/Bard.svg"
        classImg.style.backgroundColor = "rgb(161, 121, 161)"
    } else if(randomClass === "Cleric") {
        classImg.src = "./assets/Cleric.svg"
        classImg.style.backgroundColor = "rgb(121, 123, 124)"
    } else if(randomClass === "Druid") {
        classImg.src = "./assets/Druid.svg"
        classImg.style.backgroundColor = "rgb(120, 133, 65)"
    } else if(randomClass === "Fighter") {
        classImg.src = "./assets/Fighter.svg"
        classImg.style.backgroundColor = "rgb(77, 48, 38)"
    } else if(randomClass === "Monk") {
        classImg.src = "./assets/Monk.svg"
        classImg.style.backgroundColor = "rgb(91, 165, 195)"
    } else if(randomClass === "Paladin") {
        classImg.src = "./assets/Paladin.svg"
        classImg.style.backgroundColor = "rgb(163, 137, 67)"
    } else if(randomClass === "Ranger") {
        classImg.src = "./assets/Ranger.svg"
        classImg.style.backgroundColor = "rgb(58, 105, 73)"
    } else if(randomClass === "Rogue") {
        classImg.src = "./assets/Rogue.svg"
        classImg.style.backgroundColor = "rgb(61, 63, 67)"
    } else if(randomClass === "Sorcerer") {
        classImg.src = "./assets/Sorcerer.svg"
        classImg.style.backgroundColor = "rgb(180, 62, 72)"
    } else if(randomClass === "Warlock") {
        classImg.src = "./assets/Warlock.svg"
        classImg.style.backgroundColor = "rgb(108, 57, 163)"
    } else if(randomClass === "Wizard") {
        classImg.src = "./assets/Wizard.svg"
        classImg.style.backgroundColor = "rgb(50, 90, 176)"
    } else {
        classImg.style.display = "none";
    }
};

// Display Alignment Name
const displayAlignment = (randomAlignment) => {
    console.log(randomAlignment);
    document.getElementById("alignment").innerText = "Alignment: " + randomAlignment;
};

// Event Listener
document.getElementById("button").addEventListener("click", buttonClick);

function buttonClick() {
    getAllTheThings();
};

// API Fetch x3 - from different API URLs
// Function Wrapper to pass to the Button Click
function getAllTheThings() {
    // Fetch & Randomize the Race Data
    fetch(raceURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(raceJson) {
            let randomRace = raceJson.results[Math.floor(Math.random()*raceJson.results.length)].name;
            displayRace(randomRace);
        })
        .catch(function(err) {
            console.log(err);
        });

    // Fetch & Randomize the Class Data
    fetch(classURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(classJson) {
            let randomClass = classJson.results[Math.floor(Math.random()*classJson.results.length)].name;
            displayClass(randomClass);
        })
        .catch(function(err) {
            console.log(err);
        });

    // Fetch & Randomize the Alignment Data
    fetch(alignmentURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(alignmentJson) {
            let randomAlignment = alignmentJson.results[Math.floor(Math.random()*alignmentJson.results.length)].name;
            displayAlignment(randomAlignment);
        })
        .catch(function(err) {
            console.log(err);
        });
}
