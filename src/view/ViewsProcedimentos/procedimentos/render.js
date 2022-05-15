const {ipcRenderer} = require('electron')
const Swal = require('sweetalert2')

ipcRenderer.invoke('getProcedimentos').then((results) => {
    const table = document.getElementById('corpoTable')

    results.forEach((result) => {
        table.innerHTML += `<tr class="pointer" >
                                <td class="pointer">${result.id}</td>
                                <td class="pointer">${result.tipo}</td>
                                <td class="pointer">${result.nome}</td>
                                <td class="pointer">${result.descricao}</td>
                            </tr>`;
    })
})

function excluir(){
    Swal.fire({
        title: 'Deletar um Procedimento',
        input: 'number',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          ipcRenderer.invoke('deleteProcedimento',login).then(result =>{
            if(result){
              Swal.fire('Deletado com sucesso')
            }else{
              Swal.fire('Falha ao Deletar')
            }
          })
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
}

function editar(){
  Swal.fire({
    title: 'Editar um Procedimento',
    input: 'number',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      localStorage.setItem('edtproc',login)
      window.location.href = "../editarProcedimento/index.html";
    },
    allowOutsideClick: () => !Swal.isLoading()
  })
}

function criar(){
  window.location.href = "../newProcedimento/index.html";
}