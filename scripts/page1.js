// Skill Data
const skills = [
    {
        name: "HTML",
        proficiency: "Advanced",
        category: "Coding",
        icon: "💻",
        details: "Experienced in building semantic, accessible HTML for responsive websites.",
        endorsements: ["W3Schools Certificate", "Portfolio Project"],
    },
    {
        name: "CSS",
        proficiency: "Intermediate",
        category: "Coding",
        icon: "🎨",
        details: "Proficient with Flexbox, Grid, animations, and responsive design techniques.",
        endorsements: ["Udemy Course Completion"],
    },
    {
        name: "JavaScript",
        proficiency: "Advanced",
        category: "Coding",
        icon: "📜",
        details: "Skilled in ES6+, DOM manipulation, and frameworks like React.",
        endorsements: ["FreeCodeCamp Full JS Certification", "Personal Projects"],
    },
    {
        name: "Python",
        proficiency: "Intermediate",
        category: "Coding",
        icon: "🐍",
        details: "Experienced with data analysis and scripting using Python.",
        endorsements: ["DataCamp Course", "Research Project"],
    },
    {
        name: "Geometry",
        proficiency: "Advanced",
        category: "Academic",
        icon: "📐",
        details: "Strong foundation in Euclidean and analytical geometry.",
        endorsements: ["Math Olympiad Winner"],
    },
    {
        name: "Baking",
        proficiency: "Intermediate",
        category: "Creative",
        icon: "🍰",
        details: "Skilled in baking cakes and pastries with creative decoration techniques.",
        endorsements: [],
    },
];

// Map proficiency to numeric value for sorting/charting
const proficiencyValue = {
    Beginner: 33,
    Intermediate: 66,
    Advanced: 100,
};

// DOM elements
const skillsContainer = document.getElementById("skills-container");
const categoryFilter = document.getElementById("category-filter");
const skillSearch = document.getElementById("skill-search");
const sortSelect = document.getElementById("sort-select");
const darkModeToggle = document.getElementById("darkModeToggle");
const downloadPDFBtn = document.getElementById("download-pdf");

const modal = document.getElementById("skillModal");
const modalSkillName = document.getElementById("modalSkillName");
const modalSkillDetails = document.getElementById("modalSkillDetails");
const modalEndorsements = document.getElementById("modalEndorsements");
const modalCloseBtn = modal.querySelector(".close");

let filteredSkills = [...skills];
let chart;

// Render skill cards with animation triggered on scroll
function renderSkills(skillsToRender) {
    skillsContainer.innerHTML = "";
    skillsToRender.forEach((skill) => {
        const card = document.createElement("div");
        card.className = "skill-card";
        card.dataset.category = skill.category;
        card.dataset.proficiency = skill.proficiency;
        card.tabIndex = 0; // keyboard accessible

        card.innerHTML = `
        <div class="skill-header">
          <span class="skill-icon" aria-hidden="true">${skill.icon}</span>
          ${skill.name}
          <span class="skill-category">${skill.category}</span>
        </div>
        <div class="proficiency-bar" aria-label="Proficiency level: ${skill.proficiency}">
          <div class="proficiency-fill ${skill.proficiency}"></div>
        </div>
        ${skill.endorsements.length
                ? `<div class="endorsement-badge" title="Endorsements: ${skill.endorsements.join(", ")}">🏅</div>`
                : ""
            }
      `;

        // Reset fill width before animation
        const fillBar = card.querySelector(".proficiency-fill");
        fillBar.style.width = "0";

        card.addEventListener("click", () => openModal(skill));
        card.addEventListener("keypress", (e) => {
            if (e.key === "Enter") openModal(skill);
        });

        skillsContainer.appendChild(card);
    });

    // Animate fill bars on scroll into view using IntersectionObserver
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (
