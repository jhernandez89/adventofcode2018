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
let xAndYValues

function findAllOverlappingSquares(){
    let overlappingSquares = {}
    for(let key in squaresCount){
        if(squaresCount[key] > 1)
            overlappingSquares[key] = squaresCount[key]
    }
    return overlappingSquares
}

function findUniqueSquare(overlappingSquares){
    let key = null
    for(let xyKey in xAndYValues){
        let overlap = false;
        let value = xAndYValues[xyKey]
        value[0].forEach(x => {
            value[1].forEach(y => {
                if(overlappingSquares[`${x},${y}`] != undefined)
                    overlap = true;
            })
        });
        if(overlap === false) {
            return xyKey
        }
    }
    return -1;
}

function findOverlappingSqaures(lengthIntoSheetDigits, squaresWantedDigits, id){
    xAndYValues = common.calculateSquare(lengthIntoSheetDigits, squaresWantedDigits, id);

    for (var position in xAndYValues){
        common.populateSquares(xAndYValues[position][0], xAndYValues[position][1], squaresCount);
    }
}


function findSqaureNotOverlapping(lengthIntoSheetDigits, squaresWantedDigits, id){
    findOverlappingSqaures(lengthIntoSheetDigits, squaresWantedDigits, id);
}


findSqaureNotOverlapping(lengthIntoSheetDigits, squaresWantedDigits, id);
let overlappingSquares = findAllOverlappingSquares()
console.log('result: ', findUniqueSquare(overlappingSquares))
