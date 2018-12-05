const reader = require('../readFromTextFile.js');
const data = reader.readTextFile('./dataOne.txt')
const splitData = data.toString().split('');

function sortNumber(a,b) {
    return b - a;
}

function sliceThings(removePositions){
    removePositions.sort(sortNumber)
    removePositions.forEach(num => {
        splitData.splice(num, 1)
    });
}

function findMatches() {
    let removePositions = [];
    let matchedPrevious = false;
    for (let index = 0; index < splitData.length-1; index++) {
        let previous = false;
        if(matchedPrevious === true) {
            previous = true;
        }
        matchedPrevious = false;
        const first = splitData[index];
        const second = splitData[index+1];

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
    console.log(splitData)
    console.log('rm:',removePositions)
    return removePositions;
}


let removePositions = findMatches()
sliceThings(removePositions);
while(removePositions.length > 0) {
    removePositions = findMatches()
    sliceThings(removePositions);
}
console.log(splitData.length)