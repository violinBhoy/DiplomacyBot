//A class along with methods for a place
//variables include attack1, attack2, and defense to put a numerical value to the protection/attack
//that a player has on the place
//coasts are their own places ex: north coast of spain is its own place
//name for coasts will be "'cardinal direction'C place"
class Place {
    constructor(name, x, y, type) {
        this.name = name;
        this.coasts = new Map();
        this.x = x;//places on map
        this.y = y;
        this.type = type;//water, coast, land
        this.armyAdjacent = [];
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
        this.home;//saves who's home this is
    }

    setOwner(country) {
        this.owner = country;
    }

    setHome(country) {
        this.home = country;
    }
}

function createPlaces(countries, places) {
    //for debugging purposes: finding exact locations
    // let army = new Fleet(350, 430, "blue");
    // army.draw(ctx);
    // ctx.fill();

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
    places.set("york", new Place("york", 350, 430, "land"));
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
    places.get("brest").setOwner("france");
    places.get("brest").setHome("france");
    places.set("paris", new Port("paris", 330, 610,"land", 358, 595));
    places.get("paris").setOwner("france");
    places.get("paris").setHome("france")
    places.set("marseilles", new Port("marseilles", 370, 690, "land", 378, 720));
    places.get("marseilles").setOwner("france");
    places.get("marseilles").setHome("france");
    places.set("london", new Port("london", 330, 470, "land", 340, 498));
    places.get("london").setOwner("england");
    places.get("london").setHome("england");
    places.set("liverpool", new Port("liverpool", 310, 400, "land", 323, 433));
    places.get("liverpool").setOwner("england");
    places.get("liverpool").setHome("england");
    places.set("edinburgh", new Port("edinburgh", 325, 335, "land", 338, 381));
    places.get("edinburgh").setOwner("england");
    places.get("edinburgh").setHome("england");
    places.set("kiel", new Port("kiel", 480, 500, "land", 493, 476));
    places.get("kiel").setOwner("germany");
    places.get("kiel").setHome("germany");
    places.set("munich", new Port("munich", 480, 570, "land", 502, 608));
    places.get("munich").setOwner("germany");
    places.get("munich").setHome("germany");
    places.set("berlin", new Port("berlin", 540, 470, "land", 544, 504));
    places.get("berlin").setOwner("germany");
    places.get("berlin").setHome("germany");
    places.set("venezia", new Port("venezia", 485, 705, "land", 518, 682));
    places.get("venezia").setOwner("italy");
    places.get("venezia").setHome("italy");
    places.set("roma", new Port("roma", 527, 795, "land", 511, 795));
    places.get("roma").setOwner("italy");
    places.get("roma").setHome("italy");
    places.set("napoli", new Port("napoli", 550, 845, "land", 555, 832));
    places.get("napoli").setOwner("italy");
    places.get("napoli").setHome("italy");
    places.set("vienna", new Port("vienna", 590, 630, "land", 581, 636));
    places.get("vienna").setOwner("austria");
    places.get("vienna").setHome("austria");
    places.set("trieste", new Port("trieste", 580, 710, "land", 560, 701));
    places.get("trieste").setOwner("austria");
    places.get("trieste").setHome("austria");
    places.set("budapest", new Port("budapest", 670, 660, "land", 631, 658));
    places.get("budapest").setOwner("austria");
    places.get("budapest").setHome("austria");
    places.set("saint petersburg", new Port("saint petersburg", 810, 310, "land", 784, 314));
    places.get("saint petersburg").setOwner("russia");
    places.get("saint petersburg").setHome("russia");
    places.set("moscow", new Port("moscow", 860, 450, "land", 917, 423));
    places.get("moscow").setOwner("russia");
    places.get("moscow").setHome("russia");
    places.set("warsaw", new Port("warsaw", 660, 540, "land", 655, 531));
    places.get("warsaw").setOwner("russia");
    places.get("warsaw").setHome("russia");
    places.set("stevastopol", new Port("stevastopol", 900, 600, "land", 899, 694));
    places.get("stevastopol").setOwner("russia");
    places.get("stevastopol").setHome("russia");
    places.set("constantinople", new Port("constantinople", 810, 845, "land", 796, 807));
    places.get("constantinople").setOwner("turkey");
    places.get("constantinople").setHome("turkey");
    places.set("ankara", new Port("ankara", 950, 810, "land", 921, 811));
    places.get("ankara").setOwner("turkey");
    places.get("ankara").setHome("turkey");
    places.set("smyrna", new Port("smyrna",900, 880, "land", 803, 899));
    places.get("smyrna").setOwner("turkey");
    places.get("smyrna").setHome("turkey");

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

    //add what each place a land place is adjacent to
    places.get("clyde").setArmyAdjacent(["edinburgh", "liverpool"]);
    places.get("clyde").setFleetAdjacent(["liverpool", "north atlantic", "norwegian sea"]);
    places.get("liverpool").setArmyAdjacent(["clyde", "edinburgh", "york", "wales"]);
    places.get("liverpool").setFleetAdjacent(["north atlantic", "irish sea", "clyde", "wales"]);
    places.get("wales").setArmyAdjacent(["liverpool", "york", "london"]);
    places.get("wales").setFleetAdjacent(["liverpool", "london", "irish sea", "english channel"]);
    places.get("london").setArmyAdjacent(["wales", "york"]);
    places.get("london").setFleetAdjacent(["wales", "york", "english channel", "north sea"]);
    places.get("york").setArmyAdjacent(["liverpool", "wales", "london", "edinburgh"]);
    places.get("york").setFleetAdjacent(["edinburgh", "london", "north sea"]);
    places.get("edinburgh").setArmyAdjacent(["clyde", "liverpool", "york"]);
    places.get("edinburgh").setFleetAdjacent(["clyde", "york", "north sea", "norwegian sea"]);
    places.get("brest").setArmyAdjacent(["picardy", "paris", "gascony"]);
    places.get("brest").setFleetAdjacent(["english channel", "mid atlantic", "picardy", "gascony"]);
    places.get("picardy").setArmyAdjacent(["brest", "paris", "burgundy", "belgium"]);
    places.get("picardy").setFleetAdjacent(["english channel", "belgium", "brest"]);
    places.get("paris").setArmyAdjacent(["picardy", "brest", "burgundy", "gascony"]);
    places.get("burgundy").setArmyAdjacent(["belgium", "ruhr", "munich", "marseilles", "gascony", "paris", "picardy"]);
    places.get("marseilles").setArmyAdjacent(["burgundy", "piemonte", "gascony", "spain"]);
    places.get("marseilles").setFleetAdjacent(["piemonte", "gulf of lyon", "spain"]);
    places.get("gascony").setArmyAdjacent(["paris", "burgundy", "marseilles", "spain", "brest"]);
    places.get("gascony").setFleetAdjacent(["north spain", "brest", "mid atlantic"]);
    places.get("kiel").setArmyAdjacent(["denmark", "berlin", "munich", "ruhr", "holland"]);
    places.get("kiel").setFleetAdjacent(["holland", "helgoland bight", "denmark", "berlin"]);
    places.get("berlin").setArmyAdjacent(["kiel", "prussia", "silesia", "munich"]);
    places.get("berlin").setFleetAdjacent(["kiel", "prussia", "baltic sea"]);
    places.get("prussia").setArmyAdjacent(["livonia", "warsaw", "silesia", "berlin"]);
    places.get("prussia").setFleetAdjacent(["livonia", "berlin", "baltic sea"]);
    places.get("silesia").setArmyAdjacent(["prussia", "warsaw", "galicia", "bohemia", "munich", "berlin"]);
    places.get("munich").setArmyAdjacent(["kiel", "berlin", "silesia", "bohemia", "tyrolia", "burgundy", "ruhr"]);
    places.get("ruhr").setArmyAdjacent(["holland", "kiel", "munich", "burgundy", "belgium"]);
    places.get("bohemia").setArmyAdjacent(["silesia", "galicia", "vienna", "tyrolia", "munich"]);
    places.get("galicia").setArmyAdjacent(["warsaw", "ukraine", "rumania", "budapest", "vienna", "bohemia", "silesia"]);
    places.get("vienna").setArmyAdjacent(["bohemia", "galicia", "budapest", "trieste", "tyrolia"]);
    places.get("tyrolia").setArmyAdjacent(["munich", "bohemia", "vienna", "trieste", "venezia", "piemonte"]);
    places.get("budapest").setArmyAdjacent(["galicia", "rumania", "serbia", "trieste", "vienna"]);
    places.get("trieste").setArmyAdjacent(["tyrolia", "vienna", "budapest", "serbia", "albania", "venezia"]);
    places.get("trieste").setFleetAdjacent(["venezia", "albania", "adriatic sea"]);
    places.get("piemonte").setArmyAdjacent(["marseilles", "tyrolia", "venezia", "tuscany"]);
    places.get("piemonte").setFleetAdjacent(["marseilles", "tuscany", "gulf of lyon"]);
    places.get("venezia").setArmyAdjacent(["tyrolia", "trieste", "apulia", "tuscany", "piemonte"]);
    places.get("venezia").setFleetAdjacent(["trieste", "apulia", "adriatic sea"]);
    places.get("tuscany").setArmyAdjacent(["piemonte", "venezia", "roma"]);
    places.get("tuscany").setFleetAdjacent(["piemonte", "roma", "gulf of lyon", "tyrhennian sea"]);
    places.get("roma").setArmyAdjacent(["tuscany", "venezia", "apulia", "napoli"]);
    places.get("roma").setFleetAdjacent(["tuscany", "napoli", "tyrhennian"]);
    places.get("apulia").setArmyAdjacent(["venezia", "napoli", "roma"]);
    places.get("apulia").setFleetAdjacent(["venezia", "napoli", "adriatic sea", "ionian sea"]);
    places.get("napoli").setArmyAdjacent(["roma", "apulia"]);
    places.get("napoli").setFleetAdjacent(["roma", "apulia", "tyrhennian", "ionian"]);
    places.get("finland").setArmyAdjacent(["norway", "sweden", "saint petersburg"]);
    places.get("finland").setFleetAdjacent(["sweden", "south saint petersburg", "gulf of bothnia"]);
    places.get("saint petersburg").setArmyAdjacent(["finland", "norway", "livonia", "moscow"]);
    places.get("saint petersburg").getCoast("south saint petersburg").setFleetAdjacent("gulf of bothnia", "finland", "livonia");
    places.get("saint petersburg").getCoast("north saint petersburg").setFleetAdjacent("barents sea", "norway");
    places.get("moscow").setArmyAdjacent(["saint petersburg", "livonia", "warsaw", "ukraine", "stevastopol"]);
    places.get("livonia").setArmyAdjacent(["saint petersburg", "moscow", "warsaw", "prussia"]);
    places.get("livonia").setFleetAdjacent(["south saint petersburg", "prussia", "baltic sea", "gulf of bothnia"]);
    places.get("warsaw").setArmyAdjacent(["prussia", "livonia", "moscow", "ukraine", "galicia", "silesia"]);
    places.get("ukraine").setArmyAdjacent(["moscow", "stevastopol", "rumania", "galicia", "warsaw"]);
    places.get("stevastopol").setArmyAdjacent(["moscow", "ukraine", "rumania"]);
    places.get("stevastopol").setFleetAdjacent(["rumania", "black sea"]);
    places.get("constantinople").setArmyAdjacent(["bulgaria", "ankara", "smyrna"]);
    places.get("constantinople").setFleetAdjacent(["south bulgaria", "east bulgaria", "ankara", "smyrna", "aegean sea", "black sea"]);
    places.get("ankara").setArmyAdjacent(["constantinople", "smyrna", "armenia"]);
    places.get("ankara").setFleetAdjacent(["constantinople", "black sea", "armenia"]);
    places.get("armenia").setArmyAdjacent(["stevastopol", "ankara", "smyrna", "syria"]);
    places.get("armenia").setFleetAdjacent(["stevastopol", "black sea", "ankara"]);
    places.get("smyrna").setArmyAdjacent(["constantinople", "ankara", "armenia", "syria"]);
    places.get("smyrna").setFleetAdjacent(["constantinople", "syria", "east mediterranean", "aegean sea"]);
    places.get("syria").setArmyAdjacent(["smyrna", "armenia"]);
    places.get("syria").setFleetAdjacent(["smyrna", "east mediterranean"]);

    //onto the land places not tied to a country
    places.get("norway").setArmyAdjacent(["sweden", "finland", "saint petersburg"]);
    places.get("norway").setFleetAdjacent(["sweden", "saint petersburg", "norwegian sea", "north sea", "skagerrak"]);
    places.get("sweden").setArmyAdjacent(["norway", "finland"]);
    places.get("sweden").setFleetAdjacent(["norway", "finland", "denmark", "skagerrak", "baltic sea", "gulf of bothnia"]);
    places.get("denmark").setArmyAdjacent(["kiel"]);
    places.get("denmark").setFleetAdjacent(["north sea", "skagerrak", "sweden", "helgoland bight", "baltic sea", "kiel"]);
    places.get("holland").setArmyAdjacent(["kiel", "ruhr", "belgium"]);
    places.get("holland").setFleetAdjacent(["north sea", "helgoland bight", "kiel", "belgium"]);
    places.get("belgium").setArmyAdjacent(["holland", "ruhr", "burgundy", "picardy"]);
    places.get("belgium").setFleetAdjacent(["holland", "picardy", "english channel", "north sea"]);
    places.get("spain").setArmyAdjacent(["gascony", "marseilles", "portugal"]);
    places.get("spain").getCoast("north spain").setFleetAdjacent(["mid atlatic", "gascony", "portugal"]);
    places.get("spain").getCoast("south spain").setFleetAdjacent(["portugal", "mid atlantic", "west mediterranean", "gulf of lyon"]);
    places.get("portugal").setArmyAdjacent(["spain"]);
    places.get("portugal").setFleetAdjacent(["north spain", "south spain", "mid atlantic"]);
    places.get("north africa").setArmyAdjacent(["tunisia"]);
    places.get("north africa").setFleetAdjacent(["mid atlantic", "west mediterranean", "tunisia"]);
    places.get("tunisia").setArmyAdjacent(["north africa"]);
    places.get("tunisia").setFleetAdjacent(["north africa", "west mediterranean", "tyrhennian sea", "ionian sea"]);
    places.get("rumania").setArmyAdjacent(["ukraine", "galicia", "budapest", "serbia", "bulgaria", "stevastopol"]);
    places.get("rumania").setFleetAdjacent(["stevastopol", "black sea", "east bulgaria"]);
    places.get("bulgaria").setArmyAdjacent(["rumania", "serbia", "greece", "constantinople"]);
    places.get("bulgaria").getCoast("east bulgaria").setFleetAdjacent(["rumania", "constantinople", "black sea"]);
    places.get("bulgaria").getCoast("south bulgaria").setFleetAdjacent(["constantinople", "greece", "constantinople"]);
    places.get("serbia").setArmyAdjacent(["budapest", "rumania", "bulgaria", "greece", "albania", "trieste"]);
    places.get("albania").setArmyAdjacent(["trieste", "serbia", "greece"]);
    places.get("albania").setFleetAdjacent(["trieste", "greece", "adriatic sea", "ionian sea"]);
    places.get("greece").setArmyAdjacent(["albania", "serbia", "bulgaria"]);
    places.get("greece").setFleetAdjacent(["albania", "south bulgaria", "ionian sea", "aegean sea"]);

    //add what each water place is adjacent to
    places.get("north atlantic").setFleetAdjacent(["clyde", "liverpool", "irish sea", "norwegian sea", "mid atlantic"]);
    places.get("norwegian sea").setFleetAdjacent(["north atlantic", "north sea", "barents sea", "clyde", "edinburgh", "norway"]);
    places.get("barents sea").setFleetAdjacent(["norwegian sea", "norway", "north saint petersburg"]);
    places.get("north sea").setFleetAdjacent(["edinburgh", "norway", "york", "london", "belgium", "holland", "norwegain sea", "helgoland bight", "skagerrak"]);
    places.get("skagerrak").setFleetAdjacent(["norway", "sweden", "denmark", "north sea"]);
    places.get("helgoland bight").setFleetAdjacent(["holland", "kiel", "denmark", "north sea"]);
    places.get("baltic sea").setFleetAdjacent(["denmark", "sweden", "kiel", "berlin", "prussia", "livonia", "gulf of bothnia"]);
    places.get("gulf of bothnia").setFleetAdjacent(["sweden", "finland", "baltic sea"]);
    places.get("irish sea").setFleetAdjacent(["liverpool", "wales", "north atlantic", "mid atlantic", "english channel"]);
    places.get("english channel").setFleetAdjacent(["wales", "london", "brest", "picardy", "belgium", "irish sea", "mid atlantic", "north sea"]);
    places.get("mid atlantic").setFleetAdjacent(["brest", "gascony", "north spain", "portugal", "south spain", "north atlamtic", "irish sea", "english channel", "west mediterranean"]);
    places.get("gulf of lyon").setFleetAdjacent(["south spain", "marseilles", "piemonte", "tuscany" , "tyrhennian sea", "west mediterranean"]);
    places.get("west mediterranean").setFleetAdjacent(["south spain", "north africa", "tunisia", "mid atlantic", "gulf of lyon", "tyrhennian"]);
    places.get("tyrhennian sea").setFleetAdjacent(["tuscany", "roma", "napoli", "tunisia", "gulf of lyon", "west mediterranean", "ionian sea"]);
    places.get("ionian sea").setFleetAdjacent(["tunisia", "napoli", "apulia", "greece", "albania", "adriatic sea", "tyrhennian sea", "aegean sea", "east mediterranean"]);
    places.get("adriatic sea").setFleetAdjacent(["apulia", "venezia", "trieste", "albania", "ionain sea"]);
    places.get("aegean sea").setFleetAdjacent(["greece", "south bulgaria", "constantinople", "smyrna", "ionian sea", "east mediterranean"]);
    places.get("east mediterranean").setFleetAdjacent(["smyrna", "syria", "aegean sea", "ionian sea"]);
    places.get("black sea").setFleetAdjacent(["stevastopol", "armenia", "ankara", "constantinople", "east bulgaria", "rumania"]);
}
