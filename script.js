document.addEventListener('DOMContentLoaded', () => {
    // 1. Fade In Effect
    document.body.classList.add('loaded');

    // 2. Page Transitions
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (this.target === '_blank' || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
            e.preventDefault();
            document.body.style.opacity = '0';
            setTimeout(() => { window.location.href = href; }, 300);
        });
    });

    // 3. Mobile Menu
    window.toggleMenu = function() {
        const nav = document.getElementById('navLinks');
        nav.classList.toggle('active');
    }

    // 4. Header Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });
});
