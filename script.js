document.addEventListener('DOMContentLoaded', function() {

    const card = document.getElementById('portfolio-card');

    if (window.DeviceOrientationEvent) {

        window.addEventListener('deviceorientation', function(event) {

            const { beta, gamma } = event;

            // Map the beta and gamma values to a suitable range for tilting effect

            const xTilt = Math.min(Math.max(beta, -30), 30) / 30;

            const yTilt = Math.min(Math.max(gamma, -30), 30) / 30;

            // Apply the tilt effect on the card

            card.style.transform = rotateX(${xTilt * 10}deg) rotateY(${yTilt * 10}deg);

            // Adjust the pseudo-element glare effect

            card.style.setProperty('--xTilt', xTilt * 100 + '%');

            card.style.setProperty('--yTilt', yTilt * 100 + '%');

        });

    }

});
