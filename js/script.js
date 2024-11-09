
//Appel de l'API

const api = "https://api.adviceslip.com/advice";

//Variables
const text = document.getElementById('advice');
const textId = document.getElementById('textId');
let advice = "";
let adviceId = "";
const button = document.getElementById('button');

//Écouteurs d'évènements

button.addEventListener('click',displayAdvice);

//Fonctions

function displayAdvice() {
console.log('nouveau conseil')
//Aller chercher le contenu de l'API
fetch(api, { cache: "no-cache" }) //Saisi ce qu'il y a dans l'api
.then(response => response.json()) //retourne le contenu de l'api
.then(data => { //met le contenu dans une variables
    
    //instructions par rapport à quoi faire les données de l'api
    advice = data.slip.advice; 
    adviceId = data.slip.id;
    text.innerText = advice;
    textId.innerText = "ADVICE # " + adviceId;

});
}


