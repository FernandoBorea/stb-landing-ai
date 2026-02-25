document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Focusable elements inside menu for trapping focus
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const menuFocusables = menuOverlay.querySelectorAll(focusableElements);
    const firstFocusable = menuFocusables[0];
    const lastFocusable = menuFocusables[menuFocusables.length - 1];

    let previousActiveElement;

    function openMenu() {
        previousActiveElement = document.activeElement;

        menuOverlay.classList.remove('invisible', 'opacity-0');
        menuOverlay.classList.add('visible', 'opacity-100', 'open');

        document.body.style.overflow = 'hidden'; // Disable scroll

        // Move focus to close button
        closeMenuBtn.focus();

        menuOverlay.setAttribute('aria-hidden', 'false');
    }

    function closeMenu() {
        menuOverlay.classList.remove('visible', 'opacity-100', 'open');
        menuOverlay.classList.add('invisible', 'opacity-0');

        document.body.style.overflow = ''; // Enable scroll

        menuOverlay.setAttribute('aria-hidden', 'true');

        // Return focus
        if (previousActiveElement) {
            previousActiveElement.focus();
        }
    }

    // Event Listeners
    menuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);

    // Close on link click
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOverlay.classList.contains('open')) {
            closeMenu();
        }
    });

    // Trap Focus
    menuOverlay.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else { // Tab
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });


    // Sticky WhatsApp CTA behavior: float while scrolling, defer to footer button in footer zone
    const stickyWhatsappBtn = document.getElementById('sticky-whatsapp-btn');
    const footerWhatsapp = document.getElementById('footer-whatsapp');

    if (stickyWhatsappBtn && footerWhatsapp) {
        const toggleStickyButton = () => {
            const footerTop = footerWhatsapp.getBoundingClientRect().top;
            const viewportBottom = window.innerHeight;
            const footerReached = footerTop <= (viewportBottom - 24);

            stickyWhatsappBtn.classList.toggle('opacity-0', footerReached);
            stickyWhatsappBtn.classList.toggle('pointer-events-none', footerReached);
            stickyWhatsappBtn.setAttribute('aria-hidden', footerReached ? 'true' : 'false');
        };

        toggleStickyButton();
        window.addEventListener('scroll', toggleStickyButton, { passive: true });
        window.addEventListener('resize', toggleStickyButton);
    }

    // Carousel Interaction (Pause on Hover/Focus handled via CSS mostly, but ensuring JS plays nice if we add controls later)
    // Currently CSS handles standard hover.
});
