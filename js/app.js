console.log('Hello world!');

var url = 'https://throwawaypoll.herokuapp.com/result';
$.getJSON(url, {question: 'test2'}, function(json, textStatus) {
  console.log('Result', json);
});

var url = 'https://throwawaypoll.herokuapp.com/poll';
$.getJSON(url, {question: 'test2', value: 'answer1'}, function(json, textStatus) {
  console.log('Repsonse', json);
});
