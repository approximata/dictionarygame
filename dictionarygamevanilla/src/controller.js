'use strict';
var controll = (function(){

  var inputField = document.querySelector('.input');

  function checkTheWord() {
    return gameLogic.scoreFeedbacker(service.dictionary, inputField.value, service.highScoreStore);
  };

  function listResultToDom() {
    domManager.fillContent(checkTheWord())
  };

  function listHighScore() {
    console.log(Object.keys(localStorage.ize));
    domManager.addHtml(gameLogic.validValue);
  };

  function listDicToDom() {
    domManager.showDictionary(JSON.stringify(service.dictionary));
  };

  return {
    listDicToDom: listDicToDom,
    listResultToDom: listResultToDom,
    listHighScore: listHighScore,
  }
})();
