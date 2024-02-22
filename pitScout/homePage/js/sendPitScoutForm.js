document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById('formularioPit');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    let formData = new FormData(form);
    
    let formDataObject = {};
      formData.forEach((value, key) => {
        console.log(value + ": " + key)
      formDataObject[key] = value;
      });

    const response = await fetch("https://script.google.com/macros/s/AKfycbyL7sQxQ2qorIP8goz8c9v6siPeNeG3O39628aflY_esRTSGl9Sov0ARZYB-KX98r868w/exec", {
        method: "POST",
        body: JSON.stringify(formDataObject)
      })
      .then(res => res.text())
      .then(data => data === "Se logro" ? document.getElementById("submitSuccess").classList.remove("visually-hidden") : document.getElementById("submitSuccess").classList.add("visually-hidden"))
      .catch(error => console.error('Error:', error));

      

      console.log(formDataObject)

  
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