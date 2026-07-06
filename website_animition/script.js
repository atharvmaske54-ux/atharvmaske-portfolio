// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("hero-canvas");
const context = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Handle window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render(); // Re-render the current frame
});

// Image sequence setup
const frameCount = 300;
const currentFrame = index => (
    `assets/bg_frames/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
);

const images = [];
const animationObj = { frame: 0 };

// Preload the first image immediately so we have something to draw
const img = new Image();
img.src = currentFrame(0);
img.onload = () => {
    images[0] = img;
    render();
};

// Preload all other images asynchronously
for (let i = 1; i < frameCount; i++) {
    const tempImg = new Image();
    tempImg.src = currentFrame(i);
    images.push(tempImg);
}

// Function to draw image covering the canvas
function render() {
    if (!images[animationObj.frame]) return;
    
    const image = images[animationObj.frame];
    
    // Calculate aspect ratios and sizing for "object-fit: cover" behavior
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = image.width / image.height;
    let renderWidth, renderHeight, xOffset, yOffset;

    if (canvasRatio > imgRatio) {
        renderWidth = canvas.width;
        renderHeight = canvas.width / imgRatio;
        xOffset = 0;
        yOffset = (canvas.height - renderHeight) / 2;
    } else {
        renderWidth = canvas.height * imgRatio;
        renderHeight = canvas.height;
        xOffset = (canvas.width - renderWidth) / 2;
        yOffset = 0;
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, xOffset, yOffset, renderWidth, renderHeight);
}

// Create the GSAP ScrollTrigger
gsap.to(animationObj, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        trigger: ".content-wrapper", // We use the wrapper as the scroll timeline
        start: "top top",
        end: "bottom bottom", 
        scrub: 1, // Smooth scrubbing
        onUpdate: render // Render on every scroll tick
    }
});

// Form submission handler (prevent default)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you for reaching out, Atharv will get back to you soon!");
    e.target.reset();
});
