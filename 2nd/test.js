class ItemProps {

    constructor() {

        this.health = 10;
        this.mana = 10;
        this.damage = 2;
        this.defence = 2;

    };

};

var shineHelmet = new ItemProps();

shineHelmet.defence = 5;
shineHelmet.health = 20;

var fastGloves = new ItemProps();

fastGloves.damage = 4;
fastGloves.defence = 3;

var chaosSword = new ItemProps();

chaosSword.damage = 5;
chaosSword.health = 30;

var roughChest = new ItemProps();

roughChest.health = 30;
roughChest.defence = 4;


class Creature {

    constructor() {

        this.health = 100;
        this.damage = 10
        this.mana = 100;
        this.defence = 5;
        this.helmet = null;
        this.shoulders = null;
        this.chest = null;
        this.gloves = null;
        this.pants = null;
        this.boots = null;

    };
    battle(enemy) {
        if (enemy.damage > this.damage) {
            console.log('+')
        } else {
            console.log('-')
        }
    }


};


var hollyKnight = new Creature();
hollyKnight.helmet = shineHelmet;
hollyKnight.def = 5;
var ghoul = new Creature();
ghoul.chest = roughChest;
ghoul.

ghoul.battle(hollyKnight);
hollyKnight.battle(hollyKnight);

class Enemy {

    constructor() {

        this.health = 80;
        this.damage = 7
        this.mana = 40;
        this.defence = 3;
        this.strenghtPoints = 8;
        this.agilityPoints = 5;
        this.intelligence = 3;
        this.spellHollyStrike = false;
    };

};

var ghoul = new Enemy();

hollyKnight.battle(ghoul)