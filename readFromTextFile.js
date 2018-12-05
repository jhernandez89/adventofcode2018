var exports = module.exports = {};

exports.readTextFile = function(file) {
    const fs = require('fs');
    const text = fs.readFileSync(file);
    const textFile = text.toString().split('\n');
    return textFile;
}

exports.convertToInt = function(array) {
    let intArray = [];
    if(array.constructor === Array){
        array.forEach(element => {
            intArray.push(parseInt(element, 10));
        });
        return intArray;
    } else {
        return parseInt(array, 10);
    }
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
                if(/\d/.test(item))
                    item = item.replace(/\D/g,'');
            })
            newArray.push(exports.convertToInt(element));
        })
    } else {
        data.forEach(element => {
            if(/\d/.test(element)) {
                element = element.replace(/\D/g,'');
                newArray.push(exports.convertToInt(element))
            } else {
                newArray.push(element)
            }
        })
    }
    return newArray;
}

exports.isolateArrayValue = function(data, index){
    let newArray = [];
    data.forEach(element => {
        newArray.push(element[index])
    })
    return newArray;
}

exports.removeChar = function(data, char){
    const regex = new RegExp(`${char}`, 'g')
    if (data.constructor === Array) {
        let newArray = [];
        data.forEach(x => newArray.push(x.replace(regex, '')))
        return newArray;
    } else {
        let newItem;
        newArray.push(data.replace(regex, ''))
        return newItem;
    }
}