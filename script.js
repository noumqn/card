document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('portfolio-card');

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {
            const { beta, gamma } = event;

            // Map the beta and gamma values to a suitable range for tilting effect
            const xTilt = Math.min(Math.max(beta, -30), 30) / 30;
            const yTilt = Math.min(Math.max(gamma, -30), 30) / 30;

            // Apply the tilt effect on the card
            card.style.transform = `rotateX(${xTilt * 10}deg) rotateY(${yTilt * 10}deg)`;

            // Add or remove the shimmer effect based on tilt
            if (Math.abs(xTilt) > 0.1 || Math.abs(yTilt) > 0.1) {
                card.classList.add('activated');
            } else {
                card.classList.remove('activated');
            }
        });
    }
});