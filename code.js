/* --- Underline navigation element when its page is active --- */
var url = window.location.href;

// Get all the links in the navigation menu
var links = document.querySelectorAll('nav ul li a');

// Loop through the links
for (var i = 0; i < links.length; i++) {
    // Check if the link's href matches the current URL
    if (links[i].href === url) {
        // Add the "active" class to the link
        links[i].classList.add('active');
    }
}
