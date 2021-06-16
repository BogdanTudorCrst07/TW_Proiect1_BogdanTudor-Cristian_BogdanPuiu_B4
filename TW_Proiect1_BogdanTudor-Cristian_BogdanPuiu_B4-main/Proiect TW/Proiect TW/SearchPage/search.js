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
        let aux = 0
        var isAdmin = response.isAmin
        response.recipes.forEach(recipe => {
            const btn = document.createElement("BUTTON")
            const addPicture = document.createElement("BUTTON")
            btn.innerHTML = "CLICK TO DELETE"
            addPicture.setAttribute("id", "add-button" + aux)
            addPicture.innerHTML = "Submit your photo"
            btn.setAttribute("id", "delete-button")
            btn.setAttribute("name", "delete-recipe-btn")
            const recipeWrapper = document.createElement("div")
            recipeWrapper.setAttribute("id", "recipe-option")
            recipeWrapper.innerHTML = `Recipe: ${recipe.name}.<br> Ingredients needed: ${recipe.ingredients}.<br>How to prepare it: ${recipe.steps}.<br>Difficulty: ${recipe.difficulty}.<br>Time to prepare: ${recipe.time} minutes.<br>Time for finishing: ${recipe.finish} minutes`
            container.appendChild(recipeWrapper)
            btn.setAttribute('onclick', `deleteItem(this.value)`)
            addPicture.setAttribute('onclick', 'addPicture(this.value)')
            btn.setAttribute('value', `${recipe.name}`)
            addPicture.setAttribute('value', `${recipe.name}`)
            container.appendChild(addPicture)
            addPicture.setAttribute('type', 'submit')
            var input = document.createElement('input')
            input.setAttribute('type', 'file')
            input.setAttribute('accept', '.png')
            input.setAttribute('id', 'fileButton')
            input.setAttribute('name', 'fileButton')
            input.setAttribute('placeholder', 'Upload a file')
            container.appendChild(input)

            if (isAdmin) {
                container.appendChild(btn)
            }
            aux = aux + 1
        }

        );

    })
}

function deleteItem(value) {

    console.log(value)
    fetch(
        '/delete/recipe',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        }
    ).then(function () {
        document.getElementById("searchBtn").click()
    })
}
function addPicture(value) {
    let photo=document.getElementById("fileButton").files[0]
    let response={
        photo,
        value
    }
    console.log(photo)
    const formData=new FormData();
    formData.append("file",photo)

    fetch(
        '/addPhoto/recipe',
        {
            method: 'POST',
            body: formData
        }
    ).then(function () {
        document.getElementById("searchBtn").click()
    })
}

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