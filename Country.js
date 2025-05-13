//contain information about every country/player
class Country {
    constructor(name, color, numArmy, numFleet) {
        this.name = name;
        this.color = color;
        this.numArmy = numArmy;
        this.numFleet = numFleet;
        this.numPorts = 3;
        this.armyPlaces = [];//stores were the army is for easy access
        this.armies = [];//stores army parrellel to armyPlaces
        this.fleetPlaces = [];
        this.fleets = [];
    }

    createStart() {//create the units, put them in starting pos
    }

    drawArmies(ctx) {
        for (let i = 0; i < this.armies.length; i++) {
            this.armies[i].draw(ctx);
        }
    }

    drawFleets(ctx) {
        for (let i = 0; i < this.fleets.length; i++) {
            this.fleets[i].draw(ctx);
        }
    }

    removeArmy(index) {//remove an army at the index specified
        this.armyPlaces.splice(index, 1);
        this.armies.splice(index, 1);
    }

    removeFleet(index) {
        this.fleetPlaces.splice(index, 1);
        this.fleets.splice(index,1);
    }
}

function drawUnits(countries, ctx) {
    countries.get("england").drawArmies(ctx);
    countries.get("england").drawFleets(ctx);
    countries.get("france").drawArmies(ctx);
    countries.get("france").drawFleets(ctx);
    countries.get("germany").drawArmies(ctx);
    countries.get("germany").drawFleets(ctx);
    countries.get("italy").drawArmies(ctx);
    countries.get("italy").drawFleets(ctx);
    countries.get("austria").drawArmies(ctx);
    countries.get("austria").drawFleets(ctx);
    countries.get("turkey").drawArmies(ctx);
    countries.get("turkey").drawFleets(ctx);
    countries.get("russia").drawArmies(ctx);
    countries.get("russia").drawFleets(ctx);
}
