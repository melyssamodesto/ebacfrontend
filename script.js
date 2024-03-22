document.addEventListener("DOMContentLoaded", function() {
    var submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", validarFormulario);
});

function validarFormulario() {
    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;

    // Verifica se o número B é maior que o número A
    if (parseInt(campoB) > parseInt(campoA)) {
        alert("Formulário válido! Número B é maior que o número A.");
    } else {
        alert("Formulário inválido! Número B deve ser maior que o número A.");
    }
}