 // JavaScript for Search Filter
 function filterItems() {
    // Get the search input value and convert it to lowercase
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();

    // Get all list items
    const items = document.querySelectorAll("#itemList li");

    // Loop through all list items
    items.forEach(item => {
        const text = item.textContent.toLowerCase(); // Get the text content of the item
        if (text.includes(searchQuery)) {
            item.style.display = "block"; // Show the item if it matches the search query
        } else {
            item.style.display = "none"; // Hide the item if it doesn't match
        }
    });
}