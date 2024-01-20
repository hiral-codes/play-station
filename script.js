const header = document.querySelector(".navbar");
const main = document.querySelector("main");

window.addEventListener("scroll", () => {
    header.style.position = window.scrollY > 36 ? "fixed" : "relative";
    header.style.top = window.scrollY > 36 ? "0" : "";
    main.classList.toggle("margin", window.scrollY > 36);
});

function toggleIcon(clickedElement) {
    document.querySelectorAll('.menu-item').forEach(function (element) {
        if (element !== clickedElement) {
            const icon = element.querySelector('.icon');
            icon.classList.remove('rotate-icon');
        }
    });
    const clickedIcon = clickedElement.querySelector('.icon');
    clickedIcon.classList.toggle('rotate-icon');
}

const slides = document.querySelector('.slides');
  const buttons = document.querySelectorAll('.button');

  let currentSlide = 0;

  function changeSlide(index) {
    currentSlide = index;
    updateSlider();
    clearInterval(interval); // Clear existing interval
    startInterval(); // Restart the interval after manual button click
  }

  function updateSlider() {
    const translateValue = -currentSlide * 100 + '%';
    slides.style.transform = `translateX(${translateValue})`;

    // Update button states
    buttons.forEach((button, index) => {
      button.classList.toggle('active', index === currentSlide);
    });
  }

  function startInterval() {
    interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % 5; // Assuming 5 slides
      updateSlider();
    }, 2500); // Change slide every 2000 milliseconds (2 seconds)
  }

  startInterval(); // Start the initial interval


//   Second Slider

const customSlider = document.getElementById('custom-slider');
const customButtons = document.querySelectorAll('.custom-button');
let currentCustomSlide = 0;

function changeCustomSlide(index) {
  currentCustomSlide = index;
  updateCustomSlider();
}

function updateCustomSlider() {
  const translateValue = -currentCustomSlide * 100 + '%';
  customSlider.style.transform = `translateX(${translateValue})`;

  customButtons.forEach((button, index) => {
    button.classList.toggle('active', index === currentCustomSlide);
  });
}

function scrollCustomSlider(direction) {
  const totalCustomSlides = 9; // Assuming 9 slides
  const increment = direction === 'left' ? -1 : 1;
  currentCustomSlide = (currentCustomSlide + increment + totalCustomSlides) % totalCustomSlides;
  updateCustomSlider();
}