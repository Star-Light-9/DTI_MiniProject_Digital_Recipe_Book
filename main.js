const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const recipeCards = document.querySelectorAll('.recipe');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();

        recipeCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? '' : 'none';
        });
    });