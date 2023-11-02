const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const query = searchInput.value; 

    fetch(`/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
            
            console.log(data); 
        })
        .catch(error => {
            console.error('Search request failed: ', error);
        });
});
