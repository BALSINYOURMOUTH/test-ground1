const buttons = document.querySelectorAll ('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add 'active' class to the clicked button
        this.classList.add('active');
    });
});

function home() {
    console.log("home function called");
    document.getElementById("port").innerHTML = " <h1>Hi <span id='1text'>text here</span></h1>"
}

function about() {
    console.log("about function called");
    document.getElementById("port").innerHTML = "<h1>testing <span id='1text'>about</span></h1>"
}

function contact() {
    console.log("contact function called");
    document.getElementById("port").innerHTML =  "<h1>testing <span id='1text'>contacts</span></h1>"
}
