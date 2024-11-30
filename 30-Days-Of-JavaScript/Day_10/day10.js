const names = [
    'Alondra',
    'Alex',
    'Teresa'
]

const companies = new Set(names);
console.log(companies);
for (const name of companies){
    console.log(name)
};
 const videoGames = new Set();
 console.log(videoGames.size);
 videoGames.add('God of War');
 videoGames.add('Resident Evil');
 videoGames.add('Horizon');
 videoGames.add('FiFa 24');
 videoGames.add('Mortal Kombat');
console.log(videoGames.size);
console.log(videoGames);

const videoNew = new Set();
for( videoGame of videoGames){
videoNew.add(videoGame)
}
console.log(videoNew);
videoNew.delete('God of War');
console.log(videoNew.size);

console.log(videoNew.has('FiFa 24'));
console.log(videoGames.has('Mario Kart'));

videoNew.clear();
console.log(videoNew);

const map = new Map();
console.log(map);

countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
  ];
const newMap = new Map(countries);
console.log(newMap);
console.log(newMap.size);

const countrieMap = new Map();
countrieMap.set('Finlandia', 'Mexico');
countrieMap.set('Ingalterra','Suecia');
console.log(countrieMap);
console.log(countrieMap.get('Finlandia'));
console.log(countrieMap.has('Mexico'));

for(countrie of countrieMap){
    console.log(countrie);
}

for(const [countrie, city] of countrieMap){
    console.log(countrie, city)
}