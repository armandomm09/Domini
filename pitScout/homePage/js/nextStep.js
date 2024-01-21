document.addEventListener("DOMContentLoaded", function () {


    let driversSection = document.getElementById("driversSection");
    let homePageSection = document.getElementById("homePageSection");
    let backButton = document.getElementById("back-button")
    let nextButton = document.getElementById("next-button");

    var counter = 1;

    console.log(counter)

    
    
    const checkPage = pageCounter => {

        switch(pageCounter){
            case 1:
                homePageSection.style = "display: inline;"
                driversSection.style = "display: none;"
                break;
            case 2:
                homePageSection.style = "display: none;"
                driversSection.style = "display: inline;"
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