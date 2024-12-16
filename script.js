// Button Scroll to Documentation
document.getElementById("get-started").addEventListener("click", () => {
    document.getElementById("documentation").scrollIntoView({ behavior: "smooth" });
});

// Code Execution Example
document.getElementById("run-code").addEventListener("click", () => {
    const code = document.getElementById("code-editor").value;
    const output = document.getElementById("output");

    // Simulated output (since real C execution isn't possible here)
    output.textContent = "Résultat : Code exécuté avec succès !";
});

// FAQ Form Submission
document.getElementById("faq-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Votre question a été envoyée !");
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Merci pour votre message !");
});
