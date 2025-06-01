document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      nom: document.getElementById("nom").value,
      eadid: document.getElementById("eadid").value,
      motdepasse: document.getElementById("mdp").value,
      fonction: document.getElementById("fonction").value
    };

    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    alert(result.message); // Affiche "Connexion réussie"
  });
});
