function searchItem() {
    var aux = document.getElementsByName("search")[0].value
    var secondAux = document.getElementById("second-search").value
    window.localStorage.setItem("history",aux)
    if (secondAux === '') {
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
            //   console.log(response)
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
            var isLogged = response.isLogged
            var name = response.name

            response.recipes.forEach(recipe => {
                const btn = document.createElement("BUTTON")
                const addPicture = document.createElement("BUTTON")
                const seePhotos = document.createElement("BUTTON")
                const addToFavorites = document.createElement("BUTTON")
                addToFavorites.innerHTML = "Add recipe to favorites"
                addToFavorites.setAttribute("id", "add-favorite")
                addToFavorites.setAttribute("value", `${recipe.name}/${name}`)
                addToFavorites.setAttribute('onclick', 'addToFavorites(this.value)')
                btn.innerHTML = "CLICK TO DELETE"
                seePhotos.innerHTML = "See what others did"
                addPicture.setAttribute("id", "add-button")
                seePhotos.setAttribute("id", "photos-button")
                seePhotos.setAttribute("value", `${recipe.name}`)
                seePhotos.setAttribute('onclick', 'displayPhotos(this.value)')
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
                addPicture.setAttribute('type', 'submit')
                var input = document.createElement('input')
                input.setAttribute('type', 'file')
                input.setAttribute('accept', '.png')
                input.setAttribute('id', 'fileButton')
                input.setAttribute('name', 'fileButton')
                input.setAttribute('placeholder', 'Upload a file')
                const imageRecipeWrapper = document.createElement("div")
                imageRecipeWrapper.setAttribute("id", "images-section")
                recipe.photos.forEach(photo => {
                    const image = document.createElement("IMG")
                    image.setAttribute("title", `${recipe.name}`)
                    image.setAttribute("src", photo)
                    let arr = photo.split('/')
                    let photoValue = arr[3]
                    const deletePhoto = document.createElement("BUTTON")
                    deletePhoto.setAttribute("value", `${recipe.name},${photoValue}`)
                    deletePhoto.setAttribute("onclick", "deletePhoto(this.value)")
                    deletePhoto.setAttribute("id", "photo-deleter")
                    deletePhoto.innerHTML = "Delete photo"
                    image.setAttribute("class", "food-image")
                    imageRecipeWrapper.appendChild(image)
                    if (isAdmin) {
                        imageRecipeWrapper.appendChild(deletePhoto)
                    }
                })
                if (isLogged) {
                    container.appendChild(addPicture)
                }
                recipeWrapper.appendChild(imageRecipeWrapper)
                if (isLogged) {
                    container.appendChild(input)
                }

                if (isLogged) {
                    container.appendChild(addToFavorites)
                }
                if (isAdmin) {
                    container.appendChild(btn)
                }
                aux = aux + 1
            }

            );

        })
    }
    else {
        aux = document.getElementsByName("search")[1].value
        var log = document.getElementById("second-option-selecter").value
        var filter
        switch (log) {
            case "0":
                filter = "popularity"
                break
            case "1":
                filter = "time"
                break
            case "2":
                filter = "difficulty"
                break
            case "3":
                filter = "finish"
                break
        }
        var response = {
            value: aux,
            filter: filter
        }

        fetch(
            '/search/filter',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(response)
            }

        ).then(res => res.json()).then(function (response) {
            const container = document.getElementById("search-results-container")
            container.innerHTML = ""
            response.forEach(recipe =>{
                const recipeWrapper = document.createElement("div")
                recipeWrapper.setAttribute("id", "recipe-option")
                recipeWrapper.innerHTML = `Recipe: ${recipe.name}.<br> Ingredients needed: ${recipe.ingredients}.<br>How to prepare it: ${recipe.steps}.<br>Difficulty: ${recipe.difficulty}.<br>Time to prepare: ${recipe.time} minutes.<br>Time for finishing: ${recipe.finish} minutes`
                container.appendChild(recipeWrapper)
                recipe.photos.forEach(photo => {
                    const image = document.createElement("IMG")
                    image.setAttribute("title", `${recipe.name}`)
                    image.setAttribute("src", photo)
                    image.setAttribute("class", "food-image")
                    recipeWrapper.appendChild(image)
                })
                
            })
        })


        }
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

    function addToFavorites(value) {

        var aux = value.split('/')
        response = {
            recipe: aux[0],
            user: aux[1]
        }
        fetch(
            '/addfav/recipe',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(response)
            }
        ).then(res => res.json()).then(function (response) {
            if (response.success == false) {
                alert("Error at adding the recipe to favorites")
            }
            else {
                alert("Added succesfully")
            }

        })
    }
    function displayPhotos(value) {
        fetch(
            '/search/photo',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            }
        ).then(function (response) {
            const image = document.createElement("IMG")
            const container = document.getElementById("search-results-container")
            container.innerHTML = ""
            container.appendChild(image)
        })
    }



    function addPicture(value) {
        let photo = document.getElementById("fileButton").files[0]
        console.log(value)
        const formData = new FormData();
        formData.append("file", photo)
        formData.append("name", value)
        fetch(
            '/addPhoto/recipe',
            {
                method: 'POST',
                body: formData
            }
        ).then(function () {
            document.getElementsByClassName("exploreBtn")[0].click()
        })
    }

    function deletePhoto(value) {
        let aux = value.split(',')
        let request = {
            recipeName: aux[0],
            photoRecipe: aux[1]
        }
        fetch(
            '/remove/photo',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            }).then(function () {
                document.getElementsByClassName("exploreBtn")[0].click()
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
    function favorites() {
        var aux = window.localStorage.getItem("auth")
        window.localStorage.removeItem("auth", aux)
    }
    if (window.localStorage.getItem("auth") == null) {
        document.addEventListener('DOMContentLoaded', (event) => {
            document.getElementById("favorites").style.display = "none";
        })
    }
    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById("first-searchbar").placeholder = "Just type your ingredients: "+window.localStorage.getItem("history")+"(last searched)"
    })
    
