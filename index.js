const prompt = require("prompt-sync")();

class AttackSkill {
  constructor(name, magic, damage, type, cost) {
    this.name = name;
    this.magic = magic;
    this.damage = damage;
    this.type = type;
    this.cost = cost;
  }
}
class Pokemon {
  constructor(name, health, magic, normalTo, weakTo, noDamageTo) {

    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
    this.normalTo = normalTo;
    this.weakTo = weakTo;
    this.noDamageTo = noDamageTo;
    this.capacity = 1000;
  }
  learnAttackSkill1(skill) {
    if (this.capacity < 50) {
      console.log("Capacity is less than 50. You cannot purchase the skill.");
      return;
    }
    if (this.capacity < skill.cost) {
      console.log(
        "The cost of the skill is higher than available capacity, Please try other skills."
      );
      return;
    }
    this.skills.push(skill);
    this.capacity = this.capacity - skill.cost;
    console.log(`${this.capacity}`);
    console.log(`remaining capacity: ${this.capacity}`);
  }
  attack(index, opposition) {
    let skill = this.skills[index];
    if (this.magic < skill.magic) {
      console.log(`attack wasted. ${this.magic} is not enough`);
      return;
    }
    console.log(
      `${this.name} is attacking ${opposition.name} with ${skill.name}`
    );

    if (opposition.noDamageTo.includes(skill.type)) {
      this.magic = this.magic - skill.magic;
      console.log("Attack wast0ed. No damage occured.");
    } else if (opposition.weakTo.includes(skill.type)) {
      opposition.health = opposition.health - skill.damage * 2;
      this.magic = this.magic - skill.magic;
    } else {
      opposition.health = opposition.health - skill.damage;
      this.magic = this.magic - skill.magic;
    }
    if (opposition.health <= 0) {
      console.log(
        `Pokemon:${opposition.name}  is dead. health:${opposition.health} magic: ${opposition.magic}`
      );
    }
    if (this.magic <= 0 || opposition.magic <= 0) {
      console.log(
        `Pokemon:${opposition.name}  is dead. health:${opposition.health} magic: ${opposition.magic}`
      );
    }
  }
  isMagicAvailableToUse() {
    // find the min magic skill in the list
    // if available magic is lesser than min magic..return false else true
    let minSkill = this.skills.reduce((x1, x2) => {
      if (x1.magic < x2.magic) {
        return x1;
      }
      return x2;
    });
    return this.magic < minSkill.magic ? false : true;
  }
  showStatus() {
    console.table([{
      name:this.name,health :this.health, magic:this.magic
      }]
    );
  }
}

let pikachu = new Pokemon(
  "Pikachu",
  120,
  120,
  ["Normal", "Poison", "Fire"],
  ["water", "Ice"],
  ["Fighting", "Ground"]
);
let beedrill = new Pokemon(
  "Beedrill",
  120,
  120,
  ["Normal", "Fighting", "Ground"],
  ["Poison", "Ice"],
  ["Water", "Fire"]
);
let charizard = new Pokemon(
  "Charizard",
  120,
  120,
  ["Normal", "Poison", "Fire", "Water", "Poison"],
  ["Ground"],
  ["Fighting"]
);
let greninja = new Pokemon(
  "greninja",
  120,
  120,
  ["Normal", "Ice", "Water", "Ground", "Fighting"],
  ["Poison"],
  ["Fire"]
);
let mewTwo = new Pokemon(
  "Mewtwo",
  120,
  120,
  ["Normal", "Ice", "Fire"],
  ["Ground", "Fighting"],
  ["Poison", "Water"]
);
let bulbasuar = new Pokemon(
  "Bulbasuar",
  120,
  120,
  ["Normal", "Poison", "Ground", "Water"],
  ["Fire", "Ice"],
  ["Fighting"]
);
let squirtel = new Pokemon(
  "Squirtel",
  120,
  120,
  ["Normal", "Fighting", "Ground", "Ice"],
  ["Poison"],
  ["Water", "Fire"]
);
let evee = new Pokemon(
  "Evee",
  120,
  120,
  ["Ground", "Poison", "Fire"],
  ["water", "Fighting"],
  ["Ice"]
);
let alakazam = new Pokemon(
  "Alakazam",
  120,
  120,
  ["Normal", "Ground", "Water", "Fighting"],
  ["Ice"],
  ["Poison", "Fire"]
);
let arceus = new Pokemon(
  "Arceus",
  120,
  120,
  ["Normal", "Poison", "Fire", "Fighting"],
  ["Ground"],
  ["Ice", "Water"]
);
const allPokemon = [
  pikachu,
  beedrill,
  charizard,
  greninja,
  mewTwo,
  bulbasuar,
  squirtel,
  evee,
  alakazam,
  arceus,
];

let bodySlam = new AttackSkill("Body Slam", 7, 5, "Normal", 50);
let hyperbeam = new AttackSkill("Hyper Beam", 8, 7, "Normal", 50);
let icepunch = new AttackSkill("Ice punch", 13, 9, "Ice", 60);
let bonemerang = new AttackSkill("Bonemerang", 13, 10, "Ground", 70);
let doublekick = new AttackSkill("Double Kick", 16, 11, "Fighting", 80);
let cometpunch = new AttackSkill("Comet Punch", 15, 12, "Normal", 90);
let seismicToss = new AttackSkill("Seismic Toss", 16, 13, "Fighting", 100);
let clamp = new AttackSkill("Clamp", 18, 14, "Water", 110);
let sandattack = new AttackSkill("Sand Attack", 19, 16, "Ground", 120);
let watergun = new AttackSkill("Water gun", 21, 17, "Water", 130);
let earthquak = new AttackSkill("Earth Quake", 20, 18, "Ground", 140);
let blizzard = new AttackSkill("Blizzard", 23, 20, "Ice", 150);
let hydropump = new AttackSkill("HydroPump", 25, 22, "Water", 160);
let poisongas = new AttackSkill("Poison Gas", 27, 23, "Poison", 170);
let firespin = new AttackSkill("Fire Spin", 28, 24, "Fire", 180);
let acid = new AttackSkill("Acid", 30, 25, "Poison", 190);
let mist = new AttackSkill("Mist", 32, 27, "Ice", 200);
let poisonsting = new AttackSkill("Posion Sting", 33, 28, "Poison", 215);
let rollingkick = new AttackSkill("Rolling Kick", 35, 30, "Fighting", 230);
let fireblast = new AttackSkill("Fire Blast", 40, 35, "Fire", 250);
console.log(typeof bodySlam);
const allSkills = [
  bodySlam,
  hyperbeam,
  icepunch,
  bonemerang,
  doublekick,
  cometpunch,
  seismicToss,
  clamp,
  sandattack,
  watergun,
  earthquak,
  blizzard,
  hydropump,
  poisongas,
  firespin,
  acid,
  mist,
  poisonsting,
  rollingkick,
  fireblast,
];

console.table(allPokemon);
let firstPokemonIndex = prompt(
  "Please select First Pokemon by giving pokemon number =>  "
);
let firstPokemon = allPokemon[firstPokemonIndex];
let secondPokemonIndex = prompt(
  "Please select second pokemon by giving pokemon number =>  "
);
let secondPokemon = allPokemon[secondPokemonIndex];
console.table(allSkills);
console.log(`Select the skills for ${firstPokemon.name}`);
while (firstPokemon.capacity >= 50) {
  let selectedSkill = prompt("Please select the skill number =>  ");
  console.log(selectedSkill);
  if (
    selectedSkill === undefined ||
    selectedSkill === "" ||
    isNaN(selectedSkill) ||
    selectedSkill > 19
  ) {
    console.log("Please select valid skill number. Try again.");
    continue;
  }
  firstPokemon.learnAttackSkill1(allSkills[selectedSkill]);
}
console.table(allSkills);
console.log(`Select the skills for ${secondPokemon.name}`);
while (secondPokemon.capacity >= 50) {
  let selectedSkill = prompt("Please select the skill number =>  ");
  if (
    selectedSkill === undefined ||
    selectedSkill === "" ||
    isNaN(selectedSkill) ||
    selectedSkill > 19
  ) {
    console.log("Please select valid skill number. Try again.");
    continue;
  }
  secondPokemon.learnAttackSkill1(allSkills[selectedSkill]);
}
console.log("Lets play the game!");
let attacker = firstPokemon;
let defender = secondPokemon;
while (
  firstPokemon.health >= 0 &&
  secondPokemon.health >= 0 &&
  (firstPokemon.isMagicAvailableToUse() ||
    secondPokemon.isMagicAvailableToUse())
) {
  console.table(attacker.skills);
  console.log(`${attacker.name} is attacking on ${defender.name}`);
  let skillNum = prompt("select the skill number to attack =>  ");
  if (
    skillNum === undefined ||
    skillNum === "" ||
    isNaN(skillNum) ||
    skillNum >= attacker.skills.length
  ) {
    console.log("Please select valid skill number");
    continue;
  }
  console.log(`Attacking with ${attacker.skills[skillNum].name}`);
  attacker.attack(skillNum, defender);
  attacker.showStatus();
  defender.showStatus();
  let currentAttacker = attacker;
  attacker = defender;
  defender = currentAttacker;
}

//change condition to check who has highest health is the winner
if (firstPokemon.health < secondPokemon.health) {
  console.log(
    `${firstPokemon.name} is lost. Congratulation ${secondPokemon.name}!!!`
  );
} else {
  console.log(
    `${secondPokemon.name} is lost. Congratulation ${firstPokemon.name}!!!`
  );
}
