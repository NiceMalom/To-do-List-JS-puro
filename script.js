

let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@minhalista")) || [];

displayTarefas();

// FUNÇÕES AUXILIARES                            //
function displayTarefas(){
    listElement.innerHTML = "";

    tarefas.map((task)=>{
        let li = document.createElement("li")
        let taskText = document.createTextNode(task)

        let linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")

        let deleteText = document.createTextNode("Excluir")
        let posicao = tarefas.indexOf(task)
        linkElement.setAttribute("onclick", `deleteTarefas(${posicao})`)

        listElement.appendChild(li);
        li.appendChild(taskText)

        linkElement.appendChild(deleteText)
        li.appendChild(linkElement)
    })
}

function deleteTarefas(posicao){
    tarefas.splice(posicao, 1);
    displayTarefas();
    salvarDados();
}

function salvarDados(){
    localStorage.setItem("@minhalista", JSON.stringify(tarefas))
}
// FUNÇÕES AUXILIARES                           //


function addTarefas(){
    if(inputElement.value === ''){
        alert("Digite alguma tarefa")
        return false;             //interrompe o código
    }else{
        let valorTarefa = inputElement.value

        tarefas.push(valorTarefa); 
        inputElement.value = '';  //limpa 

        displayTarefas();         //mostra
        salvarDados();
    }
}


buttonElement.onclick = addTarefas;