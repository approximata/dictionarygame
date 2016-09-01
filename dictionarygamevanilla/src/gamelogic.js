'use strict';

var gameLogic = (function() {

  let validValue = {};

  function filterData(data, input){
    return data.some(function(element){
      return input === element.word;
    })
  }

  function uniqueLetterCounter(input){
    var arr = input.split('').sort();
    var count = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== arr[i+1]){
        count ++
      }
    }
    return count;
  }

  function uniqueWordChecker(scoreList, input){
    return scoreList.some(function(element){
      var parseElement = JSON.parse(element);
      return parseElement.word === input;
    })
  }

  function scoreFeedbacker(data, input, scoreList) {


    if (filterData(data, input) && !uniqueWordChecker(scoreList, input)){
      validValue.word = input;
      validValue.score = uniqueLetterCounter(input);
      service.scoreSaver(validValue);
      return 'word: ' + validValue.word + ' score: ' + validValue.score;
    }
    return 'Bad word! Please give me an other one!';
  }

  return {
    scoreFeedbacker: scoreFeedbacker,
    validValue: validValue,
  }
})();
