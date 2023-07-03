//DICHIARO LE VARIABILI
const age = 0;
let voucher = 0;
let netPrice = 0;
const km = 0;

//RECUPERO L'ELEMENTO HTML RELATIVO AL SELETTORE INDICATO
const nomeCognomeInputElement = document.querySelector("[name='nome-cognome']");
const etaInputElement = document.querySelector("[name='age']");
const kmInputElement = document.querySelector("[name='km']");
const btnLogin = document.querySelector(".invia-dati");

console.dir(nomeCognomeInputElement);
console.dir(etaInputElement);
console.dir(kmInputElement);
console.dir(btnLogin);

//Creo un blocco di codice che viene eseguito solo quando avviene l’evento indicato sul button sul quale ho aggiunto l’eventListener
btnLogin.addEventListener("click", function () {
  const nomeCognome = nomeCognomeInputElement.value;
  const age = etaInputElement.value;
  const km = kmInputElement.value;

const fullPrice = (km * 0.21);

  if (age < 18) {
    voucher = (fullPrice * 0.2);
  } else if (age > 65) {
    voucher = (fullPrice * 0.4);
  }
  netPrice = (fullPrice - voucher);

  console.log(nomeCognome);
  console.log(age);
  console.log(km);
  console.log(netPrice);
}
)

