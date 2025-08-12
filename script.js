function verificar() {
    const resp = document.getElementById("respuesta").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado");
    if (resp === "correcto") {
        resultado.textContent = "✅ ¡Respuesta correcta!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ Intenta de nuevo.";
        resultado.style.color = "red";
    }
}
