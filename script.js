const properName = prompt (`Qual'è il tuo nome?`);
const properSurname = prompt(`Qual'è il tuo cognome?`);
const favColor = prompt(`Qual'è il tuo colore preferito?`);
const favNumber = prompt (`Qual'è il tuo numero preferito?`);

const newPassword = properName + properSurname + favColor + favNumber;

document.getElementById (`password`).innerHTML = `La tua password è: ${newPassword}`;



const numero1 = parseInt(prompt(`Dammi un numero`));
const numero2 = parseInt(prompt(`Dammi un altro numero`));

document.getElementById (`fav-number`).innerHTML = numero1 + numero2 + 1