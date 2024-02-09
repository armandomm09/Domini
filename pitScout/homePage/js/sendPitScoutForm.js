document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById('formularioPit');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    let formData = new FormData(form);
    
    let formDataObject = {};
      formData.forEach((value, key) => {
      formDataObject[key] = value;
      });

    const response = await fetch("https://script.google.com/macros/s/AKfycbzrkxwXmTV6d95ZIRWN5qKXlnCJePq7isTaq6KKKBZhz6x9WucB199XMjwJ1ayCUzEAXQ/exec", {
        method: "POST",
        body: JSON.stringify(formDataObject)
      })
      .then(res => res.text())
      .then(data => data === "Se logro" ? document.getElementById("submitSuccess").classList.remove("visually-hidden") : document.getElementById("submitSuccess").classList.add("visually-hidden"))
      .catch(error => console.error('Error:', error));

      

      console.log(formDataObject)

  
    //window.location.href = "/pitScout/autonomous/auto.html"
  });
});


/*
  {"teamNameInput":"The Green Machine",
  "numero_equipo":"352",
  "tipoDeChasis":"Swerve",
  "motorsChassisSelect":"Neo 550",
  "booleanTest":"true",
  "robotWeightSelect":"X",
  "tipoDeLlanta":"omni",
  "robotMeasureSelect":"X",
  "hasVisionSelect":"Select option",
  "visionProcessSelect":"Select option",
  "numberOfCamerasInput":"","
  poseEstimationSelect":"Select option"}
*/