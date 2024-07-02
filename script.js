document.addEventListener("DOMContentLoaded", function() {
    // Event listeners for navigation links
    document.getElementById("start").addEventListener("click", function(event) {
        event.preventDefault();
        navigateTo('start.html');
    });
    document.getElementById("about").addEventListener("click", function(event) {
        event.preventDefault();
        navigateTo('about.html');
    });
    document.getElementById("guide").addEventListener("click", function(event) {
        event.preventDefault();
        navigateTo('guide.html');
    });

    // Load the initial content based on URL
    var initialPage = window.location.pathname.split('/').pop() || 'start.html';
    navigateTo(initialPage, false);

    // Function to navigate to different pages
    function navigateTo(page, addHistory = true) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                document.getElementById("content").innerHTML = html;
                if (addHistory) {
                    history.pushState(null, '', page);
                }
            })
            .catch(err => console.error('Failed to load page:', err));
    }

    // Handle browser navigation (back/forward)
    window.addEventListener('popstate', function() {
        var currentPage = window.location.pathname.split('/').pop();
        navigateTo(currentPage, false);
    });
});
