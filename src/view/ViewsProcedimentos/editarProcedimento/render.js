const {ipcRenderer} = require('electron')

ipcRenderer.invoke('getProcedimentoId', localStorage.getItem('edtproc')).then(result=>{
  if(result != null){
    document.getElementById('nome').value = result.nome
    document.getElementById('descrição').value = result.descricao
    document.getElementById('tipo').value = result.tipo
  }else{
    window.location.href = "../procedimentos/index.html";
  }
})

function editar(){
  const nome = document.getElementById('nome').value
  const desc = document.getElementById('descrição').value
  const tipo = document.getElementById('tipo').value
  const data = {
    nome,
    desc,
    tipo
  }
  ipcRenderer.invoke('editarProcedimento',data).then(result => {
    if(result){
      window.location.href = "../procedimentos/index.html";
    }
  })
}