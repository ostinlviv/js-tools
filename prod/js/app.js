const b = 3;
const a = 2;

$("<p>This button will change in 2 seconds</p>").insertAfter($("button.continue")),setTimeout(function(){$("button.continue").html("Next Step...")},2e3);
var b=3;
var a=2;
var tmpl=document.getElementById("menu-template").innerHTML.trim(),html=_.template(tmpl)({title:"Cars",items:["Audi","BMW","Volvo"]});tmpl=_.template(tmpl),document.getElementById("menu-holder").innerHTML=html;
var day=document.querySelector("#day");day.innerHTML="Today is "+moment().format("dddd");var div=document.querySelector("#moment");window.setInterval(function(){div.innerHTML=moment().format("MMMM Do YYYY, h:mm:ss a")},1e3).bind();
var dollarsDiv=document.querySelector("#dollarsDiv"),value1=1000.567,dollars=numeral(1000.567).format("$0,0.00");dollarsDiv.innerHTML="This is numeral format of value "+value1+" into dollars: "+dollars;var timeDiv=document.querySelector("#timeDiv"),value2=63846,time=numeral(1000.567).format("00:00:00");timeDiv.innerHTML="This is numeral format of value "+value2+" into time: "+time;