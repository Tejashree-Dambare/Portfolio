// ================= DARK MODE =================

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});



// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );


    contactForm.reset();

});