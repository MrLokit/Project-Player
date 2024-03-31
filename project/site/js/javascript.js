const themeToggle = document.getElementById('theme_toggle');
const body = document.body;
// Dark theme
if (localStorage.getItem('theme') === 'dark') {
    themeToggle.checked = true;
    applyDarkTheme();
}

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        localStorage.setItem('theme', 'dark');
        applyDarkTheme();
    } else {
        localStorage.removeItem('theme');
        applyLightTheme();
    }
});

function applyDarkTheme() {
    body.style.backgroundColor = '#202020';
    body.style.color = '#dcdcdc';
    body.classList.add('dark-theme');
}


function applyLightTheme() {
    body.style.backgroundColor = '#fff';
    body.style.color = '#000';
    body.classList.remove('dark-theme');
}

document.addEventListener('DOMContentLoaded', () => {
    body.style.visibility = 'visible';
});