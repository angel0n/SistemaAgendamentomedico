const { ipcRenderer } = require('electron')
const Swal = require('sweetalert2')

function criar() {
  window.location.href = "../NewClientes/index.html"
}

function editar() {
  Swal.fire({
    title: 'Editar um Cliente',
    input: 'number',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      localStorage.setItem('edtcli', login)
      window.location.href = "../editarClientes/index.html";
    },
    allowOutsideClick: () => !Swal.isLoading()
  })
}

function excluir() {
  Swal.fire({
    title: 'Deletar um Cliente',
    input: 'number',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      ipcRenderer.invoke('deleteCliente', login).then(result => {
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

ipcRenderer.invoke('getClientes').then((results) => {
  const table = document.getElementById('corpoTable')

  results.forEach((result) => {
    table.innerHTML += `<tr class="pointer" >
                                <td class="pointer">${result.id}</td>
                                <td class="pointer">${result.nome}</td>
                                <td class="pointer">${result.idade}</td>
                                <td class="pointer">${result.cpf}</td>
                                <td class="pointer">${result.telefone}</td>
                                <td class="pointer">${result.endereco}</td>
                            </tr>`;
  })
})