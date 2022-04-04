let numbers = [12, 56, 83, 45, 7, 56, 4, 14, 29];
console.log(numbers);

for(let i=0; i <numbers.length; i++){
    console.log(numbers[i]*2); 
}

const total = numbers.reduce((somme, nombre)=>somme + nombre);
console.log(total);
const moyenne = total/ numbers.length;
console.log(moyenne.toFixed(2));

var total2 = [12, 56, 83, 45, 7, 56, 4, 14, 29].reduce((a, b)=> a + b,0)/9;
console.log(total2);

var evenNumbers = numbers.filter(function(item) {
    return (item %2=== 1);
 });
 
 console.log(evenNumbers);

 const visiteurs = [
    ['Gérard','Freschi', 'gfreschi0@discuz.net'],
    ['Bendicty', 'Foster-Smith', 'bfostersmith1@mysql.com'],
    ['Michelle', 'Draude', 'mdraude2@csmonitor.com'],
    ['Cathee', 'Meineck', 'cmeineck3@t-online.de'],
    ['Marianna', 'Coal', 'mcoal4@creativecommons.org'],
  ];
  //solution 1
 for(let i=0; i<visiteurs.length;i++){
   //console.log(visiteurs[i]);
   for (let j= 0; j<visiteurs[i].length; j++) {
   // console.log(visiteurs[i][j]);
    if (visiteurs[i][j]==='Meineck'){
      console.log('Meineck');{
        console.log('hey jo !salut toi!');
        break;
      }
    { 
        console.log('je te connais pas');
      }
    }
   }
 }
//solution2

visiteurs.forEach(visiteur=>{
  if(visiteur.includes('Meineck')) {
    console.log('hey ho! salut toi');
  }
})


//ordre alpha

visiteurs.sort();
console.log(visiteurs);

//tableau emails

const emails = visiteurs.map(visiteur=>{

  return visiteur[2]
});

console.log(emails)