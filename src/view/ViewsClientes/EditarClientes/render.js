const {ipcRenderer} = require('electron')

ipcRenderer.invoke('getClienteId', localStorage.getItem('edtcli')).then(result=>{
  if(result != null){
    document.getElementById('nome').value = result.nome
    document.getElementById('idade').value = result.idade
    document.getElementById('cpf').value = result.cpf
    document.getElementById('telefone').value = result.telefone
    document.getElementById('endereco').value = result.endereco
  }else{
    window.location.href = "../clientes/index.html";
  }
})

function salvar(){
  const nome = document.getElementById('nome').value
  const idade = document.getElementById('idade').value
  const cpf = document.getElementById('cpf').value
  const telefone = document.getElementById('telefone').value
  const endereco = document.getElementById('endereco').value
  const data = {
    nome,
    idade,
    cpf,
    telefone,
    endereco
  }
  ipcRenderer.invoke('editarCliente',data).then(result => {
    if(result){
      window.location.href = "../clientes/index.html";
    }
  })
}