const {ipcRenderer} = require('electron')


function salvar(){
  const nome = document.getElementById('nome').value
  const desc = document.getElementById('descrição').value
  const tipo = document.getElementById('tipo').value
  const data = {
    nome,
    desc,
    tipo
  }
  ipcRenderer.invoke('salvarProcedimento',data).then(result => {
    if(result){
      window.location.href = "../procedimentos/index.html";
    }
  })
}