// Dynamic Options for Day-Scholars and Hostellers
const options = {
    "day-scholar": [
        "Rental Rooms",
        "Nearest Hotel",
        "Nearest Restaurant and Dhaba",
        "Nearest Medical and Hospital",
        "Nearest Digital Accessories Shop",
        "Transport Timings (Buses, Autos, Vans)"
    ],
    "hosteller": [
        "Nearest Hotel",
        "Nearest Restaurant and Dhaba",
        "Photocopy Options Outside",
        "Places to Visit on Outings",
        "Cabs/Transport to Airport or Railway Station"
    ]
};

// Redirect to pages based on options clicked
function redirectTo(page) {
    alert(`Redirecting to: ${page}`); // Replace this with actual redirection
}

// FAQ Toggle
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isExpanded = answer.style.maxHeight;
    const plusMinus = element.querySelector("span");

    if (isExpanded) {
        answer.style.maxHeight = null;
        plusMinus.textContent = "+";
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        plusMinus.textContent = "-";
    }
}

// Add animation to navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

