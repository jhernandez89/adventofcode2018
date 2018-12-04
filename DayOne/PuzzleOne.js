const reader = require('../readFromTextFile.js');
const data = reader.readTextFile('./dataOne.txt')
const intData = reader.convertToInt(data)

function resultingFrequency(data){
    let startingNumber = 0
    data.forEach(number => {
        startingNumber += number
    });
    return startingNumber;
}

console.log('result: ',resultingFrequency(intData));