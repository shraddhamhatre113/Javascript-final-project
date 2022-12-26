// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline.question("who are yo?", (name) => {
//   console.log(`hey welcome ${name}!`);
//   readline.close();
// });
class AttackSkill {
  constructor(name, magic, damage,type,cost) {
    this.name = name;
    this.magic = magic;
    this.damage = damage;
    this.type = type;
    this.cost = cost;
  }
//   showAttackGraphics() {
//     console.log("             zeeeeee-");
//     console.log('           z$$$$$$"');
//     console.log('          d$$$$$$"');
//     console.log("         d$$$$$P");
//     console.log("        d$$$$$P");
//     console.log('       $$$$$$"');
//     console.log('     .$$$$$$"');
//     console.log('    .$$$$$$"');
//     console.log('   4$$$$$$$$$$$$$"');
//     console.log('   z$$$$$$$$$$$$$"');
//     console.log('   """""""3$$$$$"');
//     console.log("        z$$$$P");
//     console.log('       d$$$$"');
//     console.log('     .$$$$$"');
//     console.log('    z$$$$$"');
//     console.log("   z$$$$P");
//     console.log('   d$$$$$$$$$$"');
//     console.log('   *******$$$"');
//     console.log('      .$$$"');
//     console.log('     .$$"');
//     console.log('    4$P"');
//     console.log('   z$"');
//     console.log("  zP");
//     console.log(' z"');
//     console.log("/");
//     console.log("^");
//   }
}
class Pokemon {
  constructor(name, health, magic, normalTo, weakTo,damageTo) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
    this.normalTo = normalTo;
    this.weakTo = weakTo;
    this.damageTo = damageTo;
    this.capacity = 1000;
  }
  learnAttackSkill1(skill) {
    this.skills.push(skill);
  }
  attack(index, pokemon) {
    let skill = this.skills[0];
    if (this.magic < skill.magic) {
      console.log(`attack wasted. ${this.magic} is not enough`);
      return;
    }

    console.log(`${this.name} is attacking ${pokemon.name} with ${skill.name}`);
    skill.showAttackGraphics();
    pokemon.health = pokemon.health - skill.health;
    this.magic = this.magic - skill.magic;

    if (pokemon.health <= 0) {
      console.log(
        `Pokemon:${pokemon.name}  is dead. health:${pokemon.health} magic: ${pokemon.magic}`
      );
    }
  }
  showStatus() {
    console.log(
      `${this.name} status\nhealth:${this.health}\nmagic: ${this.magic}`
    );
  }
}












let pikachu = new Pokemon("Pikachu", 120, 120,['Normal','Poison','Fire'], ['water', 'Ice'], ['Fighting','Ground']);
let intimidate = new Pokemon("Intimidate", 120, 120,['Normal','Fighting','Ground'], ['Poison', 'Ice'], ['Water','Fire']);
let charizard = new Pokemon("Charizard", 120, 120,['Normal','Poison','Fire','Water','Poison'], ['Ground'], ['Fighting']);
let greninja = new Pokemon("greninja", 120, 120,['Normal','Ice', 'Water', 'Ground', 'Fighting'], ['Poison'], ['Fire']);
let mewTwo = new Pokemon("Mewtwo", 120, 120,['Normal','Ice', 'Fire'], ['Ground', 'Fighting'], ['Poison','Water']);
let bulbasuar = new Pokemon("Bulbasuar", 120, 120,['Normal','Poison','Ground','Water'], ['Fire', 'Ice'], ['Fighting']);
let squirtel = new Pokemon("Squirtel", 120, 120,['Normal','Fighting','Ground','Ice'], ['Poison'], ['Water','Fire']);
let evee = new Pokemon("Evee", 120, 120,['Ground','Poison','Fire'], ['water', 'Fighting'], ['Ice']);
let alkazam = new Pokemon("Alkazam", 120, 120,['Normal','Ground', 'Water', 'Fighting'], ['Ice'], ['Poison','Fire']);
let arceus = new Pokemon("Arceus", 120, 120,['Normal','Poison','Fire','Fighting'], ['Ground'], ['Ice','Water']);


let bodySlam = new AttackSkill('Body Slam',7,5,'Normal',50);
let hyperbeam = new AttackSkill('Hyper Beam',8,7,'Normal',50);
let icepunch = new AttackSkill('Ice punch',13,9,'Ice',60);
 let bonemerang = new AttackSkill('Bonemerang',13,10,'Ground',70);
let doublekick = new AttackSkill('Double Kick',16,11,'Fighting',80);
let cometpunch = new AttackSkill('Comet Punch',15,12,'Normal',90);
let seismicToss = new AttackSkill('Seismic Toss',16,13,'Fighting',100);
let clamp = new AttackSkill('Clamp',18,14,'Water',110);
let sandattack = new AttackSkill('Sand Attack',19,16,'Ground',120);
let watergun = new AttackSkill('Water gun',21,17,'Water',130);
let earthquak = new AttackSkill('EarthQuak',20,18,'Ground',140);
let blizzard = new AttackSkill('Blizzard',23,20,'Ice',150);
let hydropump = new AttackSkill('HydroPump',25,22,'Water',160);
let poisongas = new AttackSkill('Poison Gas',27,23,'Poison',170);
let firespin = new AttackSkill('Fire Spin',28,24,'Fire',180);
let acid = new AttackSkill('Acid',30,25,'Poison',190);
let mist = new AttackSkill('Mist',32,27,'Ice',200);
let poisonsting = new AttackSkill('Posion Sting',33,28,'Poison',215);
let rollingkick = new AttackSkill('Rolling Kick',35,30,'Fighting',230);
let fireblast = new AttackSkill('Fire Blast',40,35,'Fire',250);


pikachu.learnAttackSkill1(lightning);

let bulbauser = new Pokemon("Bulbauser", 60, 120);
let overGrow = new AttackSkill("Overgrow", 50, 30);
bulbauser.learnAttackSkill1(overGrow);

pikachu.attack(0, bulbauser);
pikachu.showStatus();
bulbauser.showStatus();
console.log("===============end=================");
bulbauser.attack(0, pikachu);
pikachu.showStatus();
bulbauser.showStatus();
console.log("===============end=================");
pikachu.attack(0, bulbauser);
pikachu.showStatus();
bulbauser.showStatus();
console.log("===============end=================");
