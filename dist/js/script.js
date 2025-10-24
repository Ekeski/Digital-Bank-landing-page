// Get elements
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const iconHamburger = document.getElementById("icon-hamburger");
const iconClose = document.getElementById("icon-close");
const navLinks = mobileMenu.querySelectorAll("a"); // Get all links in the mobile menu

/**
 * Function to toggle the mobile menu visibility and icons
 */
function toggleMenu() {
  // Toggle the 'hidden' class on the menu container
  mobileMenu.classList.toggle("hidden");

  // Toggle the visibility of the icons
  iconHamburger.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");

  // Toggle body overflow to prevent scrolling when the menu is open (optional but recommended)
  if (!mobileMenu.classList.contains("hidden")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

// Event listener for the toggle button
menuToggle.addEventListener("click", toggleMenu);

// Event listeners for closing the menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Only close if the menu is visible (i.e., on mobile)
    if (!mobileMenu.classList.contains("hidden")) {
      toggleMenu();
    }
  });
});
