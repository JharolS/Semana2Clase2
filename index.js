// map()

let fishs = ['angel', 'clown', 'trumpet', 'sturgeon'];

// Print out each item in the array

let printFish = fishs.map((fish) => {
    return `${fish}s`
});

console.log(printFish);

// filter ()

let seaCreatures = ['whale', 'octopus', 'squid', 'starfish', 'shark', 'fish', 'cuttlefish']

// filter all creatures that star with 's' into new list

let filterSeaCreatures = seaCreatures.filter((creatures) => {
    return creatures[0] === 's';
});

console.log(filterSeaCreatures)

//reduce

let numbers = [12, 55, 3, 45, 5];

let sum = numbers.reduce((acc, curr) => {
    return acc + curr;
});

console.log(sum);

// find()

// check if a given is a cephalod

const isCephalod = (creatures) => {
    return ['octopus', 'cuttlefish'].includes(creatures);
}

// seaCreatures.find(isCephalod)

console.log(seaCreatures.find(isCephalod))

// findIndex

console.log(seaCreatures.findIndex(isCephalod))

// conditional statements

const balance = 600;
const shoes = 80;

if (shoes <= balance) {
    console.log('you have enogh money to purchase the item')
} else {
    console.log('you do not have enogh money to purchase the item')
}

let grade =87;

//check if the grade is an A, B, C, D, or F

if (grade >= 90) {
    console.log('A')
} else if(grade >= 80) {
    console.log ('B')
} else if(grade >= 70) {
    console.log ('C')
} else if(grade >= 60) {
    console.log ('D')
} else {
    console.log('F')
}

//ternary operator

//(condition) ? expression on true : expression false

let age = 20;

const oldEnough = (age>=18) ? 'You may enter' : 'You may no enter';

console.log(oldEnough)

const promptForGuess = () => {
    const guess = prompt('How many teeth do alligators have?');
    if(guess <= 0) {
        alert(`It's definitely above zero!`);
        promptForGuess();
    } else if(guess >= 1 && guess <=39) {
        alert(`Quite a bit higher than that!`)
        promptForGuess();
    } else if(guess >= 40 && guess <= 73) {
        alert(`Getting closer. It's a little higher`)
        promptForGuess();
    } else if(guess >= teeth && guess <= 80){
        alert(`Yup. that sounds about right`);
    } else {
        alert(`Too many. Try lower than that`);
        promptForGuess();
    }
};

// promptForGuess();

// switch statements
const day = new Date().getDay();
console.log(day)
switch(day) {
    case 0:
        console.log('Sunady')
    break
    case 1:
        console.log('Lunes')
    break
    case 2:
        console.log('Martes')
    break
    case 3:
        console.log('Miercoles')
    break
    case 4:
        console.log('Thursday')
    break
    case 5:
        console.log('Viernes')
    break
    case 6:
        console.log('Sabado')
    break
    default:
        console.log('Something went horribly wrong...')
    break
}

switch(true) {
    case grade >=90:
        console.log('A')
    break;
    case grade >=80:
        console.log('B')
    break
    case grade >=70:
        console.log('C')
    break
    case grade >=60:
        console.log('D')
    break
    default:
        console.log('F')
}