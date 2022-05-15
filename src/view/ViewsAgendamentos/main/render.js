const {ipcRenderer} = require('electron')
const Swal = require('sweetalert2')


ipcRenderer.invoke('getAgendamentos').then((results) => {
    const table = document.getElementById('corpoTable')

    results.forEach((result) => {
        table.innerHTML += `<tr class="pointer" >
                                <td class="pointer">${result.id}</td>
                                <td class="pointer">${Date.parse(result.data)}</td>
                                <td class="pointer">${result.hora}</td>
                                <td class="pointer">${result.paciente}</td>
                                <td class="pointer">${result.responsavel}</td>
                                <td class="pointer">${result.procedimento}</td>
                                <td class="pointer">${result.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                            </tr>`;
    })
})


function criar() {
    window.location.href = "../newAgendamento/index.html"
  }
  
  function editar() {
    Swal.fire({
      title: 'Editar um Agendamento',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        localStorage.setItem('edtagen', login)
        window.location.href = "../editarAgendamento/index.html";
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }
  
  function excluir() {
    Swal.fire({
      title: 'Deletar um Agendamento',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        ipcRenderer.invoke('deleteAgendamento', login).then(result => {
          if (result) {
            Swal.fire('Deletado com sucesso')
          } else {
            Swal.fire('Falha ao Deletar')
          }
        })
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }