const reader = require('../readFromTextFile.js');
const common = require('./common.js');
const data = reader.readTextFile('./dataOne.txt')
const dataSplitAtSpaces = reader.splitBySpaces(data);
const id = reader.isolateArrayValue(dataSplitAtSpaces, 0)
const lengthIntoSheet = reader.splitAtChar(dataSplitAtSpaces, ',', 2)
const squaresWanted = reader.splitAtChar(dataSplitAtSpaces, 'x', 3)
const lengthIntoSheetDigits = reader.getRidOfAllNonNum(lengthIntoSheet)
const squaresWantedDigits = reader.getRidOfAllNonNum(squaresWanted)

const squaresCount = {};


function findOverlappingSqaures(lengthIntoSheetDigits, squaresWantedDigits, id){
    let xAndYValues = common.calculateSquare(lengthIntoSheetDigits, squaresWantedDigits, id);

    for (var position in xAndYValues){
        common.populateSquares(xAndYValues[position][0], xAndYValues[position][1], squaresCount);
    }
    
    return common.findNumberOfOccurances(squaresCount)
}


console.log('result: ',findOverlappingSqaures(lengthIntoSheetDigits, squaresWantedDigits, id));