document.addEventListener("DOMContentLoaded", function () {
    const sections = [
        document.getElementById("homePageSection"),
        document.getElementById("prematchSection"),
        document.getElementById("autoSection"),
        document.getElementById("teleopSection"),
        document.getElementById("endgameSection"),
        document.getElementById("postMatchSection")
    ];

    const backButton = document.getElementById("back-button");
    const nextButton = document.getElementById("next-button");

    let counter = 0;

    const disableButton = (button) => {
        button.disabled = true;
        button.style.backgroundColor = "#3b1e17";
    };

    const enableButton = (button) => {
        button.disabled = false;
        button.style.backgroundColor = "#ff5733";
    };

    const enableSection = (index) => {
        sections.forEach((section, i) => {
            section.style.display = i === index ? "inline" : "none";
        });
    };

    const checkPage = (pageCounter) => {
        enableSection(pageCounter);

        if (pageCounter === 0) {
            disableButton(backButton);
            enableButton(nextButton);
        } else if (pageCounter === sections.length - 1) {
            enableButton(backButton);
            disableButton(nextButton);
        } else {
            enableButton(backButton);
            enableButton(nextButton);
        }
    };

    backButton.addEventListener("click", () => {
        counter = Math.max(0, counter - 1);
        checkPage(counter);
        console.log(counter);
    });

    nextButton.addEventListener("click", () => {
        counter = Math.min(sections.length - 1, counter + 1);
        checkPage(counter);
        console.log(counter);
    });

    // Inicializar la página
    checkPage(counter);
});
