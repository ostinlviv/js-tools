$('<p>This button will change in 2 seconds</p>').insertAfter($('button.continue'));
setTimeout(function () {
    $( "button.continue" ).html( "Next Step..." );
}, 2000);

