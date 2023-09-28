document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('#menu-toggle');
    const sidebar = document.querySelector('#sidebar');

    // Toggle sidebar visibility on hamburger icon click
    menuToggle.addEventListener('click', function () {
        if (sidebar.classList.contains('d-none')) {
            sidebar.classList.remove('d-none');
        } else {
            sidebar.classList.add('d-none');
        }
    });

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.add('d-none');
        }
    });

    // To prevent the above handler from immediately hiding the sidebar when the menu button is clicked
    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
