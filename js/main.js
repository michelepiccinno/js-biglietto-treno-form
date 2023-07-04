//RECUPERO L'ELEMENTO HTML RELATIVO AL SELETTORE INDICATO
const nomeCognomeInputElement = document.querySelector("[name='nome-cognome']");
const etaInputElement = document.querySelector(".form-select");
const kmInputElement = document.querySelector("[name='km']");
const btnInvia = document.querySelector(".invia-dati");
const btnAnnulla = document.querySelector(".annulla-dati");

console.dir(nomeCognomeInputElement);
console.dir(etaInputElement);
console.dir(kmInputElement);
console.dir(btnInvia);
console.dir(btnAnnulla);
console.dir(etaInputElement);

//CREO UN BLOCCO DI CODICE CHE VIENE ESEGUITO SOLO QUANDO AVVIENE L'EVENTO CLICK SUL BUTTON SUL QUALE HO AGGIUNTO L'EVENTLISTENER 
btnInvia.addEventListener("click", function () {
  const nomeCognome = nomeCognomeInputElement.value;
  const age = etaInputElement.value;
  const km = kmInputElement.value;

  const fullPrice = (km * 0.21);
  let voucher = 0;
  let ticketType = ('Biglietto Standard');

  //CONTROLLO ETA', ASSEGNO EVENTUALE SCONTO E TIPO TARIFFA BIGLIETTO ("UNDER 18, STANDARD, OVER 65")
  if (age < 18) {
    voucher = (fullPrice * 0.2);
    ticketType = ('Biglietto Under 18');
  } else if (age > 65) {
    voucher = (fullPrice * 0.4);
    ticketType = ('Biglietto Over 65');
  }
  netPrice = (fullPrice - voucher);

  console.log(nomeCognome);
  console.log(age);
  console.log(km);
  console.log(netPrice);
  console.log(ticketType);

  //CREO IL CODICE PRENOTAZIONE PNR RANDOMICO
  pnr = Math.floor(Math.random() * 99999) + 11111;
  console.log(pnr);

  document.getElementById("my-name").innerHTML = nomeCognome;
  document.getElementById("my-netprice").innerHTML = netPrice.toFixed(2);
  document.getElementById("my-ticket-type").innerHTML = ticketType;
  document.getElementById("my-pnr").innerHTML = pnr;
}
)

//CREO UN BLOCCO DI CODICE CHE VIENE ESEGUITO SOLO QUANDO AVVIENE IL CLICK SUL BUTTON AZZERA PER AZZERARE I CAMPI
btnAnnulla.addEventListener("click", function () {
  //location.reload(); EFFETTUA IL RELOAD DELL'INTERA PAGINA
  //SVUOTO TUTTI I CAMPI AL CLICK DI btnAnnulla
  nomeCognomeInputElement.value = "";
  kmInputElement.value = "";
  etaInputElement.value = "";
  document.getElementById("my-name").innerHTML = "";
  document.getElementById("my-ticket-type").innerHTML = "";
  document.getElementById("my-pnr").innerHTML = "";
  document.getElementById("my-netprice").innerHTML = "";
})



