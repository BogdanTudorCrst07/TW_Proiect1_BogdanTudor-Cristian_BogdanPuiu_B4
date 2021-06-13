
function login(){
    var user={
        name: document.getElementsByName("name")[0].value,
        password: document.getElementsByName("password")[0].value
    }
    fetch(
        '/login/user',
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        }
    ).then(res => res.json()).then(function (response) {
           window.localStorage.setItem("auth",response)
        })
}

if(window.localStorage.getItem("auth")!=null){
    document.addEventListener('DOMContentLoaded', (event) => {
       document.getElementById("loginBtn").style.display="none";
      })
}