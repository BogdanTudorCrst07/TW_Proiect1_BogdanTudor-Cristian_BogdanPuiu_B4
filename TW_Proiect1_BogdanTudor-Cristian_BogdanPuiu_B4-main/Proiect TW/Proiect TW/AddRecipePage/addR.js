function addItem() {
    var aux = document.getElementsByName("ingredients")[0].value
    var ingreds = aux.split(',')
    aux = document.getElementsByName("steps")[0].value
    steps = aux.split('\n')
    let nr = steps.length
    var recipe = {
        name: document.getElementsByName("name")[0].value,
        owner: document.getElementsByName("owner")[0].value,
        ingredients: ingreds,
        time: document.getElementsByName('time')[0].value,
        finish: document.getElementsByName('finish')[0].value,
        difficulty: document.getElementsByName('difficulty')[0].value,
        steps: steps,
        nrSteps: nr
    }
    fetch(
        '/add/recipe',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        }
    ).then(function (response) {
       document.getElementsByName("recipes")[0].click()
    }


    )
}