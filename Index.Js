// Create helper function for elements
function createElement(tag, text, attributes = {}) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

// Header
const header = createElement("header");
const h1 = createElement("h1", "Yuvarani R");
const p = createElement("p", "Computer Science Student");
header.appendChild(h1);
header.appendChild(p);
document.body.appendChild(header);

// Navigation
const nav = createElement("nav");
const navLinks = [
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" }
];
navLinks.forEach((link, i) => {
    const a = createElement("a", link.text, { href: link.href });
    nav.appendChild(a);
    if (i < navLinks.length - 1) nav.append(" | ");
});
document.body.appendChild(nav);

// About Section
const about = createElement("section", null, { id: "about" });
about.appendChild(createElement("h2", "About Me"));
about.appendChild(
    createElement(
        "p",
        "I am a passionate Computer Science student interested in web development, machine learning, and open-source projects."
    )
);
document.body.appendChild(about);

// Projects Section
const projects = createElement("section", null, { id: "projects" });
projects.appendChild(createElement("h2", "Projects"));

const project1 = createElement("div");
project1.appendChild(createElement("h3", "Weather App"));
project1.appendChild(
    createElement("p", "A simple weather application using OpenWeatherMap API.")
);

const project2 = createElement("div");
project2.appendChild(createElement("h3", "Portfolio Website"));
project2.appendChild(
    createElement(
        "p",
        "This portfolio is a showcase of my work and skills using HTML, CSS, and JavaScript."
    )
);

projects.appendChild(project1);
projects.appendChild(project2);
document.body.appendChild(projects);

// Contact Section
const contact = createElement("section", null, { id: "contact" });
contact.appendChild(createElement("h2", "Contact Me"));

const form = createElement("form");
form.appendChild(createElement("input", null, { type: "text", placeholder: "Yuvarani R", required: true }));
form.appendChild(createElement("br"));
form.appendChild(createElement("br"));
form.appendChild(createElement("input", null, { type: "email", placeholder: "ryuvarani18@gmail.com", required: true }));
form.appendChild(createElement("br"));
form.appendChild(createElement("br"));
form.appendChild(createElement("textarea", null, { placeholder: "Your Message", required: true }));
form.appendChild(createElement("br"));
form.appendChild(createElement("br"));
form.appendChild(createElement("button", "Send", { type: "submit" }));

contact.appendChild(form);
document.body.appendChild(contact);

// Footer
const footer = createElement("footer");
footer.appendChild(createElement("p", "© 2025 Yuvarani R. All rights reserved."));
document.body.appendChild(footer);
