document.addEventListener("DOMContentLoaded", function () {
  var teamNumberElement = document.getElementById('numero_equipo')
  var teamNameP = document.getElementById("teamNameP")

  teamNumberElement.addEventListener("input", async () => {
    var teamNumber = teamNumberElement.value;
    var apiKey = 'w3OVF9CiWwY1nDnbQyRHvlcDGAjvm4KvKVgKNlFbB1zCTqCn6qp0PVCqS09eCS8N';

    var url = 'https://www.thebluealliance.com/api/v3/team/frc' + teamNumber;
    
    if(teamNumber != ""){
      try {
        var response = await fetch(url, {
          headers: {
            'X-TBA-Auth-Key': apiKey
          }
        });

        if (response.ok) {
          var data = await response.json();
          var teamName = data.nickname; // Or the property you want to use

          teamNameP.innerText = teamName;
        } else {
          teamNameP.innerText = "Insert a valid team"
        }
      } catch (error) {
        //console.error('Error in the request:', error);
        teamNameP.innerText = "Something went wrong"
        
      }
    } else {
      teamNameP.innerText = "Insert a valid team error"

    }  
});

});
