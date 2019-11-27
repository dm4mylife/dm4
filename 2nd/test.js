class ItemProps {

    constructor(health, damage, defense) {

        this._health = health;
        this.damage = damage;
        this.defense = defense;

    };

    get health() {
        if ( this._health < 0 ) return 0;
        return this._health;
    };

    set health(value) {
        if ( value >= 0 )  {
            this._health = value;
        };
    }

};

const dummyItem = new ItemProps(0, 0, 0);

class Creature {

    constructor() {

        this.name = '';
        this.health = 1000;
        this.damage = 60
        this.defense = 5;
        this.helmet = dummyItem;
        this.chest = dummyItem;
        this.shoulders = dummyItem;
        this.gloves = dummyItem;
        this.pants = dummyItem;
        this.boots = dummyItem;
        this.sword = dummyItem;


    };

    takeDamage(damage,health) {

        let totalAlliesDefense = this.defense + this.helmet.defense + this.shoulders.defense + this.chest.defense + this.pants.defense + this.gloves.defense + this.boots.defense;
        console.log(`${totalAlliesDefense} --- total def `)

        if (damage > totalAlliesDefense) {
            
            if ( totalAlliesDefense > 3) {

                var effectiveDamage = damage - totalAlliesDefense -3

            } else if ( totalAlliesDefense > 5) {

                var effectiveDamage = damage - totalAlliesDefense -2

            } else if ( totalAlliesDefense > 7) {

                var effectiveDamage = damage - totalAlliesDefense -1

            }
            var effectiveDamage = damage - totalAlliesDefense;
            console.log(health);
            health -= effectiveDamage;

            if (this.helmet.health > 0) this.helmet.health--;
            if (this.shoulders.health > 0) this.shoulders.health--;
            if (this.chest.health > 0) this.chest.health--;
            if (this.pants.health > 0) this.pants.health--;
            if (this.boots.health > 0) this.boots.health--;

            this.damage -= .5;
          
            if (this.defense > 0 ) {

                  this.defense -= .5;

            }
        }
        
    }


    battle(enemy) {

        var totalAlliesHealth = this.health + this.helmet.health + this.shoulders.health + this.chest.health + this.pants.health + this.gloves.health + this.boots.health;
        var totalAlliesAttack = this.damage + this.sword.damage;
        var totalAxisHealth = enemy.health + enemy.helmet.health + enemy.shoulders.health + enemy.chest.health + enemy.pants.health + enemy.gloves.health + enemy.boots.health; 


        enemy.takeDamage(totalAlliesAttack,totalAxisHealth);

        console.log(`${this.name}:\n${totalAlliesHealth} --- hp  \n${totalAlliesAttack} --- dmg  \n${totalAlliesDefense} --- def `);
        
    };
};

var hollyKnight = new Creature();

hollyKnight.name = 'HollyKnight';
hollyKnight.helmet = new ItemProps(20, 0, 5);
hollyKnight.chest = new ItemProps(5, 0, 2);
hollyKnight.gloves = new ItemProps(200, 0, 3);


var ghoul = new Creature();

ghoul.name = 'Ghoul';
ghoul.chest = new ItemProps(15, 0, 3);
ghoul.sword = new ItemProps(20, 10, 2);
ghoul.boots = new ItemProps(100, 0, 4);


var turn = 0; 

while ( ghoul.health > 0 && hollyKnight.health > 0 ) {

    console.log("Turn: "+ turn);
    hollyKnight.battle(ghoul);
    ghoul.battle(hollyKnight);
    turn++;

    if (ghoul.health < 0 ) {

            console.log(`${hollyKnight.health} KNIGHT vs ${ghoul.health} GHOUL`)
            console.log(`Winner is \n\t${hollyKnight.name}`);
            
        } else if (hollyKnight.health < 0 ) {

            console.log(`${hollyKnight.health} KNIGHT vs ${ghoul.health} GHOUL`)
            console.log('Winner is '+ ghoul.name);

        };

};




