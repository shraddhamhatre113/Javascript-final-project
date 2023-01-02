# Pokemon Lite

## REFERENCE
* https://www.theloadout.com/pokemon-type-chart
* https://pokemondb.net/pokedex/bulbasaur
## Functionality
* First created $\color{green}{AttackSkill}$ class it has a name, magic,damage,type and cost parameters.
magic meas power of opposition party and damage means health of the skill. type means I created seven types of skill and this will tell you which type of skill it is.

* I created $\color{green}{Pokemon}$ class that have name, health,magic,noDamage, normalto and weakto.name means pokemon name, magic and health is the pokemon's health and magic. normalto means if that type of skill is in the normalto then it will affect on health and magic of the pokemon normally.In the weakto if type of skillis included in weakto it will reduce the health twice and reduce the magic normally. nodamgeto means if that type of sill is in nodamageto then it will not affect on its health but this will reduce the magic of the attacker it means attack is wasted. the skills are stored in an array or object.capacity and skills(array of skills) are not mention in parameter.for skills i declare empty array later on he will learn the skill or buy the skill.capacity means how much skills he can buy and I fixed te capacity1000.

* pokemon constructor has four method.first one is $\color{pink}{learnskill}$  method. first one is learn AttackSkill, In this method wrote two condition. If the capacity is less than 50  and if skill of cost is higher than capacity then you can't purchase.

* Second method is $\color{pink}{attack}$. This one is a important method. This method has a two parameters index and opposition().
- This method has a multiple condition. If type of skill include in the pokemon's Nodamageto type of skills then it will affect on attackers's magic this means attack is wasted. 
- If the type of skill includes in the weakto this will reduce the pokemon's health twice and reduce the magic normally. 
- If that type of skill includes in the normalto then it will affect on health and magic of the pokemon normally. 
- opposition health is equal to zero means opposition is dead and  game is over. 
- Pokemon's magic lesser than 0 or opposition magic lesser than 0  then opposition is dead .

* Third method  is $\color{pink}{isMagicAvailabletoUse}$. In this method I am finding minimum magic of both the pokemon's.
* I created two tables one for pokemon and second for skills
* If you use console.table for pokemon you will get table in the prompt.
declare the variable firstpokemonIndex and secondpokemonIndex to access the pokemon through pokemonIndex .
* wrote console.table for select the skills in the prompt.
* In while loop I wrote condition for select the pokemon. If the fistpokemon's capacity 50 or more than 50 then only you can buy skills. while loop has a condition if selected skill is undefined or empty or selectedskill's index is number or selected skills not more then 19.

*
## $\color{blue}{Table\ for\ select\ the\ Pokemon}$

| Pokemon | Health | Magic | Normal to| Weak to | NoDamage to |
| :------ | :----: | :----:| :------: | :------:| --------: |
|  <img src="https://img.pokemondb.net/artwork/large/beedrill.jpg" alt="drawing" width="20%"/> Beedrill | 120 | 120  | Normal, Fighting, Ground| Poison, Ice  | Water |
|  <img src="https://img.pokemondb.net/artwork/large/charizard.jpg" alt="drawing" width="20%"/>Charizard | 120 | 120  | Normal, Poison, Ice, Water, Fire| Ground | Fighting |
|  <img src="https://img.pokemondb.net/artwork/large/pikachu.jpg" alt="drawing" width="20%"/>Pikachu | 120 | 120  | Normal, Fire, Poison| Water, Ice| Fighting,Ground |
|  <img src="https://img.pokemondb.net/artwork/large/greninja.jpg" alt="drawing" width="20%"/>Greninja | 120 | 120  | Normal, Ice, Water, Ground, Fighting | Poison | Fire |
|  <img src="https://img.pokemondb.net/artwork/large/mewtwo.jpg" alt="drawing" width="20%"/> Mewtwo | 120 | 120  | Normal, Ice, Fire | Ground, Fighting | Poison, Water |
|<img src="https://img.pokemondb.net/artwork/large/bulbasaur.jpg" alt="drawing" width="20%"/> Bulbasuar | 120 | 120  | Normal, Poison, Water, Ground | Ice, Fire | Fighting |
|  <img src="https://img.pokemondb.net/artwork/large/squirtle.jpg" alt="drawing" width="20%"/> Squirtel | 120 | 120  | Normal, Ice, Ground, Fighting | Poison | Water, Fire |
|  <img src="https://img.pokemondb.net/artwork/large/eevee.jpg" alt="drawing" width="20%"/> Evee | 120 | 120  | Normal, Ground, Poison, Fire | Fighting | Water, Ice |
|  <img src="https://img.pokemondb.net/artwork/large/alakazam.jpg" alt="drawing" width="20%"/> Alakazam | 120 | 120  | Normal, Water, Ground, Fighting | Ice | Poison, Fire |
|  <img src="https://img.pokemondb.net/artwork/large/arceus.jpg" alt="drawing" width="20%"/> Arceus | 120 | 120  | Normal, Fire, Poison, Fighting | Ground, Ice  | Water |

## $\color{blue}{Table\ for\ select\ the\ Skills}$
| Skills | Damage | Magic | Type | Cost|
| :----- | :----: | :----:| :---: | ---: | 
| Body slam | 7 | 5  | <img src ="https://img.pokemondb.net/images/icons/move-special.png" alt="drawing" width= "20%"/> Normal| 50 |
| Hyperbeam | 8 | 7 | <img src ="https://img.pokemondb.net/images/icons/move-special.png" alt="drawing" width= "20%"/> Normal| 50 |
| Icepunch | 13 | 9 | <img src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/ice-crystal-2737627-2270047.png" alt ="drawing" width ="16px" height="16px"> Ice | 60 |
| Bonemerang | 13 | 10  | <img src = "https://www.shareicon.net/data/256x256/2015/11/03/150126_quake_256x256.png" alt ="ground" width = "16px" height = "16px"/> Ground | 70 |
| Doublekick | 16 | 11 | <img src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/knife-6925265-5675391.png" alt = "fighting" width = "16px" height = "16px"/> Fighting | 80 | 
| Cometpunch | 15 | 12  | <img src ="https://img.pokemondb.net/images/icons/move-special.png" alt="drawing" width= "20%"/> Normal| 90 |
| SeismicToss | 16 | 13  | <img src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/knife-6925265-5675391.png" alt = "fighting" width = "16px" height = "16px"/> Fighting | 100 |
| Clamp | 18 | 14  |  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGsXE4yxVpvbhBTomsaHALwz-UiygL78qpQ&usqp=CAU" alt ="water" width = "16px" height = "16px"/> Water | 110 |
| Sandattack | 19 | 16  | <img src = "https://www.shareicon.net/data/256x256/2015/11/03/150126_quake_256x256.png" alt ="ground" width = "16px" height = "16px"/> Ground | 20 |
| Watergun | 21 | 17 |  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGsXE4yxVpvbhBTomsaHALwz-UiygL78qpQ&usqp=CAU" alt ="water" width = "16px" height = "16px"/> Water | 130 |
| Earthquak | 20 | 18 | <img src = "https://www.shareicon.net/data/256x256/2015/11/03/150126_quake_256x256.png" alt ="ground" width = "16px" height = "16px"/> Ground | 140 |
| Blizzard | 23 | 20  |<img src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/ice-crystal-2737627-2270047.png" alt ="drawing" width ="16px" height="16px"> Ice | 150 |
| Hydropump | 25 | 22  | <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGsXE4yxVpvbhBTomsaHALwz-UiygL78qpQ&usqp=CAU" alt ="water" width = "16px" height = "16px"/> Water | 160 |
| Poisongas | 27 | 23  | <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvw4qSPQ5_Ya14Kfw8o_n1KWPZP1LljaTbw&usqp=CAU" alt = "poison" width = "16px" height = "16px"/> Poison | 170 |
| Firespin | 28 | 24 | <img src = "https://i2.wp.com/www.mastermeltgroup.com/wp-content/uploads/2019/02/fire.png?ssl=1" alt ="drawing" width = "16px" height = "16px"/> Fire | 180 |
| Acid | 30 | 25 | <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvw4qSPQ5_Ya14Kfw8o_n1KWPZP1LljaTbw&usqp=CAU" alt = "poison" width = "16px" height = "16px"/> Poison | 190 |
| Mist | 32 | 27 | <img src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/ice-crystal-2737627-2270047.png" alt ="drawing" width ="16px" height="16px"> Ice | 200 |
| Poisonsting | 33 | 28  | <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvw4qSPQ5_Ya14Kfw8o_n1KWPZP1LljaTbw&usqp=CAU" alt = "poison" width = "16px" height = "16px"/>  Poison | 215 |
| Rollingkick | 35 | 30 | <img src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/knife-6925265-5675391.png" alt = "fighting" width = "16px" height = "16px"/> Fighting | 230 |
| Fireblast | 40 | 35 |  <img src = "https://i2.wp.com/www.mastermeltgroup.com/wp-content/uploads/2019/02/fire.png?ssl=1" alt ="drawing" width = "16px" height = "16px"/> Fire | 250 |







