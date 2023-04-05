const properName = prompt (`Qual'è il tuo nome?`);
const properSurname = prompt(`Qual'è il tuo cognome?`);
const favColor = prompt(`Qual'è il tuo colore preferito?`);
const favNumber = prompt (`Qual'è il tuo numero preferito?`);

// const newPassword = properName + properSurname + favColor + favNumber;

const newPassword = `<span style="font-size: 50px;">${properName}</span><span style="color: green;">${properSurname}</span><span style="color: red;">${favColor}</span><span style="font-size:80px;">${favNumber}</span>`;

document.getElementById (`password`).innerHTML = `La tua password è: ${newPassword}`;


const numero1 = parseInt(prompt(`Dammi un numero`));
const numero2 = parseInt(prompt(`Dammi un altro numero`));

const favNumbers = parseInt(numero1) + parseInt(numero2);

document.getElementById (`fav-number`).innerHTML = `Il mio numero preferito è: ${favNumbers}`;

