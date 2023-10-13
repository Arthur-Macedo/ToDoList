const button = document.querySelector(".button-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let minhaLista = []

function adicionarTarefas() {
  minhaLista.push({
    tarefa: input.value,
    concluida: false,
  });

  input.value = ''

  mostrarTarefas();

}

function mostrarTarefas() {

    let novaLi = ''

    // ['comprar café', 'estudar programação']
    
    minhaLista.forEach((item, index) => {
        novaLi = 
            novaLi + 
        `
        
        <li class="task ${item.concluida && 'done'}">
            <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${index})">
        </li>
        

         `
    })

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem('lista', JSON.stringify(minhaLista) );

}

function concluirTarefa(index) {
  minhaLista[index].concluida = !minhaLista[index].concluida;

  mostrarTarefas();
}


function deletarItem(index){
    minhaLista.splice(index, 1);
    
    mostrarTarefas();
}

function recarregarTarefas(){
  const tarefasLocalStorage = localStorage.getItem('ista');

  if(tarefasLocalStorage){
    minhaLista = JSON.parse(tarefasLocalStorage);
  }
  mostrarTarefas();
}

recarregarTarefas();
button.addEventListener("click", adicionarTarefas);
