document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });
    });
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('back-to-top').style.display = 'block';
    } else {
        document.getElementById('back-to-top').style.display = 'none';
    }
};
// Başlanğıcda 'light-theme' tətbiq etmək
document.body.classList.add('light-theme');
// filepath: c:\Users\abbas\Documents\Front_Projects\SimpleCommandsHtmlCssJs\script.js
document.addEventListener('DOMContentLoaded', function() {
    // Tema dəyişdirici düyməsini tapırıq
    const themeToggleButton = document.getElementById('toggle-theme');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function() {
            // 'dark-theme' və 'light-theme' siniflərini dəyişirik
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');

            // İkonu dəyişirik: Dark mode və ya Light mode simgəsi
            if (document.body.classList.contains('dark-theme')) {
                themeToggleButton.textContent = '🌞'; // Gün işığı simvolu
            } else {
                themeToggleButton.textContent = '🌙'; // Ay simvolu
            }
        });
    } else {
        console.error("Düymə tapılmadı: 'toggle-theme'");
    }
});
