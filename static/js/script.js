const titles = [
  "Automating the Impossible, Daily.",
  "Downtime’s Worst Nightmare.",
  "Turning Alerts into Automation.",
  "Your last line of defense when servers panic."
];

let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 80;
const deleteSpeed = 40;
const pauseEnd = 1000; // pause at end of sentence
const typewriterElement = document.getElementById("typewriter");

function typeWriter() {
  const currentTitle = titles[currentIndex];
  
  if (!isDeleting) {
    typewriterElement.textContent = currentTitle.slice(0, charIndex + 1) + "▍";
    charIndex++;
    if (charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(typeWriter, pauseEnd);
      return;
    }
  } else {
    typewriterElement.textContent = currentTitle.slice(0, charIndex) + "▍";
    charIndex--;
    if (charIndex < 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % titles.length;
      charIndex = 0;
    }
  }
  
  setTimeout(typeWriter, isDeleting ? deleteSpeed : typeSpeed);
}

// Start typing
typeWriter();



// Show/hide workflow on button click
const skillsBtn = document.getElementById('skills-btn');
const workflowContainer = document.getElementById('workflow-container');

skillsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  workflowContainer.style.display = workflowContainer.style.display === 'block' ? 'none' : 'block';

  const steps = workflowContainer.querySelectorAll('.workflow-step');
  steps.forEach((step, index) => {
    step.style.opacity = '0';
    step.style.animation = `slideIn 0.5s forwards`;
    step.style.animationDelay = `${index * 0.5}s`;
  });
});



