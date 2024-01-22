document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById('formularioPit');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      let formData = new FormData(form);
      
      let imagenEquipo = document.getElementById('imagenes_equipo').files[0];
      
      formData.append('imagenes_equipo', imagenEquipo);
  
      const response = await fetch("https://script.google.com/macros/s/AKfycbzdGr1A16C_sTQXnMaIv5VvGAE9GzUEu0vnY-54ZMCWRoW-znsWPu1x1ms8yYR-Pbgu8w/exec", {
          method: "POST",
          body: formData
        })
        .then(res => res.text())
        .then(data => data === "Se logro" ? document.getElementById("submitSuccess").classList.remove("visually-hidden") : document.getElementById("submitSuccess").classList.add("visually-hidden"))
        .then()  
        .catch(error => console.error('Error:', error));


      window.location.href = "/pitScout/autonomous/auto.html"
    });
  });
  