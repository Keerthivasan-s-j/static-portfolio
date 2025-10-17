const header = document.querySelector('header');
const heroText = document.querySelector('.hero-text');

window.addEventListener('scroll', () => {
    // Distance from top of viewport to top of hero-text
    const heroTop = heroText.getBoundingClientRect().top;

    // If hero text top is at or above header height
    if (heroTop <= header.offsetHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


var typed = new Typed('#typed-role', {
    strings : ["Software", "Full-Stack", "Python", "Web"],
    typeSpeed: 100,
    backSpeed: 60,
    loop : true
})

const skills = {
    "programming": {
        "beginner": ["C", "JavaScript"],
        "intermediate": ["Java"],
        "expert": ["Python"]
    },
    "web": {
        "beginner": ["HTML", "CSS"],
        "intermediate": ["Django"],
        "expert": []
    },
    "database": {
        "beginner": ["SQL", "Git"],
        "intermediate": ["GitHub"],
        "expert": ["Microsoft Azure", "MySQL"]
    },
    "softskills": {
        "beginner": ["Adaptable", "Quick Learning"],
        "intermediate": ["Time Management"],
        "expert": ["Problem Solving"]
    },
    "tools": {
        "beginner": ["VS Code", "IntelliJ", "Eclipse"],
        "intermediate": [],
        "expert": []
    }
}
