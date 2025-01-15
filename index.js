const moon = document.getElementById('moon');
const container = document.getElementById('container');

// Configuration
const radius = 250; // Orbit radius in pixels
const speed = 0.002; // Speed of rotation
let angle = 0;

// Center point of the container
const centerX = container.offsetWidth / 2;
const centerY = container.offsetHeight / 2;


function startAnimation() {
    angle = parseFloat(sessionStorage.getItem("moonAngle"));
    if (angle === null) {
        angle = 0;
    }
    animate();
}

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

function savePosition() {
    // Store moon's location
    sessionStorage.setItem("moonAngle", angle);
}

// Start animation
document.addEventListener("DOMContentLoaded", startAnimation);

/*
SOURCES

Source: Claude AI (Anthropic)
Prompts: 
"Alright please give me an informational blurb about the Earth and then a similar one about the moon that would display on a simple static website. Be sure to include one humorous fact about each. Thanks"
"how might I make a div element "revolve" around another one using just Javascript"

Source: https://stackoverflow.com/questions/7048313/how-to-have-multiple-css-transitions-on-an-element
Source: https://www.w3schools.com/jsref/met_win_requestanimationframe.asp
Source: https://stackoverflow.com/questions/13443503/run-javascript-code-on-window-close-or-page-refresh
Source: https://www.w3schools.com/howto/howto_css_text_selection.asp
Source: https://cssgradient.io/ for earth and moon gradiant
*/
