var exports = module.exports = {};


exports.findNumberOfOccurances = function(squaresCount){
    let finalCount = 0;
    for(let key in squaresCount){
        if(squaresCount[key] > 1)
            finalCount++;
    }
    return finalCount;
}

exports.populateSquares = function(xValues, yValues, squareCount){
    for (let index = 0; index < xValues.length; index++) {
        const xDirection = xValues[index];
        for (let innerIndex = 0; innerIndex < yValues.length; innerIndex++) {
            const yDirection = yValues[innerIndex];
            if(squareCount[`${xDirection},${yDirection}`]){
                squareCount[`${xDirection},${yDirection}`]++;
            } else {
                squareCount[`${xDirection},${yDirection}`] = 1;
            }
        }
    }
}

exports.getXAndYValues = function(intoSheet, sheetsWanted){
    let sheetValues = [];
    for (let index = 0; index < sheetsWanted; index++) {
        sheetValues.push(intoSheet++)
    }
    return sheetValues;
}

exports.calculateSquare = function(lengthIntoSheet, squaresWanted, id){
    const positions = {};
    for (let index = 0; index < lengthIntoSheet.length; index++) {
        positions[id[index]] = [(exports.getXAndYValues(lengthIntoSheet[index][0], squaresWanted[index][0])), (exports.getXAndYValues(lengthIntoSheet[index][1], squaresWanted[index][1]))]
    }
    return positions;
}
