
  let tarefas =[]

function adicionarTarefa() {


    let inputTarefa= document.getElementById("inputTarefa") // Pega o valor do input
    let tarefa= inputTarefa.value.trim() //salva o valor do input na variavel tarefa, .trim() remove espaços em branco no inicio e no fim da string
    let mensagemEl = document.getElementById("mensagem");

  if (!tarefa) {
    mensagemEl.textContent = "Digite uma tarefa antes de adicionar.";
    mensagemEl.style.color = "red"; //muda a cor da mensagem para vermelho
    return;
  }
    

    mensagemEl.textContent= "Tarefa adicionada com sucesso" //adiciona o novo elemento li na ul
    mensagemEl.style.color = "green"; //muda a cor da mensagem para verde
    inputTarefa.value= "" 
    inputTarefa.focus() //foca o cursor no input após adicionar uma tarefa

    tarefas.push(tarefa)
    renderizarTarefas( )
}
document.getElementById("inputTarefa").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }/* usa o id de inputTarefa, addEventListener registra um evento q "ouve" o teclado, no caso o keydown, 
  disparada ao clicar, e.key representa diretamente a tecla. Portanto, se a e.key (tecla) for igualzinho
  a Enter, chamara a função adicionarTarefa
  */
});

function renderizarTarefas(){
   const listaTarefas= document.getElementById("listaTarefas")//pega a ul onde as tarefas serão adicionadas
  listaTarefas.innerHTML=""

  for (let i=0; i<tarefas.length;i++){
    let novaTarefa = document.createElement("li") //cria um novo elemento li (lista não ordenada)
    novaTarefa.textContent=tarefas[i] //adiciona o valor da variavel tarefa no novo elemento li  
    
    let botaoRemover= document.createElement("button") //cria um novo elemento botão
    botaoRemover.className="remover" //inclui na classe de remover
    botaoRemover.textContent="Remover" //adiciona o texto "Remover" no botão
    novaTarefa.appendChild(botaoRemover)
    listaTarefas.appendChild(novaTarefa)//faz a nova tarefa se tornar filha da lista de tarefas
  }


}