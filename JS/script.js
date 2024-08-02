// TODO -------- RACCOLTA DATI -----------
//input
const inputName = document.getElementById('inputName');
const inputKm = document.getElementById('inputKm');

//Select
const age = document.getElementById('selectElements');

//Butons
const btnGenerate = document.getElementById('generate-btn');
const btnDel = document.getElementById('delet-btn');

//Div - Messagio finale del biglieto
const messageTicket = document.getElementById('info')

//TODO -------------ELABORAZIONE------------------

//Preparo della variabile PREZZO per Km
const priceKm = 0.21;
let textPrice = 'Il tuo biglietto costa € '
console.log (priceKm);


//TODO -------------GESTIONE EVENTI------------------
//Raccolta dati
btnGenerate.addEventListener('click', function(e){
    e.preventDefault();
    const inputNameValue = inputName.value.trim(); 
    const inputKmValue = parseInt(inputKm.value.trim());
    const ageValue = age.value;
    console.log(inputNameValue);
    console.log(inputKmValue);
    console.log(ageValue);


//-------------CALCOLO--------------------
let finalPrice = inputKmValue * priceKm;

if(ageValue === 'junior'){
  finalPrice *=  0.8;
}else if(ageValue === 'senior'){
  finalPrice *= 0.6;
}
console.log (textPrice + finalPrice.toFixed(2))

//TODO ---------Output----------
messageTicket.classList.remove('d-none')
messageTicket.innerHTML = textPrice + finalPrice.toFixed(2)
})

/*---------------------------
        BUTTON DELET
----------------------------*/
btnDel.addEventListener('click', function(e){
    e.preventDefault();
  inputName.value = '';
  inputKm.value = ''; 
  messageTicket.classList.add('d-none')
})

















