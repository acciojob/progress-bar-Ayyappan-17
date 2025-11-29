//your JS code here. If required.
// Select elements
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

// Track current step (1-based index)
let currentStep = 1;

// Update progress bar UI
function updateProgress() {
  circles.forEach((circle, idx) => {
    if (idx < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Update progress line width
  const totalSteps = circles.length;
  progress.style.width = ((currentStep - 1) / (totalSteps - 1)) * 100 + "%";

  // Disable/enable buttons
  prevBtn.disabled = currentStep === 1;
  nextBtn.disabled = currentStep === totalSteps;
}

// Next button click
nextBtn.addEventListener("click", () => {
  if (currentStep < circles.length) {
    currentStep++;
    updateProgress();
  }
});

// Previous button click
prevBtn.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateProgress();
  }
});

// Initialize progress
updateProgress();
