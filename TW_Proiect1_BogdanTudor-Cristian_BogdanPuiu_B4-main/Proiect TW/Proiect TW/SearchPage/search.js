function searchItem(){
    var  aux=document.getElementsByName("search")[0].value
    var ingreds=aux.split(',')
    fetch(
        '/search/recipe',
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(ingreds)
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