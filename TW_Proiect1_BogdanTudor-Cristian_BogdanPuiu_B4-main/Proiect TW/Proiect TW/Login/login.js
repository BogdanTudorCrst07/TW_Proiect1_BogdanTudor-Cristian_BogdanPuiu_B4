
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
           document.getElementById("homeBtn").click()
           alert("You are now logged in!")
        })
}
function logout(){
    var aux=window.localStorage.getItem("auth")
    window.localStorage.removeItem("auth",aux)
}

if(window.localStorage.getItem("auth")!=null){
    document.addEventListener('DOMContentLoaded', (event) => {
       document.getElementById("loginBtn").style.display="none";
       document.getElementById("logoutBtn").style.display="visible";
      })
}
else{
    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById("logoutBtn").style.display="none";
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