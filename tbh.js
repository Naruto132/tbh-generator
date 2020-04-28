 let promp=prompt('your name monsieur /madame')

let tbh = ['Charming' ,'likeable','Polite','Friendzoned','Hustler','desperate', //6
 'dumb','fat', 'useless', 'drama queen','fake-depressed','thicc','playboy','genius',//14
 'rich-fuck','awkward','extrovert','memer','bossy','egoistical','rude','funny','lazy',//24
 'frank','creative','shy','selfish','bossy','immature','shabby','loyal','intellectual',//33
 'selfless','romantic','diplomatic','weird','popular','cold-hearted','anti-social','nerdy',//41
 'idiot','sensitive','secretive','mysterious','conceited','lonely','thoughtful','scaredy-cat',//49
 ,'weak','wise','timid','thoughtful','jealous','broad-minded','daring','sociable','affiable', //58
 'tense','agitated','unpleasent','strange','political','open-minded','political','emotional',//66
 'unhappy','period','soulless','defiant','reliable','rebellious','clean','clueless','fancy', //75
 'fashionable','minimalist','brat','filthy','macho','maniac','moody','depressed','elegant', //84
 'bulky','slim','kuposhit','potterhead','musician','sporty','artist','suicidal','lucky',//93
 'average','chef','virgin','elegant','graceful','gamer','boomer','adorable','cynical',//102
 'cringe','strategist','sarcastic','crazy','daredevil','roaster','complicated','sleepy',//110
 'old-fashioned','chubby','baniya','bhen ka loda','madarchod','friendzoned-fuck','blushy',//117
 'exasperated','joyous','religious','atheist','OCD','dumbo','flirter',//124
 'chut','chota nunu','petite','brunette','baldy','breath-taking',//130
 'chotu','short','dreaded','teachers pet','modern','broad','naughty',//137
 'creepy','tall','lambu','idle','narcissist','sadist','masochist',//144
 'pedophile','sex offender','stalker','eloquent','influential','political',//150
 'workaholic','horny','hypocrite','overcritical','bitchy','cruel,hostile',//156
 'self-centered','Machiavellian','sneaky','untrutworthy','deceitful',//161
 'dishonest','fussy','intolerant','unpredictable','possessive','secretive'//167
 ,'hardworker','smart','fantastic','empathic','sympathic','touchy',//173
 'moody','over-emotional','vulgar','outstanding','fantastic','upbeat',//179
 'wondrous','perfect','quick-tempered','indecisive','Spartan','adaptable',//185
 'self-conscious','courteous','considerate','inventive','chupa,',//190
 'philosophical','practical','dreamer','crybaby','kinky','tough',//196
 'versatile','unassuming','oppurtunistic','gullible','procastinator',//201
 'work-machine','suicidal','pessimist','nihilist','likeable','hateable',//207
 'biased','backstabber','obervant','deducer','proactive','chatty','hilarious',//215
 'laid back','planner','wanderer','conservative','dogmatic','foodie','materialistic',//222
 'writer','nervous','patronizing','irreplacable','attention-seeker','quarrelsome',//228
'ruthless','self-indulgent','stingy','dumbo','superficial','truculent','vague', //234      
 'tactless','pussy','spiritual','ulitarian','detached','billegerent','big-headed',//240
 'trickster','Worthy','daddy','indiscreet','interfering','compulsive',//246
 'boring','alone','disagreeable','extroverted','peaky blinder','Lannister'//252
 ,'stark','dothraki','Hufflepuff','Gryffindor','Slytherin','Ravenclaw','Martell'//259
 ,'Greyjoy' , 'Targaryens','White-Walker','Saiyan','Namekian','Angel',//265
,'Ross','sherlock','John Watson','Chandler','Monica','Rachel','Ben 10',//272
'Chotta Bheem','Joey','Phoebe','Ray Holt','Jake Peralta','Amy Santiago','terry Jeffords'//280
,'Chutki','Dr Who','Saul Goodman ','Sheldon Cooper','Penny','Amy Fowler',//286
'Moriarty','Morty','Arthur Shelby','Tommy Shelby','Michael Shelby','Bojack Horseman'//292
,'John Shelby','Alfie Solomons','Polly Shelby','Daredevil','Thanos'//298
,'Black Widow','Dr.Strange','Mysterio','Joker','Harley Quinn','The Punisher'//304
,'Offred(Handmaids Tale)','Robin','Gamora','Flash','Arrow','Pablo Escobar'//310
,'Sabrina','Michael Myers','Freddie Kruger','Wolverine','Pikachu','Witcher'//316
,'Mandalorian','Jojo','Wonder Woman','Bart Simpson','actor','sakht',//322
'Jacked','Body-builder','bitch','shit','vomit','third wheel'//328
,'Taskmaster','muthari','retard','small brain','big pp','small pp','big brain' //335








];


 let shuffled = tbh.sort(() =>  0.5 - Math.random());

 
 let intro=(`YO  ${promp}`);

 let gene = document.getElementById("prom");
 gene.innerHTML=intro
// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 10);

document.getElementById("tbh").innerHTML=selected


// let value= tbh[Math.floor(Math.random() * tbh.length , tbh++)]

// console.log(value);

// result = i

// console.log(result)