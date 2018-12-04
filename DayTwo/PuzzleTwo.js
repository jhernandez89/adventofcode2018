const reader = require('../readFromTextFile.js');
const data = reader.readTextFile('./dataTwo.txt')
const splitData = reader.splitIntoLetters(data)

function findSimiliarStrings(splitData){
    let twoValues = []
    for (let i = 0; i < splitData.length; i++) {
        for (let z = 0; z < splitData.length; z++) {
            let numOfMatches = 0
            for (let p = 0; p < splitData[z].length; p++) {
                if(splitData[i][p] != splitData[z][p])
                    numOfMatches++
            }
            if(numOfMatches === 1){
                twoValues[0] = splitData[i];
                twoValues[1] = splitData[z];
                return twoValues
            }
        }
    }
}

function findLetterMatches(splitData){
    let matches = findSimiliarStrings(splitData);
    for (let i = 0; i < matches[0].length; i++) {
        if(matches[0][i] != matches[1][i]){
            matches[0].splice(i, 1);
            matches[1].splice(i, 1);
        }
    }
    return matches[0].join('')
}

console.log('results: ',findLetterMatches(splitData))