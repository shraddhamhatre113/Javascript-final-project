# Pokemon Lite

## Functionality
* First created AttackSkill class it has a name, magic,damage,type and cost parameters.
magic meas power of opposition party and damage means health of the skill. type means I created seven types of skill and this will tell you which type of skill it is.

* I created pokemon class that have name, health,magic,noDamage, damageto and weakto.name means pokemon name, magic and health is the pokemon's health and magic. damageto means if that type of skill is in the damageto then it will affect on health and magic of the pokemon normally.In the weakto if type of skillis included in weakto it will reduce the health twice and reduce the magic normally. nodamgeto means if that type of sill is in no damageto then it will not affect on its health but this will reduce the magic of the attacker it means attack is wasted. the skills are stored in an array or object.apacity and skills(array of skills) are not mention in parameter.for skills i declare empty array later on he will learn the skill or buy the skill.capacity means how much skills he can buy and I fixed te capacity1000.

* pokemon constructor has four method.first one is learnSkill method. first one is learnAttackskill, In this method wrote two condition. If the capacity is less than 50  and if skill of cost is higher than capacity then you can't purchase.

*Second method is attack. This one is a important method. This method has a two parameters index and opposition().This method has a three condition.

## Table for select the pokemon

| Pokemon | Health | Magic | Normal to| Weak to | Damage to |
| :------ | :----: | :----:| :------: | :------:| --------: |
| Intimidate | 120 | 120  | Normal, Fighting, Ground| Poison, Ice  | Water |
| :------ | :----: | :----:| :------: | :------:| --------: |
| Charizard | 120 | 120  | Normal, Poison, Ice, Water, Fire| Ground | Fighting |
| :------ | :----: | :----:| :------: | :------:| --------: |
| Pikachu | 120 | 120  | Normal, Fire, Poison| Water, Ice| Fighting,Ground |
| ------- | :----: | :----:| -------- | :------:| --------: |
| Greninja | 120 | 120  | Normal, Ice, Water, Ground, Fighting | Poison | Fire |
| ------- | :----: | :----:| -------- | :------:| --------: |
| Mewtwo | 120 | 120  | Normal, Ice, Fire | Ground, Fighting | Poison, Water |
| ------- | :----: | :----:| -------- | :------:| --------: |
| Bulbasaur | 120 | 120  | Normal, Poison, Water, Ground | Ice, Fire | Fighting |
| ------- | :----: | :----:| -------- | :------:| --------: |
| Squirtel | 120 | 120  | Normal, Ice, Ground, Fighting | Poison | Water, Fire |
| ------- | :----: | :----:| -------- | :------:| --------: |
| Evee | 120 | 120  | Normal, Ground, Poison, Fire | Fighting | Water, Ice |
| ------- | :----: | :----:| -------- | :------:| --------: |
| Alakazam | 120 | 120  | Normal, Water, Ground, Fighting | Ice | Poison, Fire |
| ------- | :----: | :----:| -------- | :------:| --------: |
| Arceus | 120 | 120  | Normal, Fire, Poison, Fighting | Ground, Ice  | Water |

## Table for select the Skills
| Skills | Damage | Magic | Type | Cost|
| ------- | :----: | :----:| :---: | ----: | 
| bodySlam | 7 | 5  | Normal| 50 |
| ------- | :----: | :----:| :---: | ----: | 
| hyperbeam | 8 | 7 | Normal| 50 |
| ------- | :----: | :----:| -------: | 
| icepunch | 13 | 9  | Ice| 60 |
| ------- | :----: | :----:| -------: | 
| bonemerang | 13 | 10  | Ground | 70 |
| ------- | :----: | :----:| -------: | 
| doublekick | 16 | 11 | Fighting | 80 |
| ------- | :----: | :----:| -------: | 
| cometpunch | 15 | 12  | Normal| 90 |
| ------- | :----: | :----:| -------: | 
| seismicToss | 16 | 13  | Fighting | 100 |
| ------- | :----: | :----:| -------: | 
| clamp | 18 | 14  | Water | 110 |
| ------- | :----: | :----:| -------: | 
| sandattack | 19 | 16  | Ground | 20 |
| ------- | :----: | :----:| -------: | 
| watergun | 21 | 17 | Water | 130 |
| ------- | :----: | :----:| -------: | 
| earthquak | 20 | 18 | Ground | 140 |
| ------- | :----: | :----:| -------: | 
| blizzard | 23 | 20  | Ice | 150 |
| ------- | :----: | :----:| -------: | 
| hydropump | 25 | 22  | Water | 160 |
| ------- | :----: | :----:| -------: | 
| Poisongas | 27 | 23  | Poison | 170 |
| ------- | :----: | :----:| -------: | 
| firespin | 28 | 24 | Fire | 180 |
| ------- | :----: | :----:| -------: | 
| acid | 30 | 25 | Poison | 190 |
| ------- | :----: | :----:| -------: | 
| mist | 32 | 27 | Ice | 200 |
| ------- | :----: | :----:| -------: | 
| poisonsting | 33 | 28  | Poison | 215 |
| ------- | :----: | :----:| -------: | 
| rollingkick | 35 | 30 | Fighting | 230 |
| ------- | :----: | :----:| -------: | 
| fireblast | 40 | 35 | Fire | 250 |







