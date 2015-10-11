console.log('Hello world!');

var url = 'https://throwawaypoll.herokuapp.com/result';
$.getJSON(url, {question: 'test2'}, function(json, textStatus) {
  console.log('Result', json);
});
