const reader = require('../readFromTextFile.js');
const data = reader.readTextFile('./dataTwo.txt')
const splitDataInput = data.toString().split('');

let Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function sortNumber(a,b) {
    return b - a;
}

function sliceThings(removePositions, splitDataByLetter){
    removePositions.sort(sortNumber)
    removePositions.forEach(num => {
        splitDataByLetter.splice(num, 1)
    });
}

function findMatches(splitDataByLetter) {
    let removePositions = [];
    let matchedPrevious = false;
    for (let index = 0; index < splitDataByLetter.length-1; index++) {
        let previous = false;
        if(matchedPrevious === true) {
            previous = true;
        }
        matchedPrevious = false;
        const first = splitDataByLetter[index];
        const second = splitDataByLetter[index+1];

        if(first == first.toUpperCase() && !previous) {
            if(second != second.toUpperCase()){
                if(first.toUpperCase() === second.toUpperCase()){
                    removePositions.push(index);
                    removePositions.push(index+1)
                    matchedPrevious = true;
                }
            }
        }
        if(first != first.toUpperCase() && !previous){
            if(second == second.toUpperCase()){
                if(first.toUpperCase() === second.toUpperCase()){
                    removePositions.push(index);
                    removePositions.push(index+1)
                    matchedPrevious = true;
                }
            }
        }
    }
    return removePositions;
}


let values = []
Alphabet.forEach(letter => {
    let regexUpper = new RegExp(letter, 'g')
    let lower = letter.toLowerCase();
    let regexLower = new RegExp(lower, 'g')
    let dontLoopForever = 0
    let splitDataByLetter = data.toString();
    splitDataByLetter = splitDataByLetter.replace(regexUpper, '')
    splitDataByLetter = splitDataByLetter.replace(regexLower, '')
    let splitDataLetter = splitDataByLetter.toString().split('');
    let removePositions = findMatches(splitDataLetter)
    sliceThings(removePositions, splitDataLetter);
    while(removePositions.length > 0) {
        removePositions = findMatches(splitDataLetter)
        sliceThings(removePositions, splitDataLetter);
        dontLoopForever++;
    }
    values.push(splitDataLetter.length)
})

let answer = values.sort(sortNumber)

console.log(answer)