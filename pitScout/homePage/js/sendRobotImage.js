document.addEventListener("DOMContentLoaded", function () {

    let appsScriptURL = "https://script.google.com/macros/s/AKfycbz3uEWr1ntbx0dusxpS6g8lGJDgPWlMugRyiyMy7PhWsvjYr0eo30oamSErfrMIVkTaaQ/exec"
    let imageInput = document.querySelector("input[type=file]");
    let showImage = document.getElementById("showImage");

    imageInput.addEventListener("change", (event) => {
        let fileReader = new FileReader();

        fileReader.addEventListener("load", () => {
            let res = fileReader.result;
            showImage.src = res;
            let base64Img = res.split("base64,")[1]
            //console.log(base64Img);
            let imgObj = {
                base64: base64Img,
                type: imageInput.files[0].type,
                name: imageInput.files[0].name,
            }

            fetch(appsScriptURL,{
                method:"POST",
                body:JSON.stringify(imgObj)
            })
            // This line waits for the response from the server and converts it to text
            .then(r=>r.text())
            // This line logs the response data to the console
            .then(data=>console.log(data))
            
        });

        if (event.target.files.length > 0) {
            fileReader.readAsDataURL(event.target.files[0]);
        }
    });
});