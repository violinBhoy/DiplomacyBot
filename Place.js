//A class along with methods for a place
//variables include attack1, attack2, and defense to put a numerical value to the protection/attack
//that a player has on the place
//coasts are their own places ex: north coast of spain is its own place
//name for coasts will be "'cardinal direction'C place"
class Place {
    constuctor(name, x, y, type) {
        this.name = name;
        this.x = x;//places on map
        this.y = y;
        this.type = type;//water, coast, land
        this.adjacent;
        this.port = false;//to deal with places array
    
        this.defender;//who is "defending" place
        this.attacker;//who is attacking place
        this.defense = 0;//number for defense points/units
        this.offense = 0;//number for offensive points/units
    }

    setAdjacent(adjacents) {
        for (let i = 0; i < adjacents.length; i++) {
            this.adjacent[i] = adjacents[i];
        }
    }

    isPort() {
        return this.port;
    }

    addCoast(index, side, x, y) {
        this.coasts[index] = new Place(side + " " + this.name, x, y, "coast");
    }
}

class Port extends Place {
    //a circle specifies who owns the port
    constructor(name, x, y, type, portX, portY) {
        super(name, x, y, type);
        this.portX = portX;//where to put the circle
        this.portY = portY;
        this.owner;
        this.port = true;
    }

    setOwner(country) {
        this.owner = country;
    }
}

function createPlaces(countries, places, ctx) {
    //for debugging purposes: finding exact locations
    let army = new Army(200, 690, "blue");
    army.draw(ctx);

    //water places first
    places[0] = new Place("north atlantic", 100, 300, "water");
    places[1] = new Place("norwegian sea", 450, 125, "water");
    places[2] = new Place("barents sea", 825, 30, "water");
    places[3] = new Place("north sea", 400, 350, "water");
    places[4] = new Place("skagerrak", 500, 360, "water");
    places[5] = new Place("helgoland bight", 440, 440, "water");
    places[6] = new Place("baltic sea", 600, 430, "water");
    places[7] = new Place("gulf of bothnia", 650, 330, "water");
    places[8] = new Place("irish sea", 200, 480, "water");
    places[9] = new Place("english channel", 270, 520, "water");
    places[10] = new Place("mid atlantic", 50, 600, "water");
    places[11] = new Place("west mediterranean", 300, 850, "water");
    places[12] = new Place("gulf of lyon", 350, 770, "water");
    places[13] = new Place("tyrhennian sea", 470, 840, "water");
    places[14] = new Place("ionian sea", 570, 950, "water");
    places[15] = new Place("adriatic sea", 560, 770, "water");
    places[16] = new Place("aegean sea", 740, 920, "water");
    places[17] = new Place("east mediterranean", 850, 960, "water");
    places[18] = new Place("black sea", 870, 740, "water");

    //land but not ports

    //ports

    //add coasts

    //add what each place a place is adjacent to
}