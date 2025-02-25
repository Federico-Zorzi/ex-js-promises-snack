// # SNACK 2
/* 
Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e 
la Promise va in reject.

🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".
*/

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function lanciaDado() {
  return new Promise((resolve, reject) => {
    const perc = getRandomNumber(5);
    if (perc !== 1) {
      setTimeout(() => {
        const diceRoll = getRandomNumber(6);
        resolve(diceRoll);
      }, 3000);
    } else
      reject(
        "Errore durante l'operazione. Non è stato possibile lanciare il dado"
      );
  });
}

function creaLanciaDado() {
  let lastValue = 0;

  return function () {
    return new Promise((resolve, reject) => {
      const perc = getRandomNumber(5);
      if (perc !== 1) {
        setTimeout(() => {
          const diceRoll = getRandomNumber(6);
          /* console.log("diceRoll: ", diceRoll, " lastValue: ", lastValue); */

          if (diceRoll === lastValue)
            console.log(
              `Incredibile! è uscito due volte il numero ${diceRoll}`
            );

          lastValue = diceRoll;
          resolve(diceRoll);
        }, 3000);
      } else
        reject(
          "Errore durante l'operazione. Non è stato possibile lanciare il dado"
        );
    });
  };
}

lanciaDado()
  .then((data) => console.log("Lancio del dado: ", data))
  .catch((error) => console.error("Err: ", error));

const diceRoll = creaLanciaDado();
diceRoll()
  .then((data) => console.log("Primo Lancio del dado: ", data))
  .catch((error) => console.error("Err: ", error));

diceRoll()
  .then((data) => console.log("Secondo lancio del dado: ", data))
  .catch((error) => console.error("Err: ", error));

diceRoll()
  .then((data) => console.log("Terzo lancio del dado: ", data))
  .catch((error) => console.error("Err: ", error));

diceRoll()
  .then((data) => console.log("Quarto lancio del dado: ", data))
  .catch((error) => console.error("Err: ", error));

diceRoll()
  .then((data) => console.log("Quinto lancio del dado: ", data))
  .catch((error) => console.error("Err: ", error));
