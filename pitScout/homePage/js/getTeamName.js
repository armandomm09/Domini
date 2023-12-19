document.addEventListener("DOMContentLoaded", function () {
  var teamNumberElement = document.getElementById('numero_equipo')
  var teamNameP = document.getElementById("teamNameP")

  teamNumberElement.addEventListener("change", async () => {
    var teamNumber = teamNumberElement.value;
    var apiKey = 'w3OVF9CiWwY1nDnbQyRHvlcDGAjvm4KvKVgKNlFbB1zCTqCn6qp0PVCqS09eCS8N';

    var url = 'https://www.thebluealliance.com/api/v3/team/frc' + teamNumber;

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
        console.error('Error fetching team data');
      }
    } catch (error) {
      console.error('Error in the request:', error);
    }
});

});
