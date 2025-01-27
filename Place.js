//A class along with methods for a place
//variables include attack1, attack2, and defense to put a numerical value to the protection/attack
//that a player has on the place
//coasts are their own places ex: north coast of spain is its own place
//name for coasts will be "'cardinal direction'C place"
class Place {
    constuctor(name, x, y, type) {
        this.name = name;
        this.coasts = new Map();
        this.x = x;//places on map
        this.y = y;
        this.type = type;//water, coast, land
        this.armyAdjacent = [];//make it a map?
        this.fleetAdjacent = [];
        this.port = false;//to deal with places array
    
        this.defender = "";//who is "defending" place
        this.attacker = "";//who is attacking place
        this.defense = 0;//number for defense points/units
        this.offense = 0;//number for offensive points/units
    }

    setArmyAdjacent(armyAdjacents) {//what places are adjacent for armies - not all are adjacent for fleets AND armies
        for (let i = 0; i < armyAdjacents.length; i++) {
            this.armyAdjacent[i] = armyAdjacents[i];
        }
    }

    setFleetAdjacent(fleetAdjacents) {
        for (let i = 0; i < fleetAdjacents.length; i++) {
            this.fleetAdjacent[i] = fleetAdjacents[i];
        }
    }

    isPort() {
        return this.port;
    }

    addCoast(side, x, y) {
        this.coastname = side + " " + this.name;
        this.coasts.set(this.coastname, new Place(this.coastname, x, y, "coast"));
    }

    getCoast(name) {
        return this.coasts.get(name);
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
    let army = new Army(770, 570, "blue");
    army.draw(ctx);

    //water places first
    places.set("north atlantic", new Place("north atlantic", 100, 300, "water"));
    places.set("norwegian sea", new Place("norwegian sea", 450, 125, "water"));
    places.set("barents sea", new Place("barents sea", 825, 30, "water"));
    places.set("north sea", new Place("north sea", 400, 350, "water"));
    places.set("skagerrak", new Place("skagerrak", 500, 360, "water"));
    places.set("helgoland bight", new Place("helgoland bight", 440, 440, "water"));
    places.set("baltic sea", new Place("baltic sea", 600, 430, "water"));
    places.set("gulf of bothnia", new Place("gulf of bothnia", 650, 330, "water"));
    places.set("irish sea", new Place("irish sea", 200, 480, "water"));
    places.set("english channel", new Place("english channel", 270, 520, "water"));
    places.set("mid atlantic", new Place("mid atlantic", 50, 600, "water"));
    places.set("west mediterranean", new Place("west mediterranean", 300, 850, "water"));
    places.set("gulf of lyon", new Place("gulf of lyon", 350, 770, "water"));
    places.set("tyrhennian sea", new Place("tyrhennian sea", 470, 840, "water"));
    places.set("ionian sea", new Place("ionian sea", 570, 950, "water"));
    places.set("adriatic sea", new Place("adriatic sea", 560, 770, "water"));
    places.set("aegean sea", new Place("aegean sea", 740, 920, "water"));
    places.set("east mediterranean", new Place("east mediterranean", 850, 960, "water"));
    places.set("black sea", new Place("black sea", 870, 740, "water"));

    //land but not ports (going north to south)
    places.set("wales", new Place("wales", 290, 460, "land"));
    places.set("finland", new Place("finland", 700, 140, "land"));
    places.set("livonia", new Place("livonia", 700, 420, "land"));
    places.set("ukraine", new Place("ukraine", 770, 570, "land"));
    //onto germany

    //ports

    //add coasts

    //add what each place a place is adjacent to
}