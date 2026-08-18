/* =========================================================
   AQUALOGIC — MASTER INTERACTIVE SCRIPT
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE MENU TOGGLE & SWITCH IKON
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Ubah ikon antara Hamburger (garis 3) dan Silang (X)
            if (menuIcon) {
                if (navMenu.classList.contains('active')) {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-xmark');
                } else {
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            }
        });

        // Tutup menu otomatis saat item navigasi diklik
        document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            });
        });
    }

    // 2. NAVBAR SCROLL & SHADOW EFFECT
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.classList.add('scrolled');
                navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // 3. CUSTOM CURSOR TRACKING (Desktop Only)
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (cursorDot && cursorOutline && window.innerWidth > 768) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 400, fill: "forwards" });
        });

        const hoverTargets = document.querySelectorAll('.hover-target, a, button, .card, .info-card, .team-card, .ops-card, .timeline-box, .risk-card');
        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            target.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    }

    // 4. CARD SPOTLIGHT EFFECT
    const cards = document.querySelectorAll('.info-card, .team-card, .ops-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
