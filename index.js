const moon = document.getElementById('moon');
const container = document.getElementById('container');

// Configuration
const radius = 250; // Orbit radius in pixels
const speed = 0.002; // Speed of rotation
let angle = 0;

// Center point of the container
const centerX = container.offsetWidth / 2;
const centerY = container.offsetHeight / 2;

function animate() {
    // Calculate new position
    const x = centerX + radius * Math.cos(angle) - (moon.offsetWidth / 2);
    const y = centerY + radius * Math.sin(angle) - (moon.offsetHeight / 2);
    
    // Update moon position
    moon.style.left = `${x}px`;
    moon.style.top = `${y}px`;
    
    // Increment angle
    angle += speed;
    
    // Continue animation
    requestAnimationFrame(animate);
}

// Start animation
document.addEventListener("DOMContentLoaded", animate);



