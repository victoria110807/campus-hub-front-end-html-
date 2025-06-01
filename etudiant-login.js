document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      nom: document.getElementById("nom").value,
      eadid: document.getElementById("eadid").value,
      motdepasse: document.getElementById("mdp").value,
      option: form.option.value,
      niveau: form.niveau.value
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/etudiant-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Connexion réussie !");
        console.log("Serveur a répondu :", result);
      } else {
        alert("Échec de la connexion.");
      }
    } catch (error) {
      alert("Erreur lors de l’envoi : " + error.message);
    }
  });
});
