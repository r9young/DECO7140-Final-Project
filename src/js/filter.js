// Function to render the filtered items
const renderFilteredItems = (term) => {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (!term || item.getAttribute('data-type').includes(term)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
};

// Add event listener to the dropdown
const filterDropdown = document.getElementById('filtergame');
filterDropdown.addEventListener('change', (e) => {
    const selectedTerm = e.target.value;
    renderFilteredItems(selectedTerm);
});

// Initial render of all items
renderFilteredItems('');
