// boutons et sections
const randomJokeBtn = document.getElementById("random-joke-btn");
const randomJokeText = document.getElementById("random-joke-text");
const getJokeBtn = document.getElementById("get-joke-btn");
const jokeIdInput = document.getElementById("joke-id");
const jokeResult = document.getElementById("joke-result");
const addJokeBtn = document.getElementById("add-joke-btn");
const jokeQuestionInput = document.getElementById("joke-question");
const jokeAnswerInput = document.getElementById("joke-answer");
const allJokesBtn = document.getElementById("all-jokes-btn");
const allJokesTable = document.querySelector("#allJokesTable");
let jokesTableVisible = false;

// Fonction pour obtenir une blague aléatoire
randomJokeBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:5007/jokes/random");
    const data = await response.json();
    randomJokeText.textContent = `${data.question} - ${data.answer}`;
  } catch (error) {
    randomJokeText.textContent =
      "Une erreur est survenue, réessayez plus tard.";
  }
});

// Fonction pour consulter une blague avec un numéro
getJokeBtn.addEventListener("click", async () => {
  const jokeId = jokeIdInput.value;
  try {
    const response = await fetch(`http://localhost:5007/jokes/${jokeId}`);
    const data = await response.json();
    if (data.id) {
      jokeResult.textContent = `${data.question} - ${data.answer}`;
    } else {
      jokeResult.textContent =
        "Blague introuvable. Assurez-vous d'entrer un ID valide.";
    }
  } catch (error) {
    jokeResult.textContent = "Une erreur est survenue, réessayez plus tard.";
  }
});

// Fonction pour ajouter une blague
addJokeBtn.addEventListener("click", async () => {
  const question = jokeQuestionInput.value;
  const answer = jokeAnswerInput.value;

  if (!question || !answer) {
    alert("Veuillez entrer une question et une réponse.");
    return;
  }

  const joke = { question, answer };

  try {
    const response = await fetch("http://localhost:5007/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joke),
    });
    const data = await response.json();
    alert("Blague ajoutée avec succès !");
    jokeQuestionInput.value = "";
    jokeAnswerInput.value = "";
  } catch (error) {
    alert("Une erreur est survenue, réessayez plus tard.");
  }
});

async function loadAllJokes() {
  try {
    if (jokesTableVisible) {
      allJokesTable.innerHTML = "";
      jokesTableVisible = false;
      allJokesBtn.textContent = "Découvrir toutes les blagues Carambar";
      console.log(jokesTableVisible);
    } else {
      jokesTableVisible = true;
      console.log(jokesTableVisible);
      allJokesBtn.textContent = "Masquer toutes les blagues Carambar";

      const response = await fetch("http://localhost:5007/jokes");
      const jokes = await response.json();

      // Clear the table
      allJokesTable.innerHTML = "";

      // Add jokes to the table
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
    console.error("Erreur au chargement des blagues:", error);
    alert(
      "Erreur au chargement des blagues. Voir la console pour plus de détails."
    );
  }
}

allJokesBtn.addEventListener("click", loadAllJokes);
