const {ipcRenderer} = require('electron')

function excluir(data){
    console.log(data);
}

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