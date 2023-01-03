# Pokemon Royal Battle


## Functionality
### $\color{lightpink}{AttackSkill}$
$\color{green}{AttackSkill}$  class has a name, magic,damage,type and cost parameters. Magic is power of required to use skill while damage means how much will it damage Pokemon's health. Type is category of the skill e.g. Fire, Water,Ice, etc. There are total seven types of skills. Each skill also has purchase cost. Higher the damage, greater the cost. 

### $\color{lightpink}{Pokemon}$
$\color{green}{Pokemon}$  class has a name, health, magic, noDamage, normalTo and weakTo parameters.Each Pokemon has a unique name and their characteristics. Refer the below to know the pokemon details. special variable such as normalTo, weakTo, noDamage has specific effect on health of the pokemon. NormalTo is the type of skill which will affect on health and magic of the pokemon normally, while the weakTo type of skill will reduce the health of the defender twice and reduce the magic attacker normally. NodamageTo skills will not have any affect on the health of the defender but this will reduce the magic of the attacker. Each Pokemon has a purchase power of 1000 and that can be use while selecting the skills. 

Class has following constructor and methods.
* <font color = 'cyan' size= '3rem'><u>costructor</u></font>: Constructor is used to initialize health, magic and other characteristics.It also sets skills array to empty and initial capacity of 1000.
* <font color = 'cyan'>learnAttackSkill</font>: This method is used to buy skills. It also checks if the capacity of the Pokemon is greater  than 50  to buy a certain skill and if skill of cost is higher than capacity then it can't purchase the skill.
* <font color = 'cyan'> attack</font>: This method has a two parameters index and opposition.This method selects the skill and attacks on opposition.there are multiple conditions checked before attack. If type of skill is included in the Oppositions's NodamageTo type of skills then it will not affect on Opposition's health but reduces the magic of attacker. Likewise, If the type of skill is included in the weakTo of the opposition's skill, It will have severe effect on oppositions health(2x). If that type of skill is in the normalTo then it will affect on health and magic of the pokemon normally. Before any attack It also check If the attacker has enough magic to use the skill.


* <font color = 'cyan'>isMagicAvailabletoUse</font>: This method will use to find the skill with the minimum magic and it will compared with Pokemon's available magic.If the Pokemon's magic is 0 or it is lesser than magic of skill then it will return false.
* <font color ='cyan'>showStatus</font> This method shows current status of the pokemon.


## How to play?
* First you will be asked to select the first pokemon for the first player. The player will select his/her favorite Pokemon from the table by providing the pokemon number.Please give the attention to other characteristics of the Pokemon.It plays crucial role while defending.
* later you will be presented with 19 20 skills which Pokemon can learn.Make sure you have enough capacity to buy the skills.
* Above two steps will be applicable for second player.
* Player 1 will get first chance to attack on Player 2 and vice versa.
* During the battle, Pokemon's health and magic are constantly reducing and this will affect selection of the skill as the game progresses.
* It might happen the skill that you selected requires more magic than available.In that case you will be prompted with the message and attack will be wasted
* The game will end when one of the Pokemon losses his health to zero then another Pokemon will be declared as winner.
* Incase, both the Pokemon's are run out of magic and health still there, then the pokemon with the highest health will be the winner.

## ENJOY THE ROYAL BATTLE!
<img src='https://i.gifer.com/VhoG.gif'>



## $\color{blue}{Pokemons\ table}$

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

## $\color{blue}{Pokemon\ Skills}$
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
| Blizzard | 23 | 20 |<img src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/ice-crystal-2737627-2270047.png" alt ="drawing" width ="16px" height="16px"> Ice | 150 |
| Hydropump | 25 | 22  | <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGsXE4yxVpvbhBTomsaHALwz-UiygL78qpQ&usqp=CAU" alt ="water" width = "16px" height = "16px"/> Water | 160 |
| Poisongas | 27 | 23  | <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvw4qSPQ5_Ya14Kfw8o_n1KWPZP1LljaTbw&usqp=CAU" alt = "poison" width = "16px" height = "16px"/> Poison | 170 |
| Firespin | 28 | 24 | <img src = "https://i2.wp.com/www.mastermeltgroup.com/wp-content/uploads/2019/02/fire.png?ssl=1" alt ="drawing" width = "16px" height = "16px"/> Fire | 180 |
| Acid | 30 | 25 | <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvw4qSPQ5_Ya14Kfw8o_n1KWPZP1LljaTbw&usqp=CAU" alt = "poison" width = "16px" height = "16px"/> Poison | 190 |
| Mist | 32 | 27 | <img src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/ice-crystal-2737627-2270047.png" alt ="drawing" width ="16px" height="16px"> Ice | 200 |
| Poisonsting | 33 | 28  | <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvw4qSPQ5_Ya14Kfw8o_n1KWPZP1LljaTbw&usqp=CAU" alt = "poison" width = "16px" height = "16px"/>  Poison | 215 |
| Rollingkick | 35 | 30 | <img src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/knife-6925265-5675391.png" alt = "fighting" width = "16px" height = "16px"/> Fighting | 230 |
| Fireblast | 40 | 35 |  <img src = "https://i2.wp.com/www.mastermeltgroup.com/wp-content/uploads/2019/02/fire.png?ssl=1" alt ="drawing" width = "16px" height = "16px"/> Fire | 250 |


## REFERENCE
* https://www.theloadout.com/pokemon-type-chart
* https://pokemondb.net/pokedex/bulbasaur




