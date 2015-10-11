console.log('Hello world!');

function getResult() {
  var url = 'https://throwawaypoll.herokuapp.com/result';
  $.getJSON(url, {question: 'test2'}, function(json, textStatus) {
    console.log('Result', json);
  });
}

function submitAnswer(element) {
  var $el = $(element);
  var url = 'https://throwawaypoll.herokuapp.com/poll';
  var value = $el.attr('data-value');
  $.getJSON(url, {question: 'test2', value: value}, function(json, textStatus) {
    console.log('Repsonse', json);
  });
}
