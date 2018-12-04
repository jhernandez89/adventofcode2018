const formatter = require('./formatData')
const reader = require('../readFromTextFile.js');
const data = reader.readTextFile('./dataOne.txt')

formatter.formatDataPuzzleOne(data)