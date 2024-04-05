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

    const response = await fetch("https://script.google.com/macros/s/AKfycbzmU0MhUQlOBhUVO_hrUA75WwjuTc_cCJi2siQZog_fLM2nJJk5mDn4ESVl-o70ArPT/exec", {
        method: "POST",
        body: JSON.stringify(formDataObject)
      })
      .then(res => res.text())
      .then(data => data === "Se logro" ? document.getElementById("submitSuccess").classList.remove("visually-hidden") : document.getElementById("submitSuccess").classList.add("visually-hidden"))
      .catch(error => console.error('Error:', error));

      

      console.log(formDataObject)

  
  });
});


