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
    
    this.defender;//who is "defending" place
    this.attacker;//who is attacking place
    this.defense = 0;//number for defense points/units
    this.offense = 0;//number for offensive points/units
}

function createPlaces(countries, places) {}