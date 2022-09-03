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
        const singleCategorie = document.createElement('small');
        singleCategorie.innerHTML = `
        <div class="hoover p-1" onclick="loadIndividualCategory('${categorie.category_id}')">${categorie.category_name}</div>
    `
        newsCategoriesContainer.appendChild(singleCategorie);
    });
}

const loadIndividualCategory = (id) => {
    console.log(id)
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayIndividualCategory(data.data))
}
const displayIndividualCategory = categories => {
    console.log(categories)
    const individualCategorieContainer = document.getElementById('individualCategorie');
    individualCategorieContainer.innerHTML = '';
    categories.forEach(categorie => {
        console.log(categorie)
        const individualCategorieDiv = document.createElement('div');
        individualCategorieDiv.innerHTML = `
        <div class="row">
            <div class="border rounded mb-3 pt-2 pb-2 d-flex shadow">
                <div class="col-md-3 col-5">
                    <img src="${categorie.image_url}" class="img-fluid h-100 rounded" alt="..">
                </div>
                <div class="col-md-9 col-7">
                    <div class="card-body">
                        <h5 class="card-title">${categorie.title}</h5>
                        <p class="card-text overflow">${categorie.details}</p> 
                        <div class="bg-warning mt-5">
                            <div style="height: 70px;">
                                <img class ="img-fluid mh-100 rounded-circle" src="${categorie.author.img}">
                            </div>
                            <div>

                            </div>
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        individualCategorieContainer.appendChild(individualCategorieDiv);
    })
}
loadAllNewsCategories()