document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementsByClassName("pitForm");
    let teamNumberInput = document.getElementById("numero_equipo");
    const teamNumberError = document.getElementById("teamNumberError");

    const wheelType = document.getElementById("wheel-type")
    
    const enableAndRequire = (field, label) => {
        field.setAttribute("required", "")
        label.classList.add("required")
        field.style.display = "block"
        label.style.display = "block"

    }

    const disableAndOptional =(field, label) => {
        field.removeAttribute("required")
        label.classList.remove("required")
        field.style.display = "none"
        label.style.display = "none"


    }


    teamNumberInput.addEventListener("input", function () {
        const teamNumber = teamNumberInput.value;

        if (teamNumber.length < 1 || teamNumber.length > 4) {
           alert("El equipo debe tener entre 1 y 4 dígitos")
            // teamNumberError.innerHTML = "El equipo debe tener entre 1 y 4 dígitos";
        } else {
            teamNumberError.innerHTML = "";
        }
    });




    const showOtherWheelOption = (value) => {

    const wheelTypeOther = document.getElementById("wheel-type-other")
    const labelWheelTypeOther = document.querySelector("label[for=wheel-type-other]")
    const otherWheelRequiredIcon = document.getElementById("other-wheel-required-icon")
    
    value === "other" ?  enableAndRequire(wheelTypeOther, labelWheelTypeOther) : disableAndOptional(wheelTypeOther, labelWheelTypeOther)

}

    const validateWheelOption = () => {
    showOtherWheelOption(wheelType.value)
    wheelType.addEventListener("change", () => {
        showOtherWheelOption(wheelType.value)
    })}

    const subvalidateProgrammingLanguage = (input, img, languageID) =>{

    input.addEventListener("change",  () => {


        if(input.checked === true) {
            img.style.filter = "grayscale(0%)"
            console.log(languageID+" entro a true")
        } else {
            console.log(languageID+" entro false")
            img.style.filter = "grayscale(100%)";
        }
    })
    }

const validateProgrammingLanguage = (languageID) => {

    const languageInput = document.getElementById(languageID+"-input")
    const imgElement = document.getElementById(languageID+"-logo")
    subvalidateProgrammingLanguage(languageInput, imgElement, languageID)

        subvalidateProgrammingLanguage(languageInput, imgElement, languageID)

    }



validateProgrammingLanguage("java")
validateProgrammingLanguage("cpp")
validateProgrammingLanguage("python")
validateProgrammingLanguage("labview")





validateWheelOption();

});

