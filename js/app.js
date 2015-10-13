BASE_URL = 'https://throwawaypoll.herokuapp.com';
QUESTION = 'test42'

function request(path, params, callback) {
  var url = BASE_URL + path;
  $.getJSON(url, params, function(json) {
    callback(json);
  });
}

function getResult() {
  var params = {question: QUESTION};
  request('/result', params, function(json) {
    console.log('Result', json);
    new Chartkick.ColumnChart('chart', json);
  });
}

function submitAnswer(element) {
  var value = $(element).attr('data-value');
  var params = {question: QUESTION, value: value};
  request('/poll', params, function(json) {
    console.log('Response', json);
  });
}
