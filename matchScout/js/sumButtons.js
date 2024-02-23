document.addEventListener('DOMContentLoaded', function() {

    var restButtons = document.querySelectorAll('.restButton');

    restButtons.forEach(function(button) {
       
        button.addEventListener('click', function() {
            var input = button.nextElementSibling;

            if(input.value > 0)
            input.value = parseInt(input.value) - 1;

        });
    });

    var sumButtons = document.querySelectorAll('.sumButton');

    sumButtons.forEach(function(button) {

        button.addEventListener('click', function() {

            var input = button.previousElementSibling;

            input.value = parseInt(input.value) + 1;
        });
    });
});

/*
document.addEventListener('DOMContentLoaded', function() {

    var restButtons = document.querySelectorAll('.restButton');

    let restButton1 = document.getElementById("restButton1");
    let input = restButton1.nextElementSibling;

    restButton1.addEventListener("")
});
*/