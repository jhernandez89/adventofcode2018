const reader = require('../readFromTextFile.js');
const data = reader.readTextFile('./dataOne.txt')

let occursTwoTimes = 0;
let occursThreeTimes = 0;

function itterateOccurances(letterOccurance){
    let twoCompleted = false;
    let threeCompleted = false;
    for (let i in letterOccurance){
        if(letterOccurance[i] === 2 && !twoCompleted){
            occursTwoTimes++;
            twoCompleted = true;
        }
        if(letterOccurance[i] === 3 && !threeCompleted){
            occursThreeTimes++;
            threeCompleted = true;
        }
    }
}

function countLetters(data){
    data.forEach(string => {
        const letterOccurance = {}
        string.split('')
        for (let i = 0; i < string.length; i++){
            if(letterOccurance[string[i]])
                letterOccurance[string[i]]++
            else
                letterOccurance[string[i]] = 1
        }
        itterateOccurances(letterOccurance)
    });
}

countLetters(data)
console.log('results: ', occursTwoTimes * occursThreeTimes)