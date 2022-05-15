const {ipcMain} = require('electron')


ipcMain.handle('getAgendamentos', async (event, someArgument) => {
  return [{
    id:1,
    data:'2022-05-12',
    hora:'18:00',
    paciente: 'Angelon',
    responsavel: 'Angelon',
    procedimento: 'consulta',
    valor: 150.00
  },{
    id:2,
    data:'2022-06-12',
    hora:'20:00',
    paciente: 'Rafael',
    responsavel: 'Rafael',
    procedimento: 'exame',
    valor: 50.00
  }]
})

ipcMain.handle('getClientes', async (event, someArgument) => {
  return [{
    id:3,
    nome:'Angelon',
    idade:'21',
    cpf: '999.999.999-99',
    telefone: '999999999',
    endereco: 'rua Romeu gava, 511 filomena itatiba',
  },{
    id:4,
    nome:'Rafael',
    idade:'21',
    cpf: '999.999.999-99',
    telefone: '999999999',
    endereco: 'rua 1',
  }]
})


//mensagens procedimentos
ipcMain.handle('getProcedimentos', async (event, someArgument) => {
  return [{
    id:5,
    tipo:'Exame',
    nome:'Sangue',
    descricao: 'Exame de Sangue geral',
  },{
    id:6,
    tipo:'Consulta',
    nome:'Rotina',
    descricao: 'Consulta de rotina',
  }]
})

ipcMain.handle('deleteProcedimento', async (event, id) => {
  console.log(id);
  return true
})

ipcMain.handle('editarProcedimento', async (event, data) => {
  console.log(data);
  return true
})

ipcMain.handle('salvarProcedimento',async (event, data) => {
  console.log(data);
  return true
})

ipcMain.handle('getProcedimentoId', async (event, id) => {
  console.log(id);
  return {
    id:5,
    tipo:'Exame',
    nome:'Sangue',
    descricao: 'Exame de Sangue geral',
  }
})