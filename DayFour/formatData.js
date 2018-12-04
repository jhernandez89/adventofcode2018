const reader = require('../readFromTextFile.js');
formatter = module.exports = {}

formatter.formatDataPuzzleOne = function(data){
    const dataSplitRight = reader.splitAtChar(data, ']');
    let dates = []
    dataSplitRight.forEach(element => {
        dates.push(element[0])
    })
    const datesSplitLeft = reader.splitAtChar(dates, '[');
    const splitEvent = reader.splitBySpaces(dataSplitRight[1])
    console.log(splitEvent)
    let formattedData = [];
    for (let index = 0; index < datesSplitLeft.length; index++) {
        const date = datesSplitLeft[index][1];
        // const event = dateSplitRight[index][1]
        // formattedData.push(date, reader.splitBySpaces(event))
    }

    // const dataSplitLeft = reader.splitAtChar(dataSplitRight, '[')
    function combineDateAndTime(dataSplit){

    }
}