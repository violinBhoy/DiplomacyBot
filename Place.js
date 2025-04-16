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
        this.armyAdjust = 1;//make armies smaller for smaller places
    
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

    setArmyAdjust(num) {//deal with this after everything works
        this.armyAdjust = num;
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
    let army = new Fleet(810, 100, "blue");
    army.draw(ctx);
    ctx.fill();

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

    //land but not ports
    places.set("finland", new Place("finland", 700, 140, "land"));
    places.set("livonia", new Place("livonia", 700, 420, "land"));
    places.set("ukraine", new Place("ukraine", 770, 570, "land"));
    places.set("ruhr", new Place("ruhr", 440, 545, "land"));
    places.set("silesia", new Place("silesia", 580, 530, "land"));
    places.set("prussia", new Place("prussia", 620, 480, "land"));
    places.set("wales", new Place("wales", 290, 460, "land"));
    places.set("clyde", new Place("clyde", 300, 335, "land"));
    places.set("burgundy", new Place("burgundy", 390, 620, "land"));
    places.set("gascony", new Place("gascony", 290, 670, "land"));
    places.set("picardy", new Place("picardy", 350, 550, "land"));
    places.set("piemonte", new Place("piemonte", 435, 690, "land"));
    places.set("tuscany", new Place("tuscany", 475, 750, "land"));
    places.set("apulia", new Place("apulia", 560, 790, "land"));
    places.set("tyrolia", new Place("tyrolia", 510, 640, "land"));
    places.set("bohemia", new Place("bohemia", 560, 580, "land"));
    places.set("galicia", new Place("galicia", 680, 590, "land"));
    places.set("syria", new Place("syria", 1120, 920, "land"));
    places.set("armenia", new Place("armenia", 1150, 820, "land"));
    places.set("north africa", new Place("north africa", 100, 900, "land"));
    places.set("albania", new Place("albania", 640, 810, "land"));

    //ports and setting temporary owners
    places.set("brest", new Port("brest", 280, 570, "land", 255, 557));
    places.get("brest").setOwner(countries.get("france"));
    places.set("paris", new Port("paris", 330, 610,"land", 358, 595));
    places.get("paris").setOwner(countries.get("france"));
    places.set("marseilles", new Port("marseilles", 370, 690, "land", 378, 720));
    places.get("marseilles").setOwner(countries.get("france"));
    places.set("london", new Port("london", 330, 470, "land", 340, 498));
    places.get("london").setOwner(countries.get("england"));
    places.set("liverpool", new Port("liverpool", 310, 400, "land", 323, 433));
    places.get("liverpool").setOwner(countries.get("england"));
    places.set("edinburgh", new Port("edinburgh", 325, 335, "land", 338, 381));
    places.get("edinburgh").setOwner(countries.get("england"));
    places.set("kiel", new Port("kiel", 480, 500, "land", 493, 476));
    places.get("kiel").setOwner(countries.get("germany"));
    places.set("munich", new Port("munich", 480, 570, "land", 502, 608));
    places.get("munich").setOwner(countries.get("germany"));
    places.set("berlin", new Port("berlin", 540, 470, "land", 544, 504));
    places.get("berlin").setOwner(countries.get("germany"));
    places.set("venezia", new Port("venezia", 485, 705, "land", 518, 682));
    places.get("venezia").setOwner(countries.get("italy"));
    places.set("roma", new Port("roma", 527, 795, "land", 511, 795));
    places.get("roma").setOwner(countries.get("italy"));
    places.set("napoli", new Port("napoli", 550, 845, "land", 555, 832));
    places.get("napoli").setOwner(countries.get("italy"));
    places.set("vienna", new Port("vienna", 590, 630, "land", 581, 636));
    places.get("vienna").setOwner(countries.get("austria"));
    places.set("trieste", new Port("trieste", 580, 710, "land", 560, 701));
    places.get("trieste").setOwner(countries.get("austria"));
    places.set("budapest", new Port("budapest", 670, 660, "land", 631, 658));
    places.get("budapest").setOwner(countries.get("austria"));
    places.set("saint petersburg", new Port("petersburg", 810, 310, "land", 784, 314));
    places.get("saint petersburg").setOwner(countries.get("russia"));
    places.set("moscow", new Port("moscow", 860, 450, "land", 917, 423));
    places.get("moscow").setOwner(countries.get("russia"));
    places.set("warsaw", new Port("warsaw", 660, 540, "land", 655, 531));
    places.get("warsaw").setOwner(countries.get("russia"));
    places.set("stevastopol", new Port("stevastopol", 900, 600, "land", 899, 694));
    places.get("stevastopol").setOwner(countries.get("russia"));
    places.set("constantinople", new Port("constantinople", 810, 845, "land", 796, 807));
    places.get("constantinople").setOwner(countries.get("turkey"));
    places.set("ankara", new Port("ankara", 950, 810, "land", 921, 811));
    places.get("ankara").setOwner(countries.get("turkey"));
    places.set("smyrna", new Port("smyrna",900, 880, "land", 803, 899));
    places.get("smyrna").setOwner(countries.get("turkey"));

    //add ports that don't have temporary owners
    places.set("spain", new Port("spain", 160, 780, "land", 189,  748));
    places.set("portugal", new Port("portugal", 100, 710, "land", 75,  751));
    places.set("tunisia", new Port("tunisia", 420, 930, "land", 432,  909));
    places.set("belgium", new Port("belgium", 400, 530, "land", 387,  527));
    places.set("holland", new Port("holland", 430, 480, "land", 418,  505));
    places.set("denmark", new Port("denmark", 490, 420, "land", 532,  434));
    places.set("norway", new Port("norway", 495, 300, "land", 535,  304));
    places.set("sweden", new Port("sweden", 580, 300, "land", 594,  371));
    places.set("serbia", new Port("serbia", 660, 760, "land", 649,  743));
    places.set("greece", new Port("greece", 670, 850, "land", 711,  894));
    places.set("bulgaria", new Port("bulgaria", 740, 770, "land", 712,  776));
    places.set("rumania", new Port("rumania", 740, 710, "land", 785,  720));

    //add coasts
    places.get("spain").addCoast("north", 180, 690);
    places.get("spain").addCoast("south", 190, 810);
    places.get("bulgaria").addCoast("south", 750, 790);
    places.get("bulgaria").addCoast("east", 770, 760);
    places.get("saint petersburg").addCoast("south", 760, 330);
    places.get("saint petersburg").addCoast("north", 810, 100);

    //add what each place a place is adjacent to
}
