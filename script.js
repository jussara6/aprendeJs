function adicionarTarefa() {

    let inputTarefa= document.getElementById("inputTarefa") // Pega o valor do input
    let tarefa= inputTarefa.value.trim() //salva o valor do input na variavel tarefa, .trim() remove espaços em branco no inicio e no fim da string
    let mensagemEl = document.getElementById("mensagem");

  if (!tarefa) {
    mensagemEl.textContent = "Digite uma tarefa antes de adicionar.";
    return;
  }
    
    let listaTarefas= document.getElementById("listaTarefas")//pega a ul onde as tarefas serão adicionadas
    let novaTarefa = document.createElement("li") //cria um novo elemento li (lista não ordenada)
    novaTarefa.textContent=tarefa //adiciona o valor da variavel tarefa no novo elemento li  
    listaTarefas.appendChild(novaTarefa)

    mensagemEl.textContent= "Tarefa adicionada com sucesso" //adiciona o novo elemento li na ul
    inputTarefa.value= "" 
    inputTarefa.focus() //foca o cursor no input após adicionar uma tarefa
}
document.getElementById("inputTarefa").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }/* usa o id de inputTarefa, addEventListener registra um evento q "ouve" o teclado, no caso o keydown, 
  disparada ao clicar, e.key representa diretamente a tecla. Portanto, se a e.key (tecla) for igualzinho
  a Enter, chamara a função adicionarTarefa
  */
});