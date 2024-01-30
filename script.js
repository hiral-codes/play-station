const header = document.querySelector(".navbar");
const main = document.querySelector("main");

window.addEventListener("scroll", () => {
  header.style.position = window.scrollY > 36 ? "fixed" : "relative";
  header.style.top = window.scrollY > 36 ? "0" : "";
  main.classList.toggle("margin", window.scrollY > 36);
});

function toggleIcon(clickedElement) {
  document.querySelectorAll(".menu-item").forEach(function (element) {
    if (element !== clickedElement) {
      const icon = element.querySelector(".icon");
      icon.classList.remove("rotate-icon");
    }
  });
  const clickedIcon = clickedElement.querySelector(".icon");
  clickedIcon.classList.toggle("rotate-icon");
}

const slides = document.querySelector(".slides");
const buttons = document.querySelectorAll(".button");

let currentSlide = 0;

function changeSlide(index) {
  currentSlide = index;
  updateSlider();
  clearInterval(interval); // Clear existing interval
  startInterval(); // Restart the interval after manual button click
}

function updateSlider() {
  const translateValue = -currentSlide * 100 + "%";
  slides.style.transform = `translateX(${translateValue})`;

  // Update button states
  buttons.forEach((button, index) => {
    button.classList.toggle("active", index === currentSlide);
  });
}

function startInterval() {
  interval = setInterval(() => {
    currentSlide = (currentSlide + 1) % 5; // Assuming 5 slides
    updateSlider();
  }, 2500); // Change slide every 2000 milliseconds (2 seconds)
}

// startInterval(); // Start the initial interval

//   Second Slider

function secondSlider() {
  const customSlider = document.getElementById("custom-slider");
  const customButtons = document.querySelectorAll(".custom-button");
  let currentCustomSlide = 0;

  function changeCustomSlide(index) {
    currentCustomSlide = index;
    updateCustomSlider();
  }

  function updateCustomSlider() {
    const translateValue = -currentCustomSlide * 100 + "%";
    customSlider.style.transform = `translateX(${translateValue})`;

    customButtons.forEach((button, index) => {
      button.classList.toggle("active", index === currentCustomSlide);
    });
  }

  function scrollCustomSlider(direction) {
    const totalCustomSlides = 9; // Assuming 9 slides
    const increment = direction === "left" ? -1 : 1;
    currentCustomSlide =
      (currentCustomSlide + increment + totalCustomSlides) % totalCustomSlides;
    updateCustomSlider();
  }
}
secondSlider();

// Menu Bar

function menuBar() {
  document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".menu-item");
    let navContainer = document.getElementById("nav-items-container");
    let gamesMenu = document.getElementById("games-menu");
    let ps5Menu = document.getElementById("ps5-menu");
    let ps4Menu = document.getElementById("ps4-menu");
    let servicesMenu = document.getElementById("services-menu");
    let accessoriesMenu = document.getElementById("accessories-menu");
    let newsMenu = document.getElementById("news-menu");

    let isOpen = false; // Track if the container is currently open
    let lastClickedIndex = -1; // Track the last clicked index

    menuItems.forEach(function (menuItem, index) {
      menuItem.addEventListener("click", function () {
        // If clicking on the same menuItem, close the navContainer
        if (lastClickedIndex === index && isOpen) {
          navContainer.style.display = "none";
          isOpen = false;
        } else {
          // Toggle the visibility of the nav container
          navContainer.style.display = "block";
          isOpen = true;

          // Hide all menus initially
          gamesMenu.style.display = "none";
          ps5Menu.style.display = "none";
          ps4Menu.style.display = "none";
          servicesMenu.style.display = "none";
          accessoriesMenu.style.display = "none";
          newsMenu.style.display = "none";

          // Show the corresponding menu
          if (index === 0) {
            gamesMenu.style.display = "block";
          } else if (index === 1) {
            ps5Menu.style.display = "block";
          } else if (index === 2) {
            ps4Menu.style.display = "block";
          } else if (index === 3) {
            servicesMenu.style.display = "block";
          } else if (index === 4) {
            accessoriesMenu.style.display = "block";
          } else if (index === 5) {
            newsMenu.style.display = "block";
          }

          lastClickedIndex = index; // Update the last clicked index
        }
      });
    });
  });
}
menuBar();
