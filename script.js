window.onload = function() {
    const inboxWrapper = document.querySelector('.inbox-wrapper');
    for (let i = 0; i < 6; i++) {
        const inboxItem = document.createElement('div');
        inboxItem.classList.add('inbox-item');
        inboxItem.innerHTML = `Sender Name <br> Email subject here... <br> Preview`;
        inboxWrapper.appendChild(inboxItem);
    }
};