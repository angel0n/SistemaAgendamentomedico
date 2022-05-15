const {ipcRenderer} = require('electron')


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
  ipcRenderer.invoke('salvarCliente',data).then(result => {
    if(result){
      window.location.href = "../clientes/index.html";
    }
  })
}