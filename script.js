document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    const slideRightElements = document.querySelectorAll('.slide-in-right');
    const zoomElements = document.querySelectorAll('.zoom-in');
    
    document.body.classList.add('loading');
    
    setTimeout(function() {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
        
        checkAnimations();
    }, 300);
    
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.className = savedTheme;
    updateThemeIcon(savedTheme === 'light-mode');
    
    themeToggle.addEventListener('click', function() {
        body.classList.add('mode-transition');
        
        const isLightMode = body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
        
        localStorage.setItem('theme', isLightMode ? 'light-mode' : 'dark-mode');
        
        themeIcon.style.animation = 'rotate 0.5s ease';
        setTimeout(() => {
            updateThemeIcon(isLightMode);
            themeIcon.style.animation = '';
        }, 250);
        
        setTimeout(() => {
            body.classList.remove('mode-transition');
        }, 500);
    });
    
    function updateThemeIcon(isLightMode) {
        if (isLightMode) {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }
    
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        this.querySelector('i').style.animation = 'bounce 0.5s';
        setTimeout(() => {
            this.querySelector('i').style.animation = '';
        }, 500);
    });
    
    function checkAnimations() {
        const triggerBottom = window.innerHeight * 0.8;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('appear');
            }
        });
        
        slideLeftElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('appear');
            }
        });
        
        slideRightElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('appear');
            }
        });
        
        zoomElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('appear');
            }
        });
    }
    
    window.addEventListener('scroll', checkAnimations);
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.animation = 'pulse 0.8s infinite';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.animation = '';
        });
    });
});