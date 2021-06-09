function searchItem() {
    var aux = document.getElementsByName("search")[0].value
    var ingreds = aux.split(',')
    fetch(
        '/search/recipe',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ingreds)
        }
    ).then(res => res.json()).then(function (response) {
        const container = document.getElementById("search-results-container")
        container.innerHTML = ""
     
        response.recipe.forEach(recipe => {
                const recipeWrapper = document.createElement("div")
                recipeWrapper.innerHTML = `Recipe: ${recipe.name}.<br> Ingredients needed: ${recipe.ingredients}.<br>How to prepare it: ${recipe.desciption}`
                container.appendChild(recipeWrapper)
              
            }
           
        );

    })
}