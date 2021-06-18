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

            const recipeWrapper = document.createElement("div")
            recipeWrapper.setAttribute("id", "recipe-option")
            recipeWrapper.innerHTML = `Recipe: ${recipe.name}.<br> Ingredients needed: ${recipe.ingredients}.<br>How to prepare it: ${recipe.steps}.<br>Difficulty: ${recipe.difficulty}.<br>Time to prepare: ${recipe.time} minutes.<br>Time for finishing: ${recipe.finish} minutes`
            container.appendChild(recipeWrapper)
        })
    })
}

