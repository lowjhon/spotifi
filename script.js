var conta = null;

function password1() {
    conta = 1
    document.getElementById("div_oculta").style.display = "flex";
}

function password2() {
    conta = 2
    document.getElementById("div_oculta").style.display = "flex";
}

function password3() {
    conta = 3
    document.getElementById("div_oculta").style.display = "flex";
}

function verificarSenha() {
    if (conta === 1) {
        if (document.getElementById("password").value === "tropadochupacu") {
            window.location.href = "zomibom.html";
        } else {
            window.alert("Senha incorreta!");
        }
    } else if (conta === 2) {
        if (document.getElementById("password").value === "cachorroastralis") {
            window.location.href = "sofia.html";
        } else {
            window.alert("Senha incorreta!");
        }
    } else if (conta === 3) {
        if (document.getElementById("password").value === "hashtagsougata") {
            window.location.href = "laysa.html";
        } else {
            window.alert("Senha incorreta!");
        }
    }
}