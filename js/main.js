let age = 0;
let voucher = 0;
let netPrice = 0;
let km = 0;

const nomeCognomeInputElement = document.querySelector("[name='nome-cognome']");
const etaInputElement = document.querySelector("[name='age']");
const kmInputElement = document.querySelector("[name='km']");
const btnLogin = document.querySelector(".invia-dati");

console.dir(nomeCognomeInputElement);
console.dir(etaInputElement);
console.dir(kmInputElement);
console.dir(btnLogin);

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

