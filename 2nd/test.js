class ItemProps {

    constructor() {

        this.health = 10;
        this.damage = 2;
        this.defence = 2;

    };

};

var shineHelmet = new ItemProps();

shineHelmet.defence = 5;
shineHelmet.health = 20;

var roughChest = new ItemProps();

roughChest.health = 30;
roughChest.defence = 4;

var spikeShoulders = new ItemProps();

spikeShoulders.health = 30;
spikeShoulders.defence = 4;

var fastGloves = new ItemProps();

fastGloves.health = 14;
fastGloves.defence = 3;

var chaosSword = new ItemProps();

chaosSword.damage = 5;


var travelBoots = new ItemProps();

travelBoots.damage = 3;
travelBoots.health = 10;
travelBoots.defence = 1;

class Creature {

    constructor() {

        this.name = '';
        this.health = 1000;
        this.damage = 60
        this.defence = 5;
        this.helmet = null;
        this.chest = null;
        this.shoulders = null;
        this.gloves = null;
        this.pants = null;
        this.boots = null;
        this.sword = null;


    };

    battle(enemy) {


        var defenceStatsAxis = 0;

        if ( enemy.helmet != null) {

            defenceStatsAxis += enemy.helmet.defence;

        } else if ( enemy.shoulders != null) {

            defenceStatsAxis += enemy.shoulders.defence;

        } else if ( enemy.chest != null) {

            defenceStatsAxis += enemy.chest.defence;

        } else if ( enemy.gloves != null) {

            defenceStatsAxis += enemy.gloves.defence;

        } else if ( enemy.pants != null) {

            defenceStatsAxis += enemy.pants.defence;

        } else if ( enemy.boots != null) {

            defenceStatsAxis += enemy.boots.defence;

        };

        defenceStatsAxis = enemy.defence + enemy.helmet.defence + enemy.shoulders.defence+ enemy.chest.defence+ enemy.pants.defence+ enemy.gloves.defence+ enemy.boots.defence;

        var damageStatsAlies = this.damage + this.sword.damage;

        console.log(defenceStatsAxis,enemy)

        if ( defenceStatsAxis > 10 ) {

            enemy.health -= damageStatsAlies - defenceStatsAxis - 5 ;
            
        } else if ( defenceStatsAxis > 7 ) {

            enemy.health -= damageStatsAlies - defenceStatsAxis - 1 ;
            
        } else if ( defenceStatsAxis > 5 ) {

            enemy.health -= damageStatsAlies - defenceStatsAxis - 1 ;
            
        } else {

            enemy.health -= damageStatsAlies - defenceStatsAxis;

        };

       
        damageStatsAlies -= .5;
        enemy.health -= damageStatsAlies;
        
    };
};

var hollyKnight = new Creature();

hollyKnight.name = 'HollyKnight';
hollyKnight.helmet = shineHelmet;
hollyKnight.chest = roughChest;
hollyKnight.gloves = fastGloves;

var ghoul = new Creature();

ghoul.name = 'Ghoul';
ghoul.chest = roughChest;
ghoul.sword = chaosSword;
ghoul.boots = travelBoots;

while ( ghoul.health > 0 || hollyKnight.health > 0) {

    hollyKnight.battle(ghoul);
    ghoul.battle(hollyKnight);

    printStats(hollyKnight);
    printStats(ghoul);

};

function printStats(unit) {

    console.log(`Stats ${unit.name}:\n${unit.health} ---health\n${unit.defence} ---defence\n${unit.damage} --- damage`);
    
     if (unit.health < 0) {

         return console.log('Winner is '+ unit.name);

     };
};