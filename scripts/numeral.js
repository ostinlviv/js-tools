var dollarsDiv = document.querySelector('#dollarsDiv');
var value1 = 1000.567;
var dollars = numeral(1000.567).format('$0,0.00');
dollarsDiv.innerHTML = 'This is numeral format of value ' + value1 + ' into dollars: ' + dollars;

var timeDiv = document.querySelector('#timeDiv');
var value2 = 63846;
var time = numeral(1000.567).format('00:00:00');
timeDiv.innerHTML = 'This is numeral format of value ' + value2 + ' into time: ' + time;