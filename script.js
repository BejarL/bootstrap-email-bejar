window.onload = function() {
    const inboxWrapper = document.querySelector('.inbox-wrapper');
    for (let i = 0; i < 6; i++) {
        const inboxItem = document.createElement('div');
        inboxItem.classList.add('inbox-item');
        inboxItem.innerHTML = `Sender Name <br> Email subject here... <br> Preview`;
        inboxWrapper.appendChild(inboxItem);
    }
};

// Get the search input and search button
const searchInput = document.getElementById('search-input');
const searchButton = document.querySelector('.search-button');

// Add an event listener to the search button
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.toLowerCase(); // Get the search term and convert to lowercase

    // Loop through inbox items and hide/show based on search term
    const inboxItems = document.querySelectorAll('.inbox-item');
    inboxItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});