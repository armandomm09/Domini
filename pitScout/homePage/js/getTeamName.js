document.addEventListener("DOMContentLoaded", function () {
  var teamNumberElement = document.getElementById('numero_equipo');
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
          
          // Checa si la respuesta tiene formato JSON
          if (data && data.nickname) {
            var teamName = data.nickname; 
            teamNameP.innerText = teamName;
          } else {
            teamNameP.innerText = "Team not found";
          }
        } else {
          teamNameP.innerText = "Team not found";
          console.clear()
        }
      } catch (error) {
        // console.error('Error en la solicitud:', error);
        teamNameP.innerText = "Something went wrong";
      }
    } else {
      teamNameP.innerText = "Insert a valid team (1-4 digits)";
    }  
  });
});
