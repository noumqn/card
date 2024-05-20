document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('portfolio-card');

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {
            const { beta, gamma } = event;

            // Map the beta and gamma values to a suitable range for the effect
            const xTilt = Math.min(Math.max(beta, -30), 30) / 30;
            const yTilt = Math.min(Math.max(gamma, -30), 30) / 30;

            // Adjust the background gradient based on tilt
            const angle = 135 + (xTilt * 30) + (yTilt * 30);
            card.style.background = `linear-gradient(${angle}deg, #ff8c00, #ffd700, #adff2f, #00ff7f, #00bfff, #8a2be2, #ff00ff, #ff1493)`;
        });
    }
});