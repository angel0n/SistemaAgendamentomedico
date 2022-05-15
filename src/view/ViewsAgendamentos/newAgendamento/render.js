const {ipcRenderer} = require('electron')

ipcRenderer.invoke('getProcedimentosAgendamento').then((results) => {
  const select = document.getElementById('procedimento')
    results.forEach((result) => {
      select.innerHTML += `
          <option>${result}</option>
      `
    })
})

function salvar(){
  const paciente = document.getElementById('paciente').value
  const date = document.getElementById('data').value
  const hora = document.getElementById('hora').value
  const procedimento = document.getElementById('procedimento').value
  const responsavel = document.getElementById('responsavel').value
  const valor = document.getElementById('valor').value
  const data = {
    paciente,
    date,
    hora,
    procedimento,
    responsavel,
    valor
  }
  ipcRenderer.invoke('salvarAgendamento',data).then(result => {
    if(result){
      window.location.href = "../main/index.html";
    }
  })
}