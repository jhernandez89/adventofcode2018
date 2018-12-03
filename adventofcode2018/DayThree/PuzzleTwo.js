const reader = require('../readFromTextFile.js');
const dayOne = require('./PuzzleOne');
const data = reader.readTextFile('./dataOne.txt')
const dataSplitAtSpaces = reader.splitBySpaces(data);
const lengthIntoSheet = reader.splitAtChar(dataSplitAtSpaces, ',', 2)
const squaresWanted = reader.splitAtChar(dataSplitAtSpaces, 'x', 3)
const id = reader.isolateArrayValue(dataSplitAtSpaces, 0)
const lengthIntoSheetDigits = reader.getRidOfAllNonNum(lengthIntoSheet)
const squaresWantedDigits = reader.getRidOfAllNonNum(squaresWanted)

console.log(id)