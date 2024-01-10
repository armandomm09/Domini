document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementsByClassName("pitForm");
    let teamNumberInput = document.getElementById("numero_equipo");
    const teamNumberError = document.getElementById("teamNumberError");

    const wheelType = document.getElementById("wheel-type")
    
    const enableAndRequire = (field, label) => {
        field.setAttribute("required", "")
        label.classList.add("required")
        field.style.display = "inline"
        label.style.display = "inline"
        field.addEventListener("change", () => {
        wheelType.value = field.value
        })
    }

    const disableAndOptional =(field, label) => {
        field.removeAttribute("required")
        label.classList.remove("required")
        field.style.display = "none"
        label.style.display = "none"


    }


    const showOtherWheelOption = (value) => {

    const wheelTypeOther = document.getElementById("wheel-type-other")
    const labelWheelTypeOther = document.querySelector("label[for=wheel-type-other]")
    const otherWheelRequiredIcon = document.getElementById("other-wheel-required-icon")
    
    if(value === "other"){
        enableAndRequire(wheelTypeOther, labelWheelTypeOther);
    } else {
        disableAndOptional(wheelTypeOther, labelWheelTypeOther)
    }


}

    const validateWheelOption = () => {

    showOtherWheelOption(wheelType.value)

    wheelType.addEventListener("change", () => {
        showOtherWheelOption(wheelType.value)

    })}

    const inputsAll = document.querySelectorAll(".programming-language-input")

    const subvalidateProgrammingLanguage = (input, img) =>{

    
            if(input.checked === true || input.matches(":hover")) {
                img.style.filter = "grayscale(0%)"
    
            }else if(input.matches(":active")) {
                img.style.filter = "grayscale(100%)";
    
            } else {
                img.style.filter = "grayscale(100%)";
    
            }
        }

    const validateProgrammingLanguage = (inputs) => {
        
        inputs.forEach(function(radio){
            let languageID = radio.id
            const languageInput = document.getElementById(languageID)
            const imgElement = document.getElementById(languageID+"-logo")

                subvalidateProgrammingLanguage(languageInput, imgElement)
            })
        }


        const radioGroup = document.getElementsByClassName("preguntas-radio")[0]
        radioGroup.addEventListener("mouseover", () => {

        validateProgrammingLanguage(inputsAll)
    })

    validateWheelOption();
        

})