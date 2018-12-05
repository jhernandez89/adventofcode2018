let moment = require('../moment.js')
const formatter = require('./formatData')
const reader = require('../readFromTextFile.js');
const data = reader.readTextFile('./dataTwo.txt')

let formattedData = formatter.formatDataPuzzleOne(data)

function findMostSlept(sleepiestMinute){
    let mostMinuteSlept = 0;
    let mostMinuteKey;
    for(let key in sleepiestMinute){
        if(sleepiestMinute[key] > mostMinuteSlept) {
            mostMinuteSlept = sleepiestMinute[key]
            mostMinuteKey = key;
        }
    }
    return [sleepiestMinute[mostMinuteKey], mostMinuteKey]
}

function findSleepiestMinute(sleepiestMinute){
    const dateOccurances = {};
    sleepiestMinute.forEach(dates => {
        let wakeUp = moment(dates[1], 'HH:mm')
        let fallAsleep = moment(dates[0], "HH:mm")
        let difference = moment.duration(wakeUp.diff(fallAsleep))
        let minutes = difference.asMinutes()
        for (let index = 0; index < minutes; index++) {
            if(dateOccurances[fallAsleep]){
                dateOccurances[fallAsleep]++;
            } else {
                dateOccurances[fallAsleep] = 1;
            }
            fallAsleep = moment(fallAsleep).add(1, 'minutes')
        }
    })
    return dateOccurances;
}

function findSleepiestGaurd(gaurdTimes) {
    let sleepiestGaurd = 0;
    let gaurdKey;
    for (let key in gaurdTimes){
        let timeSlept = 0;
        gaurdTimes[key].forEach(date => {
            let goToSleep = new Date(date[0])
            let wakeUp = new Date(date[1])
            var dif = goToSleep.getTime() - wakeUp.getTime();
            var Seconds_from_T1_to_T2 = dif / 1000;
            timeSlept += Math.abs(Seconds_from_T1_to_T2);
        });
        if (timeSlept > sleepiestGaurd) {
            sleepiestGaurd = timeSlept;
            gaurdKey = key;
        }
    }
    return gaurdKey;
}

function getGaurdTimes(ordered){
    let fallAsleepTime;
    let wakeUpTime;
    let currentGaurd;
    const gaurdSleepTimes = {};
    for (let index = 0; index < ordered.length; index++) {
        const element = ordered[index];
        if(element[1] === 'falls asleep'){
            fallAsleepTime = element[0]
        } else if(element[1] === 'wakes up') {
            wakeUpTime = element[0]
            if(!gaurdSleepTimes[currentGaurd]){
                gaurdSleepTimes[currentGaurd] = [[fallAsleepTime,wakeUpTime]];
            } else {
                gaurdSleepTimes[currentGaurd].push([fallAsleepTime, wakeUpTime]);
            }
        } else {
            currentGaurd = element[1]
        }
    }
    return gaurdSleepTimes
}

function orderByDates(formattedData)   {
    formattedData.sort((a, b) => {
        return new Date(a[0]) - new Date(b[0]);
    })
    return formattedData
}

let ordered = orderByDates(formattedData);
let gaurdTimes = getGaurdTimes(ordered);
let mostMinuteArray = []
for(let key in gaurdTimes){
    let sleepiestMinute = findSleepiestMinute(gaurdTimes[key])
    let mostSlept = findMostSlept(sleepiestMinute)
    mostMinuteArray.push([mostSlept, key]);
}

console.log('results: ',mostMinuteArray)
