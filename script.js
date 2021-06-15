let pname;
let ptype;
let moves;
let evo;
let arealocation;
let img
let flavour;
let current;
let infor;
// initialize letiables after page loads
window.onload = function() {
  let input = document.getElementById("search");
	pname = document.getElementById("name");
  ptype = document.getElementById("type");
  moves = document.getElementById("moves");
  evo = document.getElementById("evo");
  arealocation = document.getElementById("loca");
  img = document.getElementById("big");
  flavour = document.getElementById("text");
  infor = document.getElementById("info");
  infor.style.visibility = "hidden";
  
 input.addEventListener("keyup",function(event){
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button").click();
  }
});
} // window.onload

function fetchData() {
  let search = document.getElementById("search").value;  
  if(search != "" || search > 898 || search < 1){
  fetch('https://pokeapi.co/api/v2/pokemon/' + search)
    .then(response => response.json())
    .then(data => displayPoke(data) )
    .catch (err => console.log("")
    );
  }
}

function randomGen1(){
  let ran = Math.floor(Math.random() * 151) + 1;
  fetch('https://pokeapi.co/api/v2/pokemon/' + ran)
    .then(response => response.json())
    .then(data => displayPoke(data) 
    );
}//random gen1

function randomPoke(){
  let ran = Math.floor(Math.random() * 898) + 1;
  fetch('https://pokeapi.co/api/v2/pokemon/' + ran)
    .then(response => response.json())
    .then(data => displayPoke(data) 
    );
}//randomePoke

function randomHorsePoke(){
  let array = [77,78,522,523,749,750,897,896];
  let horse = array[Math.floor(Math.random() * array.length)];
  fetch('https://pokeapi.co/api/v2/pokemon/' + horse)
    .then(response => response.json())
    .then(data => displayPoke(data) 
    );
}//random horse

  function nextPoke(){
    if(current < 898){
    current = current + 1;
    fetch('https://pokeapi.co/api/v2/pokemon/' + current)
    .then(response => response.json())
    .then(data => displayPoke(data) 
    );
    }
  }//next Poke

  function prePoke(){
    if(current > 1){
    current = current - 1;
    fetch('https://pokeapi.co/api/v2/pokemon/' + current)
    .then(response => response.json())
    .then(data => displayPoke(data) 
    );
    }
  }//prePoke
//IMPORTANT PART THAT DISPLAYS EVERYTHING
function displayPoke(data) {
  infor.style.visibility = "visible";
  //DISPLAYS BASIC INFO OF POKEMON
  current = data.id;
  let p;
  let j;
  pname.innerHTML = data.name;
    let newName = pname.innerHTML;
let capName = newName.charAt(0).toUpperCase() + newName.slice(1);
  pname.innerHTML = capName;
   ptype.innerHTML = "";
  for (p = 0; p < (data.types).length; p++) {
    ptype.innerHTML += data.types[p].type.name + "<br>";
  }
if(data.types[0].type.name == "grass"){
  document.getElementById("info").style.backgroundColor = '	#8FBC8F';
}else if(data.types[0].type.name == "fire"){
  document.getElementById("info").style.backgroundColor = '	#FFA500';
}else if(data.types[0].type.name == "water"){
  document.getElementById("info").style.backgroundColor = '		#B0E0E6';
}	else if(data.types[0].type.name == "electric"){
  document.getElementById("info").style.backgroundColor = '	#FFD700';
}	else if(data.types[0].type.name == "normal"){
  document.getElementById("info").style.backgroundColor = '	#FFE4B5';
}	else if(data.types[0].type.name == "ice"){
  document.getElementById("info").style.backgroundColor = '#00BFFF';
}	else if(data.types[0].type.name == "fighting"){
  document.getElementById("info").style.backgroundColor = '	#FF6347';
}	else if(data.types[0].type.name == "poison"){
  document.getElementById("info").style.backgroundColor = '	#9370DB';
}else if(data.types[0].type.name == "ground"){
  document.getElementById("info").style.backgroundColor = '	#CD853F';
}	else if(data.types[0].type.name == "flying"){
  document.getElementById("info").style.backgroundColor = '	#E6E6FA';
}	else if(data.types[0].type.name == "psychic"){
  document.getElementById("info").style.backgroundColor = '	#DDA0DD';
}	else if(data.types[0].type.name == "bug"){
  document.getElementById("info").style.backgroundColor = '	#9ACD32';
}	else if(data.types[0].type.name == "rock"){
  document.getElementById("info").style.backgroundColor = '	#D2B48C';
}	else if(data.types[0].type.name == "ghost"){
  document.getElementById("info").style.backgroundColor = '	#DA70D6';
}	else if(data.types[0].type.name == "dark"){
  document.getElementById("info").style.backgroundColor = '	#808080';
  document.getElementById("name").style.color = 'white';
}	else if(data.types[0].type.name == "dragon"){
  document.getElementById("info").style.backgroundColor = '#00CED1';
}	else if(data.types[0].type.name == "steel"){
  document.getElementById("info").style.backgroundColor = '	#B0C4DE';
}	else if(data.types[0].type.name == "fairy"){
  document.getElementById("info").style.backgroundColor = '	#FFE4E1';
}					
  
  
  
  
  //DISPLAYS MOVES OF POKEMON
  if((data.moves).length != 0){
  moves.innerHTML = "";
    let j;
  for(j = 0; j < (data.moves).length; j++){
    let move = data.moves[j].move.name;
    let newMove = move.replace('-', ' ');
    let cap = newMove.toLowerCase().split(' ').map(newMove => newMove.charAt(0).toUpperCase() + newMove.substring(1)).join(' ');
    moves.innerHTML += "<li>" + "<a href='https://bulbapedia.bulbagarden.net/wiki/" + cap + "_(move)' target='_blank'>" + cap  + "</a>" + "</li>" + "<br>";
  }
  }else{
    moves.innerHTML += "No known moves"
  }//moves if
  
  
  
  //DISPLAYS AREA OF ENCOUNTERS OF POKEMON
  function displayArea(data){//add a thing for when you can't encounter the pokemon
    let i;
    arealocation.innerHTML = "";
    if(data.length != 0){
    for(i = 0; i < data.length; i++){
     arealocation.innerHTML += "<li>" + data[i].location_area.name + "</li>" + "<br>";  
    }//for
    }else{
      arealocation.innerHTML += "<li>" + "No known Location" + "</li>"; 
    }
  }//displayArea
   let area = data.location_area_encounters;  
  fetch(area)
    .then(response => response.json())
    .then(data => displayArea(data) 
    );
  displayArea(data);
  
  
  
  
  //DISPLAYS EVOLUTIONS OF POKEMON
  let species = data.species.url;
  fetch(species)
    .then(response => response.json())
    .then(data => getChain(data) 
    );
  function getChain(data){
    let chain = data.evolution_chain.url;
    fetch(chain)
    .then(response => response.json())
    .then(data => displayEvo(data) 
    );
  }//display EVO
  function displayEvo(data){
    let e;
    evo.innerHTML = "";
    evo.innerHTML += data.chain.species.name + "<br>";
     if((data.chain.evolves_to).length != 0 ){
       evo.innerHTML += /*"<button onclick='getLink(data)'>" + */data.chain.evolves_to[0].species.name/* + "</button>"*/ + "<br>";
       e = true;
     }
    if(e == true){
      if((data.chain.evolves_to[0].evolves_to).length != 0 && (data.chain.evolves_to).length != 0 ){
             evo.innerHTML += data.chain.evolves_to[0].evolves_to[0].species.name + "<br>";
       }
       }//e == true
      //eevee evos, tyrogue evos, slowpoke evos, and legendaries(with no evos)
    if(e == true){
    if((data.chain.evolves_to).length == 8 || (data.chain.evolves_to).length == 3 || (data.chain.evolves_to).length == 2 ||(data.chain.evolves_to[0].evolves_to).length == 2){
         let k;
      let d;
         for(k = 1; k < (data.chain.evolves_to).length; k++){
           evo.innerHTML += data.chain.evolves_to[k].species.name + "<br>";
         }//for
      for(d = 1; d < (data.chain.evolves_to[0].evolves_to).length; d++){
           evo.innerHTML += data.chain.evolves_to[0].evolves_to[d].species.name + "<br>";
         }//for
    }
    }//2nd e == true
    document.getElementById("evo").style.fontFamily="Oswald", "Courier New", 'monospace';
  }//displayEVO
  
  
  
 
  
  //DISPLAY SPRITES OF POKEMON
  img.innerHTML = "";
  img.innerHTML +=  "<img src='" + data.sprites.other['official-artwork'].front_default + "' alt='pic of pokemon'>";
  let des = data.species.url;
  fetch(des)
  .then(response => response.json())
    .then(data => getText(data) 
    );
  
  
  //DISPLAYS FLAVOR TEXT OF POKEMON
  function getText(data){
    let i;
    for (i = 0; i < (data.flavor_text_entries).length; i++) {
      flavour.innerHTML = "";
    flavour.innerHTML += data.flavor_text_entries[i].flavor_text;
    if(data.flavor_text_entries[i].language.name == "en"){
      break;
    }
    }//for
    document.getElementById("text").style.fontFamily = "Lucida Console", "Courier New", 'monospace';
  }//getText
  
  
} // displayPoke

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}