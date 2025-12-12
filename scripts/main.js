
window.addEventListener("DOMContentLoaded", () => {
     if (typeof VANTA !== 'undefined') {
                VANTA.WAVES({
                    el: '#vanta-bg',
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: window.innerHeight,
                    minWidth: window.innerWidth,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 12,
                    waveHeight: 5,
                    waveSpeed: 0.4,
                    shininess: 20
                });
            }
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
            });
        }

    function initObservers() {
        const revealSelector = 'section, article';
        const nodeList = document.querySelectorAll(revealSelector);
        const els = Array.from(nodeList);
        if (!els || els.length === 0) return;

        els.forEach(el => {
            el.classList.add('opacity-0', 'translate-y-12', 'scale-95', 'transition-opacity', 'transition-transform', 'duration-700', 'ease-out');
        });

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    target.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
                    target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                    target.style.transitionDelay = '';
                    obs.unobserve(target);
                }
            });
        }, { threshold: 0.05 });

        els.forEach(el => observer.observe(el));
    }

    initObservers();


})