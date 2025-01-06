//A class along with methods for a place
//variables include attack1, attack2, and defense to put a numerical value to the protection/attack
//that a player has on the place
//coasts are their own places ex: north coast of spain is its own place
//name for coasts will be "'cardinal direction'C place"
function Place(name, x, y, type, port, owner) {
    this.name = name;
    this.x = x;//places on map
    this.y = y;
    this.type = type;//water, coast, land
    this.port = port;//boolean for if it is a port
    this.owner = owner;//shows who owns the port(if it is a port)
    this.adjacent;
    
    this.defender;//who is "defending" place
    this.attacker;//who is attacking place
    this.defense = 0;//number for defense points/units
    this.offense = 0;//number for offensive points/units

    this.setAdjacent = function(adjacents) {
        for (let i = 0; i < adjacents.length; i++) {
            adjacent[i] = adjacents[i];
        }
    }
}

function createPlaces(countries, places, ctx) {
    //for debugging purposes: finding exact locations
    let fleet = new Fleet(50, 600, "blue");
    fleet.draw(ctx);

    //water places first
    places[0] = new Place("north atlantic", 100, 300, "water", false, "na");
    places[1] = new Place("norwegian sea", 450, 125, "water", false, "na");
    places[2] = new Place("barents sea", 825, 30, "water", false, "na");
    places[3] = new Place("north sea", 400, 350, "water", false, "na");
    places[4] = new Place("skagerrak", 500, 360, "water", false, "na");
    places[5] = new Place("helgoland bight", 440, 440, "water", false, "na");
    places[6] = new Place("baltic sea", 600, 430, "water", false, "na");
    places[7] = new Place("gulf of bothnia", 650, 330, "water", false, "na");
    places[8] = new Place("irish sea", 200, 480, "water", false, "na");
    places[9] = new Place("english channel", 270, 520, "water", false, "na");
    places[10] = new Place("mid atlantic", 50, 600, "water", false, "na");
    
    //coasts next

    //land last

    //add what each place a place is adjacent to
}