const { ipcRenderer } = require('electron')

ipcRenderer.invoke('getProcedimentosAgendamento').then((results) => {
  const select = document.getElementById('procedimento')
  results.forEach((result) => {
    select.innerHTML += `
          <option>${result}</option>
      `
  })
})

ipcRenderer.invoke('getAgendamentoId', localStorage.getItem('edtagen')).then(result => {
  if (result != null) {
    document.getElementById('paciente').value = result.paciente
    document.getElementById('data').value = result.data
    document.getElementById('hora').value = result.hora
    document.getElementById('procedimento').value = result.procedimento
    document.getElementById('responsavel').value = result.responsavel
    document.getElementById('valor').value = result.valor
  } else {
    window.location.href = "../main/index.html";
  }
})

function salvar() {
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
  ipcRenderer.invoke('salvarAgendamento', data).then(result => {
    if (result) {
      window.location.href = "../main/index.html";
    }
  })
}