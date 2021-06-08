function addItem(){
    var  aux=document.getElementsByName("ingredients")[0].value
    var ingreds=aux.split(',')
    var recipe={
        name: document.getElementsByName("name")[0].value,
        owner: document.getElementsByName("owner")[0].value,
        ingredients: ingreds,
        description: document.getElementsByName("description")[0].value
    }
    fetch(
        '/add/recipe',
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(recipe)
        }
    ).then(function(response){
        if(!response.ok)
        {
            onError(response.json())
        }
        else {
            onSucces(response.json())
        }

    })
}