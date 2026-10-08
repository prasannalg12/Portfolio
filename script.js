// Smooth scrolling for navigation

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const section = document.querySelector(
            link.getAttribute("href")
        );

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Project buttons

const projectButtons =
    document.querySelectorAll(".project-btn");

projectButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Project details coming soon ✦");

    });

});


// Small movement effect for paper elements

document.addEventListener("mousemove", function(event) {

    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    const note = document.querySelector(".hero-bottom-note");

    if (note) {

        note.style.transform =
            `translate(${x * 5}px, ${y * 5}px) rotate(-5deg)`;

    }

});