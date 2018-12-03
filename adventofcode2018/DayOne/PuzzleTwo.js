const reader = require('../readFromTextFile.js');
const data = reader.readTextFile('./dataTwo.txt')
const intData = reader.convertToInt(data);

let currentNumber = 0;
let repeatingNumbers = [0];
let result = null;
let howMany = 0
var startTime, endTime;

function start() {
    startTime = new Date();
  };
  
  function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
  
    // get seconds 
    var seconds = Math.round(timeDiff);
    console.log(seconds + " seconds");
  }

function findRepeatingNumber(intData){
    start()
    while(result === null){
        for (let i = 0; i < intData.length; i++) {
            currentNumber += intData[i];
            for (let p = 0; p < repeatingNumbers.length; p++) {
                if(currentNumber == repeatingNumbers[p]){
                    end()
                    return currentNumber
                }   
            }
            repeatingNumbers.push(currentNumber)
        };
    }
    return result;
}

console.log('result: ', findRepeatingNumber(intData))
