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
      fetch("https://script.google.com/macros/s/AKfycbyPdw70vFN5b8lPAi3PP-RTSCsXX4weHD2o1U0cCk4d5INwCDmP-pBXpL5mtznMt4j06g/exec", {
          method: "POST",
          body: formData
        })
        .then(res => res.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });
  });
  