const loadAllNewsCategories = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllNewsCategories(data.data.news_category))
        .catch(error => console.log(error))
}

const displayAllNewsCategories = categories => {
    console.log(categories)
    const newsCategoriesContainer = document.getElementById('newsCategories');
    categories.forEach(categorie => {
        const singleCategorie = document.createElement('p');
        singleCategorie.innerHTML = `
        <div>${categorie.category_name}</div>
    `
        newsCategoriesContainer.appendChild(singleCategorie);
    });

}
loadAllNewsCategories()