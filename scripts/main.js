
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
            // Mobile menu toggle
            const mobileToggle = document.getElementById('mobile-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileToggle && mobileMenu) {
                mobileToggle.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
            }
})