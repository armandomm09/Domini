document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById('formularioPit');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Crear un objeto FormData para manejar el formulario y la imagen
      let formData = new FormData(form);
      
      // Obtener el archivo de imagen del campo "imagenes_equipo"
      let imagenEquipo = document.getElementById('imagenes_equipo').files[0];
      
      // Agregar la imagen al objeto FormData
      formData.append('imagenes_equipo', imagenEquipo);
  
      // Realizar la solicitud fetch
      fetch("https://script.google.com/macros/s/AKfycbzdGr1A16C_sTQXnMaIv5VvGAE9GzUEu0vnY-54ZMCWRoW-znsWPu1x1ms8yYR-Pbgu8w/exec", {
          method: "POST",
          body: formData
        })
        .then(res => res.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });
  });
  