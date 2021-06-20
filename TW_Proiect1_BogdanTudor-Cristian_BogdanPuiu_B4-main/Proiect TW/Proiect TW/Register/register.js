
function register() {
    var user = {
        name: document.getElementsByName("name")[0].value,
        password: document.getElementsByName("password")[0].value
    }
    fetch(
        '/register/user',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
    ).then(res => res.json()).then(function (response) {
        if (response.message.includes("name is already being used")) {
            alert("Name already taken.")
        }
        else {
            document.getElementsByClassName("exploreBtn")[0].click()
        }
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

