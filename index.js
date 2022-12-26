// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline.question("who are yo?", (name) => {
//   console.log(`hey welcome ${name}!`);
//   readline.close();
// });
class AttackSkill {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
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
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
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
let pikachu = new Pokemon("Pikachu", 90, 100);
let lightning = new AttackSkill("Lightning", 30, 20);
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
