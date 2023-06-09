const AttackSkill = require('./AttackSkill');

const bodySlam = new AttackSkill("Body Slam", 7, 5, "Normal", 50);
const hyperbeam = new AttackSkill("Hyper Beam", 8, 7, "Normal", 50);
const icepunch = new AttackSkill("Ice punch", 13, 9, "Ice", 60);
const bonemerang = new AttackSkill("Bonemerang", 13, 10, "Ground", 70);
const doublekick = new AttackSkill("Double Kick", 16, 11, "Fighting", 80);
const cometpunch = new AttackSkill("Comet Punch", 15, 12, "Normal", 90);
const seismicToss = new AttackSkill("Seismic Toss", 16, 13, "Fighting", 100);
const clamp = new AttackSkill("Clamp", 18, 14, "Water", 110);
const sandattack = new AttackSkill("Sand Attack", 19, 16, "Ground", 120);
const watergun = new AttackSkill("Water gun", 21, 17, "Water", 130);
const earthquak = new AttackSkill("Earth Quake", 20, 18, "Ground", 140);
const blizzard = new AttackSkill("Blizzard", 23, 20, "Ice", 150);
const hydropump = new AttackSkill("HydroPump", 25, 22, "Water", 160);
const poisongas = new AttackSkill("Poison Gas", 27, 23, "Poison", 170);
const firespin = new AttackSkill("Fire Spin", 28, 24, "Fire", 180);
const acid = new AttackSkill("Acid", 30, 25, "Poison", 190);
const mist = new AttackSkill("Mist", 32, 27, "Ice", 200);
const poisonsting = new AttackSkill("Poison Sting", 33, 28, "Poison", 215);
const rollingkick = new AttackSkill("Rolling Kick", 35, 30, "Fighting", 230);
const fireblast = new AttackSkill("Fire Blast", 40, 35, "Fire", 250);

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

module.exports = allSkills;