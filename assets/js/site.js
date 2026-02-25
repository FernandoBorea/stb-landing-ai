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


    // Single WhatsApp CTA behavior: same footer button floats until footer enters viewport
    const whatsappCta = document.getElementById('whatsapp-cta');
    const siteFooter = document.getElementById('site-footer');

    if (whatsappCta && siteFooter) {
        const floatingClasses = [
            'fixed', 'bottom-5', 'left-1/2', '-translate-x-1/2', 'z-40',
            'text-white', 'bg-green-600', 'hover:bg-green-700',
            'shadow-xl', 'border-green-500/60', 'opacity-100', 'translate-y-0', 'scale-100'
        ];

        const dockedClasses = [
            'relative', 'text-green-600', 'bg-white', 'hover:text-green-700',
            'shadow-sm', 'border-gray-200', 'hover:shadow-md'
        ];

        const hiddenMotionClasses = ['opacity-0', 'translate-y-4', 'scale-95'];
        let dockTimeoutId;

        const setFloatingState = (isFloating) => {
            if (dockTimeoutId) {
                window.clearTimeout(dockTimeoutId);
                dockTimeoutId = undefined;
            }

            whatsappCta.classList.remove(...floatingClasses, ...dockedClasses, ...hiddenMotionClasses, 'pointer-events-none');

            if (isFloating) {
                whatsappCta.classList.add(...floatingClasses);
                whatsappCta.setAttribute('aria-hidden', 'false');
                return;
            }

            whatsappCta.classList.add(...hiddenMotionClasses, 'pointer-events-none');
            dockTimeoutId = window.setTimeout(() => {
                whatsappCta.classList.remove(...hiddenMotionClasses, 'pointer-events-none');
                whatsappCta.classList.add(...dockedClasses);
                whatsappCta.setAttribute('aria-hidden', 'false');
            }, 180);
        };

        // Initial state: floating while footer is not in view
        const fallbackToggle = () => {
            const footerTop = siteFooter.getBoundingClientRect().top;
            const footerVisible = footerTop <= (window.innerHeight - 32);
            setFloatingState(!footerVisible);
        };

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                ([entry]) => setFloatingState(!entry.isIntersecting),
                {
                    root: null,
                    threshold: 0.03,
                    rootMargin: '0px 0px -64px 0px',
                }
            );
            observer.observe(siteFooter);
        } else {
            fallbackToggle();
            window.addEventListener('scroll', fallbackToggle, { passive: true });
            window.addEventListener('resize', fallbackToggle);
        }

        // Apply once to avoid flash of unstyled state
        fallbackToggle();
    }

    // Carousel Interaction (Pause on Hover/Focus handled via CSS mostly, but ensuring JS plays nice if we add controls later)
    // Currently CSS handles standard hover.
});
