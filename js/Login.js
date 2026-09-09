const user = "Gustavo"
const Senha = "12345"

const um = document.getElementById('usuario')
const dois = document.getElementById('senha2')
const click = document.getElementById('button')

click.addEventListener("click",Verificaçao)

function Verificaçao () {
    const coleta1 = um.value.trim();
    const coleta2 = dois.value.trim();

    if(coleta1 === user && coleta2 === Senha){
        alert("certo mano");
        return;
    }       
    else {
        alert ("error");
        return;
    }
    
}