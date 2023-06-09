class Pokemon {
    constructor(name, health, magic, normalTo, weakTo, noDamageTo, emoji) {
      this.name = name;
      this.health = health;
      this.magic = magic;
      this.skills = [];
      this.normalTo = normalTo;
      this.weakTo = weakTo;
      this.noDamageTo = noDamageTo;
      this.capacity = 1000;
      this.emoji = emoji;
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
      console.log(`${skill.name} earned.`);
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
        console.log(
          ":::       :::     :::      :::::::: ::::::::::: :::::::::: :::::::::  \n:+:       :+:   :+: :+:   :+:    :+:    :+:     :+:        :+:    :+: \n+:+       +:+  +:+   +:+  +:+           +:+     +:+        +:+    +:+ \n+#+  +:+  +#+ +#++:++#++: +#++:++#++    +#+     +#++:++#   +#+    +:+ \n+#+ +#+#+ +#+ +#+     +#+        +#+    +#+     +#+        +#+    +#+ \n #+#+# #+#+#  #+#     #+# #+#    #+#    #+#     #+#        #+#    #+# \n  ###   ###   ###     ###  ########     ###     ########## #########  "
        );
        console.log("Attack wasted. No damage occurred.");
      } else if (opposition.weakTo.includes(skill.type)) {
        console.log(
          "\nd8888b.  .d88b.  db    db d8888b. db      d88888b   d8888b.  .d8b.  .88b  d88.  .d8b.   d888b  d88888b \n88  `8D .8P  Y8. 88    88 88  `8D 88      88'       88  `8D d8' `8b 88'YbdP`88 d8' `8b 88' Y8b 88'     \n88   88 88    88 88    88 88oooY' 88      88ooooo   88   88 88ooo88 88  88  88 88ooo88 88      88ooooo \n88   88 88    88 88    88 88~~~b. 88      88~~~~~   88   88 88~~~88 88  88  88 88~~~88 88  ooo 88~~~~~ \n88  .8D `8b  d8' 88b  d88 88   8D 88booo. 88.       88  .8D 88   88 88  88  88 88   88 88. ~8~ 88.     \nY8888D'  `Y88P'  ~Y8888P' Y8888P' Y88888P Y88888P   Y8888D' YP   YP YP  YP  YP YP   YP  Y888P  Y88888P \n                                                                                                       \n                                                                                                       "
        );
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
      console.table([
        {
          name: this.name,
          health: this.health,
          magic: this.magic,
        },
      ]);
    }
  }

  module.exports = Pokemon;