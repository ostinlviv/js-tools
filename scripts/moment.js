var day = document.querySelector('#day');
day.innerHTML = 'Today is ' + moment().format('dddd');

var div = document.querySelector('#moment');

window.setInterval(function(){
    div.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000).bind();