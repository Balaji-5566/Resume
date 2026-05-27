// ─── Skills Data ────────────────────────────────────────────────────────────
const skills = [
    "React.js", "Hooks & Virtual DOM", "Python", "Flask",
    "JavaScript (ES6+)", "HTML5 & CSS3", "Bento UI Design",
    "XML Storage", "CustomTkinter", "AutoCAD & AutoLISP",
    "Data Structures", "ML Mathematics"
];

// ─── Render Skill Tags with staggered animation ──────────────────────────────
const skillsContainer = document.getElementById('skills-list');

skills.forEach((skill, index) => {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.innerText = skill;
    tag.style.animationDelay = `${index * 55}ms`;

    tag.addEventListener('click', () => {
        tag.classList.toggle('active');
    });

    skillsContainer.appendChild(tag);
});

// ─── Theme Toggle ─────────────────────────────────────────────────────────────
const themeBtn = document.getElementById('theme-btn');
let isLight = false;

themeBtn.addEventListener('click', () => {
    isLight = !isLight;

    if (isLight) {
        document.documentElement.style.setProperty('--bg-color', '#f1f5f9');
        document.documentElement.style.setProperty('--card-bg', '#ffffff');
        document.documentElement.style.setProperty('--card-bg-hover', '#f8fafc');
        document.documentElement.style.setProperty('--text-main', '#0f172a');
        document.documentElement.style.setProperty('--text-muted', '#475569');
        document.documentElement.style.setProperty('--border', '#cbd5e1');
        document.documentElement.style.setProperty('--glow-color', 'rgba(56, 189, 248, 0.08)');
        document.documentElement.style.setProperty('--shadow-card', '0 4px 24px rgba(0,0,0,0.1)');
        themeBtn.innerText = "Toggle Dark Theme";
    } else {
        document.documentElement.style.setProperty('--bg-color', '#0a0f1e');
        document.documentElement.style.setProperty('--card-bg', '#111827');
        document.documentElement.style.setProperty('--card-bg-hover', '#1a2235');
        document.documentElement.style.setProperty('--text-main', '#f1f5f9');
        document.documentElement.style.setProperty('--text-muted', '#8892a4');
        document.documentElement.style.setProperty('--border', '#1e2d45');
        document.documentElement.style.setProperty('--glow-color', 'rgba(56, 189, 248, 0.15)');
        document.documentElement.style.setProperty('--shadow-card', '0 4px 24px rgba(0,0,0,0.4)');
        themeBtn.innerText = "Toggle Light Theme";
    }
});

// ─── Footer Year ──────────────────────────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();