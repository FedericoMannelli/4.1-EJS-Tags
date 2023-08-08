

// Importa il modulo Express per creare un server web.
import express from "express";

// Crea un'istanza di Express e assegna la variabile 'app'.
const app = express();

// Definisce la porta su cui il server ascolterà le richieste.
const port = 3000;

// Definisce un route per l'URL di root ('/').
app.get("/", (req, res) => {
  // Crea un oggetto 'data' contenente variabili da passare al template EJS.
  const data = {
    title: "EJS Tags", // Titolo per il template
    seconds: new Date().getSeconds(), // Secondi attuali
    items: ["apple", "banana", "cherry"], // Array di frutti
    htmlContent: "<em>This is some em text</em>", // Contenuto HTML
  };

  // Renderizza il template "index.ejs" e passa l'oggetto 'data' al template.
  res.render("index.ejs", data);
});

// Avvia il server e inizia ad ascoltare le richieste in arrivo sulla porta specificata.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
Spiegazione:

1. Viene importato il modulo Express per creare il server web: import express from "express";.

2. Viene creata un'istanza di Express e assegnata alla variabile app: const app = express();.

3. Viene definita la porta su cui il server ascolterà le richieste: const port = 3000;.

4. Viene definito un route per l'URL di root (/).
   Quando si accede all'URL di root, viene creato un oggetto data contenente variabili che verranno passate al template EJS.

5. Nel template EJS index.ejs, 
   le variabili dell'oggetto data (come title, seconds, items e htmlContent) saranno disponibili per generare contenuto dinamico sulla pagina.

6. res.render("index.ejs", data) indica che il template "index.ejs" verrà reso utilizzando i dati contenuti nell'oggetto data.

7. Il server viene avviato e messo in ascolto sulla porta 3000 utilizzando app.listen(port, ...). 
   Una volta avviato, il server sarà pronto per gestire le richieste in arrivo sulla porta specificata.

Questo codice utilizza Express e EJS per creare un server web che genera pagine dinamiche basate sui dati forniti e sul template EJS.



import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

*/
