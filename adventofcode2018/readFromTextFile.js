var exports = module.exports = {};

exports.readTextFile = function(file) {
    const fs = require('fs');
    const text = fs.readFileSync(file);
    const textFile = text.toString().split('\n');
    return textFile;
}

exports.convertToInt = function(array) {
    let intArray = []
    array.forEach(element => {
        intArray.push(parseInt(element, 10));
    });
    return intArray;
}