document.addEventListener("DOMContentLoaded", function () {


    const reliability  = document.getElementById("overall-reliability-select")


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


    const showOtherReliabilityOption = (value) => {

        const otherReliability = document.getElementById("reliability-other")
        const labelOtherReliability = document.querySelector("label[for=reliability-other]")
        
        value === "other" ?  enableAndRequire(otherReliability, labelOtherReliability) : disableAndOptional(otherReliability, labelOtherReliability)
    
    }

    const validateReliabilityOption = () => {

        showOtherReliabilityOption(reliability.value)
    
        reliability.addEventListener("change", () => {
            showOtherReliabilityOption(reliability.value)
    
        })}

        validateReliabilityOption();
})