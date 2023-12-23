document.addEventListener("DOMContentLoaded", function () {
  var teamNumberElement = document.getElementById('numero_equipo');
  var teamNameInput = document.getElementById('teamNameInput');
  var teamNameP = document.getElementById("teamNameP");

  teamNumberElement.addEventListener("input", async () => {
    var teamNumber = teamNumberElement.value;
    var apiKey = 'w3OVF9CiWwY1nDnbQyRHvlcDGAjvm4KvKVgKNlFbB1zCTqCn6qp0PVCqS09eCS8N';

    var url = 'https://www.thebluealliance.com/api/v3/team/frc' + teamNumber;
    
    if (teamNumber.length >= 1 && teamNumber.length <= 4) {
      try {
        var response = await fetch(url, {
          headers: {
            'X-TBA-Auth-Key': apiKey
          }
        });

        if (response.ok) {
          var data = await response.json();
          var teamName = data.nickname; // O la propiedad que desees utilizar

          teamNameP.innerText = teamName;
          teamNameInput.value = teamNameP.innerText; // Modifica el valor del input con el nombre del equipo
        } else {
          teamNameP.innerText = "Insert a valid team";
          teamNameInput.value = ""; // Puedes ajustar esto según tu lógica
        }
      } catch (error) {
        teamNameP.innerText = "Something went wrong";
        teamNameInput.value = ""; // Puedes ajustar esto según tu lógica
      }
    } else {
      teamNameP.innerText = "Insert a valid team (1-4 digits)";
      teamNameInput.value = ""; // Puedes ajustar esto según tu lógica
    }  
  });
});
