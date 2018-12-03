var exports = module.exports = {};

exports.readTextFile = function(file) {
    const fs = require('fs');
    const text = fs.readFileSync(file);
    const textFile = text.toString().split('\n');
    return textFile;
}

exports.convertToInt = function(array) {
    let intArray = [];
    array.forEach(element => {
        intArray.push(parseInt(element, 10));
    });
    return intArray;
}

exports.splitIntoLetters = function(data) {
    let array = [];
    data.forEach(string => {
        let splitString = string.split('');
        array.push(splitString);
    })
    return array;
}

exports.splitBySpaces = function(data) {
    let array = [];
    data.forEach(string => {
        array.push(string.split(' '))
    })
    return array;
}

exports.splitAtChar = function(data, char, position = null) {
    let dataCopy = data.slice();
    let newArray = [];
    if(position ===  null) {
        dataCopy.forEach(string => {
            newArray.push(string.split(char));
        })
    } else {
        dataCopy.forEach(array => {
            newArray.push(array[position].split(char))
        })
    }
    return newArray;
}

exports.getRidOfAllNonNum = function(data) {
    let newArray = [];
    let nestedArray = data[0].constructor === Array
    if(nestedArray){
        data.forEach(element => {
            element.forEach(item => {
                item = item.replace(/\D/g,'');
            })
            newArray.push(exports.convertToInt(element));
        })
    } else {
        data.forEach(element => {
            element.replace(/\D/g,'');
        })
        newArray.push(exports.convertToInte(data))
    }
    console.log(newArray)
    return newArray;
}