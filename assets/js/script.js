/*
DOM:

Case Sensitive = linguagem que reconhece letras maiúsculas e minúsculas 

por Tag: getElementByTagName()
por Id: getElement ById()
por Nome: getElementsByName
por Classe: getElementsByClassName()
por Seletor: querySelector() -> melhor prática para acessar o DOM no JavaScript
*/

let nome = window.document.getElementById("nome")
let email =  document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
    }
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
    }
}

