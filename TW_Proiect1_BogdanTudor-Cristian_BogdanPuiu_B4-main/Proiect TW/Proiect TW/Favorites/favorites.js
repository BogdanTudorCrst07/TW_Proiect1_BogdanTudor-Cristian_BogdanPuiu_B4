function logout() {
    var aux = window.localStorage.getItem("auth")
    window.localStorage.removeItem("auth", aux)
}
if (window.localStorage.getItem("auth") != null) {
    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "visible";
    })
}
else {
    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById("logoutBtn").style.display = "none";
    })
}

function getFavorites() {
    var aux = window.localStorage.getItem("auth")
    fetch(
        '/display/favorites',
        {
            method: 'POST',
            body: JSON.stringify(aux)
        }
    ).then(res => res.json()).then(function (response) {
        let recipes = response
        const container = document.getElementById("search-results-container")
        container.innerHTML = ""
        recipes.forEach(recipe => {
            const btn = document.createElement("BUTTON")
            btn.innerHTML="Delete favorite"
            btn.setAttribute("id","delete-favorite-btn")
            btn.setAttribute("value",`${recipe.name}`)
            btn.setAttribute("onclick","deleteFavorite(this.value)")
            const recipeWrapper = document.createElement("div")
            recipeWrapper.setAttribute("id", "recipe-option")
            recipeWrapper.innerHTML = `Recipe: ${recipe.name}.<br> Ingredients needed: ${recipe.ingredients}.<br>How to prepare it: ${recipe.steps}.<br>Difficulty: ${recipe.difficulty}.<br>Time to prepare: ${recipe.time} minutes.<br>Time for finishing: ${recipe.finish} minutes`
            container.appendChild(recipeWrapper)
            const imageRecipeWrapper=document.createElement("div")
            imageRecipeWrapper.setAttribute("id","images-section")
            recipe.photos.forEach(photo=>{
                const image=document.createElement("IMG")
                image.setAttribute("src",photo)
                image.setAttribute("class","food-image")
                imageRecipeWrapper.appendChild(image)
            })
            recipeWrapper.appendChild(imageRecipeWrapper)
            container.appendChild(btn)
            
        })
    })
}


function deleteFavorite(value){
    let aux=window.localStorage.getItem("auth")
    let response={
        user:aux,
        recipe:value
    }
    fetch(
        '/delete/favorite',
        {
            method: 'POST',
            body: JSON.stringify(response)
        }
    ).then(function(response){
           document.getElementById("display-button").click()
    })
}

