document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle"); // Button
    const menu = document.getElementById("menu"); // Menu

    // Toggle menu visibility on button click
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show-menu"); // Add/remove class
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");
    const images = document.querySelectorAll(".modal-trigger");

    // Hidden by Default
    modal.style.display = "none";

    // Open modal when an image is clicked
    images.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex"; // Show modal
            modalImg.src = this.src; // Set modal image to clicked image
        });
    });

    // Close modal when X is clicked
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
