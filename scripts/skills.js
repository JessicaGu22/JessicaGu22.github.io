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
                if (entry.isIntersecting) {
                    const fill = entry.target.querySelector(".proficiency-fill");
                    if (fill) {
                        fill.style.width = proficiencyValue[entry.target.dataset.proficiency] + "%";
                    }
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    document.querySelectorAll(".skill-card").forEach((card) => observer.observe(card));
}

// Filter, search, sort, and update both list and chart
function updateSkills() {
    const category = categoryFilter.value;
    const searchText = skillSearch.value.toLowerCase();
    const sortValue = sortSelect.value;

    filteredSkills = skills.filter((skill) => {
        const matchCategory = category === "all" || skill.category === category;
        const matchSearch = skill.name.toLowerCase().includes(searchText);
        return matchCategory && matchSearch;
    });

    if (sortValue === "proficiency-asc") {
        filteredSkills.sort(
            (a, b) => proficiencyValue[a.proficiency] - proficiencyValue[b.proficiency]
        );
    } else if (sortValue === "proficiency-desc") {
        filteredSkills.sort(
            (a, b) => proficiencyValue[b.proficiency] - proficiencyValue[a.proficiency]
        );
    } else if (sortValue === "name-asc") {
        filteredSkills.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === "name-desc") {
        filteredSkills.sort((a, b) => b.name.localeCompare(a.name));
    }

    renderSkills(filteredSkills);
    updateChart(filteredSkills);
}

// Modal open/close
function openModal(skill) {
    modalSkillName.textContent = skill.name;
    modalSkillDetails.textContent = skill.details || "No additional details.";
    modalEndorsements.innerHTML = "";

    if (skill.endorsements.length) {
        const ul = document.createElement("ul");
        skill.endorsements.forEach((endorsement) => {
            const li = document.createElement("li");
            li.textContent = endorsement;
            ul.appendChild(li);
        });
        modalEndorsements.appendChild(ul);
    } else {
        modalEndorsements.textContent = "No endorsements yet.";
    }

    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    modal.focus();
}

function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    darkModeToggle.setAttribute("aria-pressed", isDark.toString());
}

// Chart update
function updateChart(skillsData) {
    const categories = ["Coding", "Creative", "Academic"];
    const averages = categories.map((cat) => {
        const filtered = skillsData.filter((skill) => skill.category === cat);
        if (!filtered.length) return 0;
        const total = filtered.reduce((sum, skill) => sum + proficiencyValue[skill.proficiency], 0);
        return total / filtered.length;
    });

    const ctx = document.getElementById("skillChart").getContext("2d");

    if (chart) {
        chart.data.datasets[0].data = averages;
        chart.update();
    } else {
        chart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: categories,
                datasets: [{
                    label: "Average Proficiency",
                    data: averages,
                    fill: true,
                    backgroundColor: "rgba(77, 150, 255, 0.4)",
                    borderColor: "#4d96ff",
                    pointBackgroundColor: "#4d96ff",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#4d96ff",
                }]
            },
            options: {
                scales: {
                    r: {
                        min: 0,
                        max: 100,
                        ticks: { stepSize: 20 },
                        pointLabels: { font: { size: 14 } }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
}

// Event Listeners
categoryFilter.addEventListener("change", updateSkills);
skillSearch.addEventListener("input", updateSkills);
sortSelect.addEventListener("change", updateSkills);
darkModeToggle.addEventListener("click", toggleDarkMode);
modalCloseBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
        closeModal();
    }
});

// Initialize on page load
updateSkills();
