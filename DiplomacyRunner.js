let countries = new Map();//contain the countries
let places = new Map();//contain the places
let canvas;
let ctx;
let w, h;
let image;

window.onload = function init() {
    //set up canvas for drawing
    canvas = document.getElementById("myCanvas");
    w = canvas.width;
    h = canvas.height;
    ctx = canvas.getContext('2d');
    image = document.getElementById("map");

    //set up countries
    countries.set("england", new Country("england", "darkblue", 1, 2));
    countries.set("france", new Country("france", "lightblue", 2, 1));
    countries.set("germany", new Country("germany", "black", 2, 1));
    countries.set("italy", new Country("italy", "green", 2, 1));
    countries.set("austria", new Country("austria", "red", 2, 1));
    countries.set("turkey", new Country("turkey", "yellow", 2, 1));
    countries.set("russia", new Country("russia", "gray", 2, 2));
    //placeholder country for when something is not owned by a real country - for algorithm purposes only
    countries.set("placeholder", new Country("placeholder", "none", 0, 0));

    //set up places
    ctx.drawImage(image, 0, 0, w, h);//for debugging purposes
    createPlaces(countries, places, ctx);//ctx is an argument for debugging purposes
    countries.get("england").createStart();
    countries.get("france").createStart();
    countries.get("germany").createStart();
    countries.get("italy").createStart();
    countries.get("austria").createStart();
    countries.get("turkey").createStart();
    countries.get("russia").createStart();

    //go to a main loop for animation
    //mainLoop(); commented out for debugging purposes
}

function mainLoop() {
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(image, 0, 0, w, h);

    requestAnimationFrame(mainLoop);
}

function openMoveMenue() {//clear input section, show inputs for country, A/F, placeCurrent, placeDestination, button for make move
    console.log("move");
    let htmlCountry = '<label for="country">Country:</label><input id="country" type="text" value="">';
    let htmlAF = '<label for="unit">Unit:</label><input id="unit" class="unit" type="text" value="">';
    let htmlPlaceCurrent = '<input id="placeCurrent" type="text" value=""><p>-----></p>';
    let htmlPlaceDestination = '<input id="placeDestination" type="text" value="">';
    let htmlButton = '<button id="makeMove" onclick="move();" class="make">Move</button>';
    document.getElementById("inputs").innerHTML = htmlCountry + htmlAF + htmlPlaceCurrent + htmlPlaceDestination + htmlButton;
}

function openSupportMenue() {//clear input section, show inputs for country, A/F, placeCurrent, A/F support, placeCurrent for support, place Destination, button for make support
    console.log("support");
    let htmlCountry = '<label for="country">Country:</label><input id="country" type="text" value="">';
    let htmlAF = '<label for="unit">Unit:</label><input id="unit" class="unit" type="text" value="">';
    let htmlPlaceCurrent = '<input id="placeCurrent" type="text" value=""><p></p>';
    let htmlAFSuport =  '<label for="unitToSupport">S</label><input id="unitToSupport" class="unit" type="text" value="">';
    let htmlPlaceCurrentSupport = '<input id="placeCurrentSupport" type="text" value=""><p>-----></p>';
    let htmlPlaceDestination = '<input id="placeDestination" type="text" value="">';
    let htmlButton = '<button id="makeSupport" onclick="support();" class="make">Support</button>';
    document.getElementById("inputs").innerHTML = htmlCountry + htmlAF + htmlPlaceCurrent + htmlAFSuport + htmlPlaceCurrentSupport + htmlPlaceDestination + htmlButton;
}

function openBuildMenue() {//clear input section, show inputs for country, A/F, place, button for build it
    console.log("build");
    let htmlCountry = '<label for="country">Country:</label><input id="country" type="text" value="">';
    let htmlAF = '<label for="unit">Unit:</label><input id="unit" class="unit" type="text" value="">';
    let htmlPlace = '<label for="place">Location:</label><input id="place" type="text" value="">';
    let htmlButton = '<button id="makeBuild" onclick="build();" class="make">Build</button>'; 
    document.getElementById("inputs").innerHTML = htmlCountry + htmlAF + htmlPlace + htmlButton;
}

function openDisbandMenue() {//clear input section, show iniputs for country, A/F, place, button for disband it 
    console.log("disband");
    let htmlCountry = '<label for="country">Country:</label><input id="country" type="text" value="">';
    let htmlAF = '<label for="unit">Unit:</label><input id="unit" class="unit" type="text" value="">';
    let htmlPlace = '<label for="place">Location:</label><input id="place" type="text" value="">';
    let htmlButton = '<button id="makeDisband" onclick="disband();" class="make">Disband</button>'; 
    document.getElementById("inputs").innerHTML = htmlCountry + htmlAF + htmlPlace + htmlButton;
}

function openResignMenue() {//clear input section, show input for country, button for make resignation
    console.log("resign");
    let htmlCountry = '<label for="country">Country:</label><input id="country" type="text" value="">';
    let htmlButton = '<button id="makeDisband" onclick="resign();" class="make">Resign</button>';
    document.getElementById("inputs").innerHTML = htmlCountry + htmlButton;
}

function openRetreatMenue() {
    let htmlCountry = '<label for="country">Country:</label><input id="country" type="text" value="">';
    let htmlAF = '<label for="unit">Unit:</label><input id="unit" class="unit" type="text" value="">';
    let htmlPlaceCurrent = '<input id="placeCurrent" type="text" value=""><p>-----></p>';
    let htmlPlaceDestination = '<input id="placeDestination" type="text" value="">';
    let htmlButton = '<button id="makeMove" onclick="retreat();" class="make">Retreat</button>';
    document.getElementById("inputs").innerHTML = htmlCountry + htmlAF + htmlPlaceCurrent + htmlPlaceDestination + htmlButton; 
}