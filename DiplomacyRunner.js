





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
}

function openDisbandMenue() {//clear input section, show iniputs for country, A/F, place, button for disband it 
    console.log("disband");
}

function openResignMenue() {//clear input section, show input for country, button for make resignation
    console.log("resign");
}