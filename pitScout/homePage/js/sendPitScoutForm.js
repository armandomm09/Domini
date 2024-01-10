document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById('formularioPit');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Crear un objeto FormData para manejar el formulario y la imagen
      let formData = new FormData(form);
      
      // Obtener el archivo de imagen del campo "imagenes_equipo"
      let imagenEquipo = document.getElementById('imagenes_equipo').files[0];
      
      // Agregar la imagen al objeto FormData
      formData.append('imagenes_equipo', imagenEquipo);
  
      // Realizar la solicitud fetch
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
  