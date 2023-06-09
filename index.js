const prompt = require("prompt-sync")();
const allPokemon = require("./allPokemon");
const allSkills = require("./allskills");
const tableListPokemon = allPokemon.map((pokemon) => {
  return {
    name: pokemon.name,
    health: pokemon.health,
    magic: pokemon.magic,
    normalTo: pokemon.normalTo,
    weakTo: pokemon.weakTo,
    noDamageTo: pokemon.noDamageTo,
    capacity: pokemon.capacity,
  };
});
function chooseSkills(pokemon) {
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
  return pokemon;
}
console.table(tableListPokemon);
let firstPokemonIndex = prompt(
  "Please select First Pokemon by giving pokemon number =>  "
);
let firstPokemon = allPokemon[firstPokemonIndex];
console.log(`You have selected ${firstPokemon.name}${firstPokemon.emoji}`);
let secondPokemonIndex = prompt(
  "Please select second pokemon by giving pokemon number =>  "
);
let secondPokemon = allPokemon[secondPokemonIndex];
console.log(`You have selected ${secondPokemon.name}${secondPokemon.emoji}`);

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
console.log("");
console.log("Lets play the game!");
console.log("");
console.log("");
console.log("");
let attacker = firstPokemon;
let defender = secondPokemon;
while (
  firstPokemon.health >= 0 &&
  secondPokemon.health >= 0 &&
  (firstPokemon.isMagicAvailableToUse() ||
    secondPokemon.isMagicAvailableToUse())
) {
  console.log(`${attacker.name} is attacking on ${defender.name}`);
  console.log(`${attacker.name} has ${attacker.magic} magic left.`);
  console.log(
    "===============================ATTACK=========================================="
  );

  console.table(attacker.skills);
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
  defender.showStatus();
  let currentAttacker = attacker;
  attacker = defender;
  defender = currentAttacker;
  console.log(
    "===============================ATTACK FINISHED=========================================="
  );
  console.log("");
  console.log("");
}

console.log(
  " ######   #######  ##    ##  ######   ########     ###    ######## ##     ## ##          ###    ######## ####  #######  ##    ## #### #### #### \n##    ## ##     ## ###   ## ##    ##  ##     ##   ## ##      ##    ##     ## ##         ## ##      ##     ##  ##     ## ###   ## #### #### #### \n##       ##     ## ####  ## ##        ##     ##  ##   ##     ##    ##     ## ##        ##   ##     ##     ##  ##     ## ####  ## #### #### #### \n##       ##     ## ## ## ## ##   #### ########  ##     ##    ##    ##     ## ##       ##     ##    ##     ##  ##     ## ## ## ##  ##   ##   ##  \n##       ##     ## ##  #### ##    ##  ##   ##   #########    ##    ##     ## ##       #########    ##     ##  ##     ## ##  ####                \n##    ## ##     ## ##   ### ##    ##  ##    ##  ##     ##    ##    ##     ## ##       ##     ##    ##     ##  ##     ## ##   ### #### #### #### \n ######   #######  ##    ##  ######   ##     ## ##     ##    ##     #######  ######## ##     ##    ##    ####  #######  ##    ## #### #### #### "
);
//change condition to check who has highest health is the winner
if (firstPokemon.health < secondPokemon.health) {
  console.log(
    `${firstPokemon.name} is lost. Congratulation ${secondPokemon.name}!!!`
  );
  console.log(secondPokemon.emoji);
} else {
  console.log(
    `${secondPokemon.name} is lost. Congratulation ${firstPokemon.name}!!!`
  );
  console.log(firstPokemon.emoji);
}
console.log(
  '888       888 8888888 888b    888 888b    888 8888888888 8888888b.  \n888   o   888   888   8888b   888 8888b   888 888        888   Y88b \n888  d8b  888   888   88888b  888 88888b  888 888        888    888 \n888 d888b 888   888   888Y88b 888 888Y88b 888 8888888    888   d88P \n888d88888b888   888   888 Y88b888 888 Y88b888 888        8888888P"  \n88888P Y88888   888   888  Y88888 888  Y88888 888        888 T88b   \n8888P   Y8888   888   888   Y8888 888   Y8888 888        888  T88b  \n888P     Y888 8888888 888    Y888 888    Y888 8888888888 888   T88b \n                                                                    \n                                                                    \n                                                                    '
);
