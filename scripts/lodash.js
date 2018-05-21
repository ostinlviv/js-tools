var tmpl = document.getElementById('menu-template').innerHTML.trim();

var html = _.template(tmpl)({
    title: "Cars",
    items: [
        "Audi",
        "BMW",
        "Volvo"
    ]
});


tmpl = _.template(tmpl);


document.getElementById('menu-holder').innerHTML = html;