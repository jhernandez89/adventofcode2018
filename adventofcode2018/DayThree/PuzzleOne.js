const reader = require('../readFromTextFile.js');
const data = reader.readTextFile('./dataOne.txt')
const dataSplitAtSpaces = reader.splitBySpaces(data);
const lengthIntoSheet = reader.splitAtChar(dataSplitAtSpaces, ',', 2)
const squaresWanted = reader.splitAtChar(dataSplitAtSpaces, 'x', 3)
const lengthIntoSheetDigits = reader.getRidOfAllNonNum(lengthIntoSheet)
const squaresWantedDigits = reader.getRidOfAllNonNum(squaresWanted)

const squaresCount = {};
let finalCount = 0;

function findNumberOfOccurances(){
    for(let key in squaresCount){
        if(squaresCount[key] > 1)
            finalCount++;
    }
}

function populateSquares(xValues, yValues){
    for (let index = 0; index < xValues.length; index++) {
        const xDirection = xValues[index];
        for (let innerIndex = 0; innerIndex < yValues.length; innerIndex++) {
            const yDirection = yValues[innerIndex];
            if(squaresCount[`${xDirection},${yDirection}`]){
                squaresCount[`${xDirection},${yDirection}`]++;
            } else {
                squaresCount[`${xDirection},${yDirection}`] = 1;
            }
        }
    }
}

function getXAndYValues(intoSheet, sheetsWanted){
    let sheetValues = [];
    for (let index = 0; index < sheetsWanted; index++) {
        sheetValues.push(intoSheet++)
    }
    return sheetValues;
}

function calculateSquare(lengthIntoSheet, squaresWanted){
    for (let index = 0; index < lengthIntoSheet.length; index++) {
        const xValues = getXAndYValues(lengthIntoSheet[index][0], squaresWanted[index][0])
        const yValues = getXAndYValues(lengthIntoSheet[index][1], squaresWanted[index][1])
        populateSquares(xValues, yValues);
    }

    findNumberOfOccurances()

}

calculateSquare(lengthIntoSheetDigits, squaresWantedDigits)
console.log('results: ',finalCount);