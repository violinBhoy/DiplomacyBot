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
    createPlaces(countries, places, ctx);
    countries.get("england").createStart();
    countries.get("france").createStart();
    countries.get("germany").createStart();
    countries.get("italy").createStart();
    countries.get("austria").createStart();
    countries.get("turkey").createStart();
    countries.get("russia").createStart();

    //go to a main loop for animation
    mainLoop();
}

function mainLoop() {
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(image, 0, 0, w, h);
    drawUnits(countries, ctx);

    requestAnimationFrame(mainLoop);
}

function openMoveMenue() {//clear input section, show inputs for country, A/F, placeCurrent, placeDestination, button for make move
    let htmlCountry = '<label for="country">Country:</label><input id="country" type="text" value="">';
    let htmlAF = '<label for="unit">Unit:</label><input id="unit" class="unit" type="text" value="">';
    let htmlPlaceCurrent = '<input id="placeCurrent" type="text" value=""><p>-----></p>';
    let htmlPlaceDestination = '<input id="placeDestination" type="text" value="">';
    let htmlButton = '<button id="makeMove" onclick="move();" class="make">Move</button>';
    document.getElementById("inputs").innerHTML = htmlCountry + htmlAF + htmlPlaceCurrent + htmlPlaceDestination + htmlButton;
}

function openSupportMenue() {//clear input section, show inputs for country, A/F, placeCurrent, A/F support, placeCurrent for support, place Destination, button for make support
    let htmlCountry = '<label for="country">Country:</label><input id="country" type="text" value="">';
    let htmlAF = '<label for="unit">Unit:</label><input id="unit" class="unit" type="text" value="">';
    let htmlPlaceCurrent = '<input id="placeCurrent" type="text" value=""><p></p>';
    let htmlAFSuport =  '<label for="unitToSupport">S</label><input id="unitToSupport" class="unit" type="text" value="">';
    let htmlPlaceCurrentSupport = '<input id="placeCurrentSupport" type="text" value=""><p>-----></p>';
    let htmlPlaceDestination = '<input id="placeDestination" type="text" value="">';
    let htmlButton = '<button id="makeSupport" onclick="support();" class="make">Support</button>';
    document.getElementById("inputs").innerHTML = htmlCountry + htmlAF + htmlPlaceCurrent + htmlAFSuport + htmlPlaceCurrentSupport + htmlPlaceDestination + htmlButton;
}

function openConvoyMenue() {
    let htmlCountry = '<label for="country">Country:</label><input id="country" type="text" value="">';
    let htmlAF = '<label for="unit">Unit:</label><input id="unit" class="unit" type="text" value="">';
    let htmlPlaceCurrent = '<input id="placeCurrent" type="text" value=""><p></p>';
    let htmlAFConvoy = '<label for="unitConvoyed">C</label><input id="unitConvoyed" class="unit" type="text" value="">';
    let htmlConvoyCurrent = '<input id="convoyCurrent" type="text" value=""><p>-----></p>';
    let htmlPlaceDestination = '<input id="placeDestination" type="text" value="">';
    let htmlButton = '<button id="makeConvoy" onclick="convoy();" class="make">Convoy</button>';
    document.getElementById("inputs").innerHTML = htmlCountry + htmlAF + htmlPlaceCurrent + htmlAFConvoy + htmlConvoyCurrent + htmlPlaceDestination + htmlButton;
}

function openBuildMenue() {//clear input section, show inputs for country, A/F, place, button for build it
    let htmlCountry = '<label for="country">Country:</label><input id="country" type="text" value="">';
    let htmlAF = '<label for="unit">Unit:</label><input id="unit" class="unit" type="text" value="">';
    let htmlPlace = '<label for="place">Location:</label><input id="place" type="text" value="">';
    let htmlButton = '<button id="makeBuild" onclick="build();" class="make">Build</button>'; 
    document.getElementById("inputs").innerHTML = htmlCountry + htmlAF + htmlPlace + htmlButton;
}

function openDisbandMenue() {//clear input section, show iniputs for country, A/F, place, button for disband it 
    let htmlCountry = '<label for="country">Country:</label><input id="country" type="text" value="">';
    let htmlAF = '<label for="unit">Unit:</label><input id="unit" class="unit" type="text" value="">';
    let htmlPlace = '<label for="place">Location:</label><input id="place" type="text" value="">';
    let htmlButton = '<button id="makeDisband" onclick="disband();" class="make">Disband</button>'; 
    document.getElementById("inputs").innerHTML = htmlCountry + htmlAF + htmlPlace + htmlButton;
}

function openResignMenue() {//clear input section, show input for country, button for make resignation
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

function build() {
    let country = document.getElementById("country").value.toLowerCase();
    let unit = document.getElementById("unit").value.toLowerCase();
    let place = document.getElementById("place").value.toLowerCase();
    let coast = "";
    if (place.includes("south") || place.includes("north")) {//possibly a coast
        coast = place.substring(0, 6);
        place = place.substring(6);
        if (!places.has(place) && !places.has(coast + place)) {//direction place and place do not exist
            alert(coast + place + " does not exist");//invalid input
            return;
        }
        if (!places.has(coast + place) && places.has(place)) {//direction place does not exist but place does
            //it must be a coast and we cannot build an army there
            if (unit == "a") {
                alert("An army cannot be built at " + coast + place);
                return;
            }
        }
        if (places.has(coast + place) && !places.has(place)) {//direction place exists but place does not
            //it is not a coast, coast and place should not be separate
            place = coast + place;
        }
    }
    else if (!places.has(place)) {
        alert(place + " does not exist");
        return;
    }
    if (!countries.has(country)) {
        alert(country + " does not exist");
        return;
    }
    if (places.get(place).port == false) {
        alert(place + " is not a port");
        return;
    }
    if (places.get(place).home != country) {
        alert(place + " is not a home tile for " + country);
        return;
    }
    if (places.get(place).owner != country) {
        alert(country + " does not own " + place);
        return;
    }
    if (countries.get(country).armyPlaces.includes(place) || countries.get(country).fleetPlaces.includes(place)) {
        alert("There is already a unit at " + place);
        return;
    }
    if (unit == "a") {
        //build it
        countries.get(country).armyPlaces.push(place);
        countries.get(country).armies.push(new Army(places.get(place).x, places.get(place).y, countries.get(country).color));
        //clear inputs
        document.getElementById("country").value = "";
        document.getElementById("unit").value = "";
        document.getElementById("place").value = "";
    }
    else if (unit == "f") {
        //check if it is a coast and it was not specified
        if (places.get(place).coasts.size > 0 && coast.length == 0) {
            alert(place + " must have a coast specified to build a fleet on it");
            return;
        }
        //check if it is landlocked
        if (places.get(place).fleetAdjacent.length == 0 && places.get(place).coasts.size == 0) {
            alert(place + " is landlocked and cannot support a fleet");
            return;
        }
        //build it
        countries.get(country).fleetPlaces.push(place);
        if (coast.length == 0) {
            countries.get(country).fleets.push(new Fleet(places.get(place).x, places.get(place).y, countries.get(country).color));
        }
        else {
            let x = places.get(place).coasts.get(coast + place).x;
            let y = places.get(place).coasts.get(coast + place).y;
            countries.get(country).fleets.push(new Fleet(x, y, countries.get(country).color));
        }
        //clear inputs
        document.getElementById("country").value = "";
        document.getElementById("unit").value = "";
        document.getElementById("place").value = "";
    } else {
        alert("unit type unrecognized");
    }
}

function disband() {
    let country = document.getElementById("country").value.toLowerCase();
    let unit = document.getElementById("unit").value.toLowerCase();
    let place = document.getElementById("place").value.toLowerCase();
    if (!countries.has(country)) {
        alert(country + " does not exist");
        return;
    }
    if (!places.has(place)) {
        alert(place + " does not exist");
        return;
    }
    if (unit == "a") {
        let index = countries.get(country).armyPlaces.indexOf(place);
        if (index > -1) {//if the place has an army from that country there
            countries.get(country).removeArmy(index);
            document.getElementById("country").value = "";
            document.getElementById("unit").value = "";
            document.getElementById("place").value = "";
        }
        else {
            alert("No army from " + country + " is at " + place);
        }
    }
    else if (unit == "f") {
        let index = countries.get(country).fleetPlaces.indexOf(place);
        if (index > -1) {
            countries.get(country).removeFleet(index);
            document.getElementById("country").value = "";//clearing the inputs
            document.getElementById("unit").value = "";
            document.getElementById("place").value = "";
        }
        else {
            alert("No fleet from " + country + " is at " + place);
        }
    }

    else {
        alert("Unit type unrecognized");
    }
}
