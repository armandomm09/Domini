document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementsByClassName("pitForm");
    let teamNumberInput = document.getElementById("numero_equipo");
    const teamNumberError = document.getElementById("teamNumberError");

    teamNumberInput.addEventListener("input", function () {
        const teamNumber = teamNumberInput.value;

        if (teamNumber.length < 1 || teamNumber.length > 4) {
            teamNumberError.innerHTML = "El equipo debe tener entre 1 y 4 dígitos";
        } else {
            teamNumberError.innerHTML = "";
        }
    });

    form.addEventListener("submit", function() {
        alert("Datos enviados!!")
    })

});

