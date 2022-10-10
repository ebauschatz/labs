// VARIABLES

// Task 1
let dayOfWeek = "Monday";
console.log(dayOfWeek);

dayOfWeek = "Friday";
console.log(`I can't wait for ${dayOfWeek}!`);


// Task 2
let animalInput = prompt("What is your favorite animal?");
let colorInput = prompt("What is your favorite color?");
let animalColor = colorInput + " " + animalInput;
console.log(`I've never seen a ${animalColor}!`);

// CONDITIONALS

// favorite breakfast: blueberry pancakes
// favorite lunch: spaghetti
// favorite dinner: salmon and broccoli

// Task 1
let timeOfDay = 1400;
let favoriteMealForCurrentTime;
if (timeOfDay < 1200) {
    favoriteMealForCurrentTime = "Blueberry Pancakes";
}
else if (1200 < timeOfDay && timeOfDay < 1700) {
    favoriteMealForCurrentTime = "Spaghetti";
}
else if (timeOfDay > 1700) {
    favoriteMealForCurrentTime = "Salmon and Broccoli";
}
console.log(favoriteMealForCurrentTime);


// Task 2
let randomNumber = Math.floor(Math.random() * 11);
if (randomNumber >= 0 && randomNumber <= 2) {
    console.log("Beatles");
}
else if (randomNumber >= 3 && randomNumber <= 5) {
    console.log("Stones");
}
else if (randomNumber >= 6 && randomNumber <= 8) {
    console.log("Floyd");
}
else if (randomNumber >= 9 && randomNumber <= 10) {
    console.log("Hendrix");
}



// FOR LOOPS

// Task 1
for (let i = 0; i < 7; i++) {
    console.log("Javascript is cool!");
}


// Task 2
let number = 0;
for (let i = 0; i < 11; i++) {
    console.log(number);
    number++;
}


// Task 3
for (let i = 0; i < 5; i++) {
    console.log("hello");
    console.log("goodbye");
}



// FUNCTIONS

// Task 1
function printMovieName() {
    let favoriteMovie = "Kingsman";
    console.log(favoriteMovie)
}

printMovieName();


// Task 2
function getFavoriteBand() {
    let input = prompt("What is your favorite band?");
    return input;
}

let userBand = getFavoriteBand();
console.log(userBand);


// Task 3
function concertDisplay(musicalAct) {
    let myStreet = prompt("What street do you live on?");
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`);
}

concertDisplay(userBand);



// ARRAYS

// Task 1
let desktopItems = ["dice", "cat", "cookie"];
console.log(desktopItems[1]);
desktopItems.push("Infinity Gauntlet");
for (let item of desktopItems) {
    console.log(item);
}



// BOSS FIGHT
let magicNumber = Math.floor(Math.random() * 101);;
let guess = 0;
while (magicNumber !== guess) {
    let input = prompt("Guess a number!");
    let inputInt = parseInt(input);

    if (inputInt < magicNumber) {
        console.log("Too low!");
    }
    else if (inputInt > magicNumber) {
        console.log("Too high!");
    }
    else {
        console.log(`Congratulations! The magic number is ${magicNumber}!`);
        break;
    }

    if (Math.abs(magicNumber - inputInt) <= 10) {
        console.log("Getting warmer!");
    }
}