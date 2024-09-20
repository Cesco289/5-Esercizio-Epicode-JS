/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1 
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*
  Stringhe: Sono dei 'Valori' compresi tra 'Apici' sia singoli che doppi, (" " o ' ') e possono essere 'Alfanumerici'.
  Numeri: Sono dei 'Valori' prettamente 'Numerici' e a differenza delle 'Stringhe' non sono compresi tra 'Apici', in JavaScript possono essere utilizzati sia i numeri 'Interi' (es. '2') sia i numeri 'Decimali' (es. '2,14').
  Booleani: Sono 'Valori' che indicano 'Vero o Falso' (True o False).
  Null: 'Null' è il risultato di una 'Variabile' a cui non è stato assegnato un 'Valore'.
  Undefined: 'Undefined' invece è il risultato di una 'Variabile' a cui il 'Valore' non è stato ben definito, ma che non è propriamente un errore di calcolo.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un 'Object' in 'JS' non è altro che una descrizione di un 'Valore' indicato tra Parentesi Graffe '{}' 
Es. indico il mio nome e ne compilo una breve descrizione (const = 'Francesco'{eta: 23, citta: Varese, altezza: 1,65, ecc.. }) */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
   let numero1 = 12;
   let numero2 = 20;
   
   console.log(numero1 + numero2);
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*
    let variabile = 'x';
    variabile = 12;

    console.log(variabile);
/*


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* 
   let nome = 'Francesco'
   console.log(nome)
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*
   let variabile = 'x';
   let numero = 4;
   variabile = 12;

   console.log(variabile - numero)
*/


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/*
let name1 = 'john'
let name2 = 'John'

console.log(name1 == name2);
*/

/*
let name1 = 'john';
let name2 = 'John';
name1 = name1.toLowerCase();
name2 = name2.toLowerCase();

console.log(name1 == name2)
*/