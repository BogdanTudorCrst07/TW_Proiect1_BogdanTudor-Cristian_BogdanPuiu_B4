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