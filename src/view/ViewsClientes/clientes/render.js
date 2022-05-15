const {ipcRenderer} = require('electron')

function excluir(data){
    console.log(data);
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