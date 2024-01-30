document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById('formularioPit');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      let formData = new FormData(form);
      
  
      const response = await fetch("https://script.google.com/macros/s/AKfycbyLtsbbK-pjGzq3Dgy3WmbjAuw7nJN8FWOchWSVcXwXYCI39znd7bYQW9arfwHvI3iLKg/exec", {
          method: "POST",
          body: formData
        })
        .then(res => res.text())
        .then(data => data === "Se logró" ? document.getElementById("submitSuccess").classList.remove("visually-hidden") : document.getElementById("submitSuccess").classList.add("visually-hidden"))
        .then()  
        .catch(error => console.error('Error:', error));


      //window.location.href = "/pitScout/autonomous/auto.html"
    });
  });
  