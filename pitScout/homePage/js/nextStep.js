document.addEventListener("DOMContentLoaded", function () {


    let homePageSection = document.getElementById("homePageSection");
    let programmingSection = document.getElementById("programmingSection");
    let driversSection = document.getElementById("driversSection");
    let backButton = document.getElementById("back-button")
    let nextButton = document.getElementById("next-button");

    var counter = 0;

    console.log(counter)

    const disableButton = (button) => {
        button.disabled = true;
        button.style = "background-color: #3b1e17"
    }

    const enableButton = (button) => {
        button.disabled = false;
        button.style = "background-color: #ff5733;"
    }
    
    disableButton(backButton);

    const checkPage = pageCounter => {

        switch(pageCounter){
            case 0:
                homePageSection.style = "display: inline;"
                driversSection.style = "display: none;"
                programmingSection.style = "display: none;"
                disableButton(backButton);
                enableButton(nextButton)
                break;
            case 1:
                homePageSection.style = "display: none;"
                driversSection.style = "display: none;"
                programmingSection.style = "display: inline;"
                enableButton(backButton);
                enableButton(nextButton)
                break;
            case 2:
                homePageSection.style = "display: none;"
                programmingSection.style = "display: none;"
                driversSection.style = "display: inline;"
                disableButton(nextButton);
                enableButton(backButton)
                break;
        }

    }
    
    backButton.addEventListener("click", () => {
        counter -= 1;
        checkPage(counter)
        console.log(counter)

    })

    nextButton.addEventListener("click", () => {
        counter += 1;
        checkPage(counter)
        console.log(counter)

    })

})