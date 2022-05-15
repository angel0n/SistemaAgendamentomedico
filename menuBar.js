const templateMenu = [
    {
        label: 'Agenda',
        submenu:[
            {
                label: 'Novo',
                accelerator: 'CmdOrCtrl+N',
                /*click(){
                    createNewFile()
                }*/
            },
            {
                label: 'Editar',
                accelerator: 'CmdOrCtrl+e',
                /*click(){
                    openFile()
                }*/
            },
            {
                label: 'Excluir',
                accelerator: 'CmdOrCtrl+d',
                /*click(){
                    saveFile()
                }*/
            }
        ]
    },
    {
        label: 'Cliente',
        submenu:[
            {
                label: 'Novo',
                /*click(){
                    createNewFile()
                }*/
            },
            {
                label: 'Editar',
                /*click(){
                    openFile()
                }*/
            },
            {
                label: 'Excluir',
                /*click(){
                    saveFile()
                }*/
            }
        ]
    },
    /*{
        label: 'Ajuda',
        submenu:[
            {
                label: 'Youtube',
                click(){
                    shell.openExternal('https://www.youtube.com')
                }
            }
        ]
    }*/
]

module.exports = templateMenu