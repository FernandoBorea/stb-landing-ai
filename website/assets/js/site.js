// Menu functionality
const menuButton = document.getElementById('menu-button');
const menuOverlay = document.getElementById('menu-overlay');
const menuClose = document.getElementById('menu-close');
let previousFocus = null;

function openMenu() {
    if (menuOverlay) {
        menuOverlay.classList.remove('opacity-0', 'pointer-events-none');
        menuOverlay.classList.add('opacity-100');
        previousFocus = document.activeElement;
        // Focus close button
        if (menuClose) {
            menuClose.focus();
        }
        // Disable body scroll
        document.body.style.overflow = 'hidden';
    }
}

function closeMenu() {
    if (menuOverlay) {
        menuOverlay.classList.remove('opacity-100');
        menuOverlay.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
        // Restore focus
        if (previousFocus) {
            previousFocus.focus();
        }
    }
}

if (menuButton) {
    menuButton.addEventListener('click', openMenu);
}

if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
}

// Close menu on Esc key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('opacity-100')) {
        closeMenu();
    }
});

// Carousel auto-scroll with pause on hover/focus
const carousel = document.getElementById('carousel-container');

function pauseCarousel() {
    if (carousel) {
        carousel.classList.add('paused');
    }
}

function resumeCarousel() {
    if (carousel) {
        carousel.classList.remove('paused');
    }
}

// Initialize carousel on load
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel-container');
    if (carousel) {
        const innerDiv = carousel.querySelector('div');
        if (innerDiv) {
            // Duplicate all logos for seamless loop
            const logos = innerDiv.querySelectorAll('img');
            
            // Clone all logos to create seamless loop (need enough for smooth scrolling)
            logos.forEach(logo => {
                const clone = logo.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true');
                innerDiv.appendChild(clone);
            });
            
            // Pause on hover
            carousel.addEventListener('mouseenter', pauseCarousel);
            carousel.addEventListener('mouseleave', resumeCarousel);
            
            // Pause on focus
            carousel.addEventListener('focusin', pauseCarousel);
            carousel.addEventListener('focusout', (e) => {
                // Only resume if focus moved outside the carousel
                if (!carousel.contains(e.relatedTarget)) {
                    resumeCarousel();
                }
            });
        }
    }
});
