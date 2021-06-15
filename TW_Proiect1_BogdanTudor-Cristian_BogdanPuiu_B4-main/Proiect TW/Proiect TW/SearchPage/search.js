function searchItem() {
    var aux = document.getElementsByName("search")[0].value
    var ingreds = aux.split(',')
    var token = window.localStorage.getItem("auth")
    var res = {
        ingreds: ingreds,
        token: token
    }
    fetch(
        '/search/recipe',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(res)
        }
    ).then(res => res.json()).then(function (response) {
        console.log(response)
        const container = document.getElementById("search-results-container")
        container.innerHTML = ""
        var filter = document.getElementsByName("option")[0].value
        switch (filter) {
            case "1": //Time spent
                response.recipes.sort((a, b) => (a.time > b.time) ? 1 : -1)
                break
            case "2":
                response.recipes.sort((a, b) => (a.difficulty > b.difficulty) ? 1 : -1)
                break;
            case "3":
                response.recipes.sort((a, b) => (a.steps.length > b.steps.length) ? 1 : -1)
                break
        }
        let aux=0
        var isAdmin = response.isAmin
        console.log(isAdmin)
        response.recipes.forEach(recipe => {
            const btn=document.createElement("BUTTON")
            btn.innerHTML="CLICK TO DELETE"
            btn.setAttribute("id","delete-button"+aux)
            btn.setAttribute("name","delete-recipe-btn")
            const recipeWrapper = document.createElement("div")
            recipeWrapper.setAttribute("id", "recipe-option")
            recipeWrapper.innerHTML = `Recipe: ${recipe.name}.<br> Ingredients needed: ${recipe.ingredients}.<br>How to prepare it: ${recipe.steps}.<br>Difficulty: ${recipe.difficulty}.<br>Time to prepare: ${recipe.time} minutes.<br>Time for finishing: ${recipe.finish} minutes`
            container.appendChild(recipeWrapper)
            if(isAdmin){
            container.appendChild(btn)
            }
            aux=aux+1
        }

        );

    })
}

function logout(){
    var aux=window.localStorage.getItem("auth")
    window.localStorage.removeItem("auth",aux)
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