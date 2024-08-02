/* //Raccolta de dati della pag
const messagePrice = document.getElementById('info')

--------------------------
       RACCOLTA DATI
--------------------------
//Chiedi all'utente quanti km vuole percorrere
const totalKm = parseInt(prompt('Quanti KM vuoi percorrere?', 100));
console.log(totalKm);

//Chiedi all'utente la sua età
const age = parseInt(prompt('Quanti anni hai?', 31));
console.log(age, typeof age);

---------------------------
      FASI DI ELABORAZIONE
----------------------------
//Preparo della variabile PREZZO per Km
const priceKm = 0.21;
console.log (priceKm, typeof priceKm);

//Prezzo del biglietto

const ticketPrice = totalKm * priceKm;
let message = "Il prezzo del tuo biglietto è € "+ (ticketPrice).toFixed(2);

if (age < 18) {
  const minAge = ticketPrice - (ticketPrice * 0.2);
  message = "Il prezzo del tuo biglietto è € " + (minAge).toFixed(2);
} else if (age > 65){
  const maxAge = ticketPrice - (ticketPrice * 0.4);
  message = "Il prezzo del tuo biglietto è € " + (maxAge).toFixed(2);
} 

console.log (message)

---------------------------
      FASI DI OUTPUT
----------------------------
//Mostro in pagina
messagePrice.innerHTML = (message)
*/


// TODO -------- RACCOLTA DATI -----------
//input
const inputName = document.getElementById('inputName');
const inputKm = document.getElementById('inputKm');

//Select
const age = document.getElementById('selectElements');

//Butons
const btnGenerate = document.getElementById('generate-btn');
const btnDel = document.getElementById('delet-btn');

//TODO -------------GESTIONE EVENTI------------------
//Raccolta dati
btnGenerate.addEventListener('click', function(e){
    e.preventDefault();
    const inputNameValue = inputName.value.trim(); 
    const inputKmValue = parseInt(inputKm.value.trim());
    console.log(inputNameValue, inputKmValue);
})

btnDel.addEventListener('click', function(e){
    e.preventDefault();
  inputName.value = '';
  inputKm.value = ''; 
})

//TODO -------------ELABORAZIONE------------------
//Text-Mensage
const messagePrice = document.getElementById('info')
const textMessage = "Il prezzo del tuo biglietto è € "

//Preparo della variabile PREZZO per Km
const priceKm = 0.21;
console.log (priceKm);

//TODO -------------CALCOLO-------------------------

const inputKmValue = parseInt(inputKm.value.trim());

//Prezzo del biglietto
const ticketPrice 










