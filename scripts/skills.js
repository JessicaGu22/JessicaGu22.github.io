document.addEventListener("DOMContentLoaded", function () {

    const categoryFilter = document.getElementById('category-filter');
    const skillSearch = document.getElementById('skill-search');
    const rows = document.querySelectorAll('#skill-table tr[data-category]');

    function filterSkills() {
        const selectedCategory = categoryFilter.value.toLowerCase();
        const searchQuery = skillSearch.value.toLowerCase();

        rows.forEach(row => {
            const skill = row.children[0].textContent.toLowerCase();
            const category = row.dataset.category.toLowerCase();

            const matchCategory = selectedCategory === 'all' || category === selectedCategory;
            const matchSearch = skill.includes(searchQuery);

            row.style.display = matchCategory && matchSearch ? '' : 'none';
        });
    }

    if (categoryFilter && skillSearch) {
        categoryFilter.addEventListener('change', filterSkills);
        skillSearch.addEventListener('input', filterSkills);
    }

    const ctx = document.getElementById('skillChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'Geometry', 'Baking'],
                datasets: [{
                    label: 'My Skill Levels',
                    data: [5, 3, 5, 3, 5, 3],
                    backgroundColor: 'rgba(77, 150, 255, 0.2)',
                    borderColor: 'rgba(77, 150, 255, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: '#4D96FF'
                }]
            },
            options: {
                scales: {
                    r: {
                        min: 0,
                        max: 5,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }
});
