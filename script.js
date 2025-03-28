// Eléments du DOM
const randomJokeBtn = document.querySelector("#randomJokeBtn");
const randomJokeContent = document.querySelector("#randomJokeContent");
const lotteryJokeBtn = document.querySelector("#lotteryJokeBtn");
const jokeIdInput = document.querySelector("#jokeIdInput");
const lotteryJokeContent = document.querySelector("#lotteryJokeContent");
const addJokeBtn = document.querySelector("#addJokeBtn");
const jokeQuestionInput = document.querySelector("#jokeQuestionInput");
const jokeAnswerInput = document.querySelector("#jokeAnswerInput");
const allJokesBtn = document.querySelector("#allJokesBtn");
const allJokesTable = document.querySelector("#allJokesTable");

// Variables
let jokesTableVisible = false; // initiée à false car table de blagues caché au départ

// GET
// Fonction pour obtenir une blague aléatoire
randomJokeBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:5007/jokes/random");
    // response => objet qui contient des informations sur la réponse HTTP reçue du serveur comme le HTTP status (200 pour une requête réussie par ex), les headers, le body (ex : données JSON)
    const data = await response.json();
    // data => objet
    randomJokeContent.textContent = `${data.question} - ${data.answer}`;
    randomJokeContent.style.display = 'flex';
  } catch (error) {
    randomJokeContent.textContent =
      "Une erreur est survenue, réessaye plus tard.";
  }
});
// la méthode HTTP n'est pas explicitement définie dans l'appel fetch() donc c'est du GET
// synthaxe de base de fetch : fetch(url, options). Les options dont la méthode sont facultatives

// GET
// Fonction pour consulter une blague avec un numéro
lotteryJokeBtn.addEventListener("click", async () => {
  const jokeId = jokeIdInput.value;
  try {
    const response = await fetch(`http://localhost:5007/jokes/${jokeId}`);
    const data = await response.json();

    if (data.id) {
      lotteryJokeContent.textContent = `${data.question} - ${data.answer}`;
      lotteryJokeContent.style.display = 'flex';
    } else {
      lotteryJokeContent.textContent =
        "Pas encore de blague sous ce numéro. N'hésite pas à ajouter des blagues plus bas sur cette page !";
    }
  } catch (error) {
    lotteryJokeContent.textContent =
      "Une erreur est survenue, réessaye plus tard.";
  }
});

// POST
// Fonction pour ajouter une blague
addJokeBtn.addEventListener("click", async () => {
  const question = jokeQuestionInput.value;
  const answer = jokeAnswerInput.value;

  if (!question || !answer) {
    alert("Tous les champs doivent être remplis.");
    return;
  }

  const joke = { question, answer };

  try {
    const response = await fetch("http://localhost:5007/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // indique que le corps de la requête est en format JSON
      },
      body: JSON.stringify(joke), // objet joke converti en chaîne JSON pour pouvoir être envoyé dans le corps de la requête
    });
    // const data = await response.json();
    alert("Blague ajoutée avec succès !");
    jokeQuestionInput.value = "";
    jokeAnswerInput.value = "";
  } catch (error) {
    alert("Une erreur est survenue, réessaye plus tard.");
  }
});

async function loadAllJokes() {
  try {
    if (jokesTableVisible) {
      allJokesTable.innerHTML = "";
      jokesTableVisible = false;
      allJokesBtn.textContent = "Découvrir toutes les blagues Carambar";
    } else {
      jokesTableVisible = true;
      allJokesBtn.textContent = "Masquer toutes les blagues Carambar";

      const response = await fetch("http://localhost:5007/jokes");
      const jokes = await response.json(); // tableau d'objets, ou chaque objet est une blague

      allJokesTable.innerHTML = "";

      jokes.forEach((joke) => {
        const row = document.createElement("tr");
        row.innerHTML = `                    
                    <td>${joke.question}</td>
                    <td>${joke.answer}</td>
                `;
        allJokesTable.appendChild(row);
      });
    }
  } catch (error) {
    alert("Une erreur est survenue, réessaye plus tard.");
  }
}

allJokesBtn.addEventListener("click", loadAllJokes);