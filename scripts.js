function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

// Exibir a seção "Sobre Nós" por padrão
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});