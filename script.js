document.addEventListener('DOMContentLoaded', function () {
    showSection('servicios');
});

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    document.querySelectorAll('.SEF-nav-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.SEF-nav-button[data-section="${sectionId}"]`).classList.add('active');
}
