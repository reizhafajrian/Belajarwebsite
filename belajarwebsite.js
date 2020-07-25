function change() {
    var x = document.getElementById("button1");
    x.innerHTML = "reziah";
    alert("hei")
}




function validation() {
    var text = document.getElementById("psw");
    var message = document.getElementById("messages-password")
    var hurufdepanbesar = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (text.value[0].match(hurufdepanbesar) && text.value.match(numbers) && text.value.length >= 8)
        message.style.display = "none"

    else
        message.style.display = "block"

}

function emailcheck() {
    var email = document.getElementById("email")
    var messageEmail = document.getElementById("messages-email")
    var add = "@"
    var dotcom = ".com"

    if (email.value.match(add) && email.value.match(dotcom))
        messageEmail.style.display = "none"
    else
        messageEmail.style.display = "block"

}

function removeEmail() {
    var message = document.getElementById("messages-email")
    message.style.display = "none";

}

function removePassword() {
    var message = document.getElementById("messages-password")
    message.style.display = "none";

}

function createAccount() {
    var messagePassword = document.getElementById("messages-password")
    var messageEmail = document.getElementById("messages-email")
    var messageBerhasil = document.getElementById("messages-berhasil")

    if (messageEmail.style.display == "none" && messagePassword.style.display == "none")
        messageBerhasil.style.display = "block"

}

function showMessageSosmed() {
    var messagesSosmed = document.getElementById("messages-sosmed")
    messagesSosmed.style.display = "block"
    setTimeout(() => {
        messagesSosmed.style.display = "none"
    }, 3000);

}

window.onload = function clear() {
    document.getElementById('email').value = "";
    document.getElementById('username').value = "";
}