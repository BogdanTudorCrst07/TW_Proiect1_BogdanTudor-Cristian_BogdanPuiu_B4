
function register(){
    var user={
        name: document.getElementsByName("name")[0].value,
        password: document.getElementsByName("password")[0].value
    }
    fetch(
        '/register/user',
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
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