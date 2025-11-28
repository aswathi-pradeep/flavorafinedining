function updateNavbarCounts() {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const wishlistCount = document.getElementById("wishlist-count");
    const cartCount = document.getElementById("cart-count");

    if (wishlistCount) wishlistCount.textContent = wishlist.length;
    if (cartCount) cartCount.textContent = cart.length;
}

function highlightActivePage() {
    const currentPath = window.location.pathname; // full path
    const currentPage = currentPath.split("/").pop(); // only file name
    const navLinks = document.querySelectorAll(".navbar .nav-link");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");

        // Highlight if link matches current file or if it's index.html at root
        if (
            linkHref === currentPage ||
            (linkHref === "index.html" && (currentPage === "" || currentPage === "index.html"))
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Initialize after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    updateNavbarCounts();
    highlightActivePage();
});
