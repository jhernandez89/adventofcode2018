const reader = require('../readFromTextFile.js');
formatter = module.exports = {}

formatter.formatDataPuzzleOne = function(data){
    let dataSplitRight = reader.splitAtChar(data, ']');
    let dates = []
    dates.push(dataSplitRight.map(x => x[0]))
    let datesFormatted = reader.removeChar(dates[0], '\\[')
    dataSplitRight = dataSplitRight.map(element => element[1].trim())
    let gaurdNumberAndEvents = reader.getRidOfAllNonNum(dataSplitRight)
    let timesArray = [0];
    for (let index = 0; index < datesFormatted.length; index++) {
        const time = datesFormatted[index];
        const eventsAndGaurds = gaurdNumberAndEvents[index];
        timesArray[index] = [time, eventsAndGaurds]
        
    }
    return timesArray
}