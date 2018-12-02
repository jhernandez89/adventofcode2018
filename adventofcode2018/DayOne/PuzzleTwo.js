const reader = require('../readFromTextFile.js');
const data = reader.readTextFile('./dataTwo.txt')
const intData = reader.convertToInt(data);

let currentNumber = 0;
let repeatingNumbers = [0];
let result = null;
let howMany = 0

function findRepeatingNumber(intData){
    while(result === null){
        howMany = howMany + 1;
        for (let i = 0; i < intData.length; i++) {
            currentNumber += intData[i];
            for (let p = 0; p < repeatingNumbers.length; p++) {
                if(currentNumber == repeatingNumbers[p]){
                    return currentNumber
                }   
            }
            repeatingNumbers.push(currentNumber)
        };
    }
    return result;
}

console.log('result: ', findRepeatingNumber(intData))