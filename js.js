const buttons = document.querySelectorAll('.btn');
const port = document.getElementById("port");

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Toggle 'active' class on the clicked button
        buttons.forEach(btn => btn.classList.toggle('active', btn === this));
    });
});

function updatePortContent(content) {
    port.innerHTML = content;
}

function home() {
    console.log("home function called");
    updatePortContent("<h1>Hi <span id='1text'>text here</span></h1>");
}

function about() {
    console.log("about function called");
    updatePortContent("<h1>testing <span id='1text'>about</span></h1>");
}

function contact() {
    console.log("contact function called");
    updatePortContent("<h1>testing <span id='1text'>contacts</span></h1>");
}

function photo() {
    console.log("photo function called");
    updatePortContent("testing photo");
}

function logo() {
    console.log("logo function called");
    updatePortContent(`
        <h1>Hi <span id="1text">text here</span></h1>
        <div id="homepage">
            <div class="hpimgcon"><div class="imgt">Photos</div><img class="homepageimg" onclick="photo()" src="./images/IMG-20240105-WA0033.jpg" alt="img1"></div>
            <div class="hpimgcon"><div class="imgt">About</div><img class="homepageimg" onclick="about()" src="./images/IMG-20240105-WA0035.jpg" alt="img2"></div>
            <div class="hpimgcon"><div class="imgt">contact</div><img class="homepageimg" onclick="contact()" src="./images/IMG-20240104-WA0097.jpg" alt="img3"></div>
        </div>
    `);
}
