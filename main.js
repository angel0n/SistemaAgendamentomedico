const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const templateMenu = require('./menuBar')

require('./src/services/ControlerIpcMain')

function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        frame:true,
        webPreferences: {
            nodeIntegration:true,
           contextIsolation:false
        }
    })
    const mainPath = path.join(__dirname, 'src','view','ViewsAgendamentos','main','index.html')
    mainWindow.loadFile(mainPath)
    // Open the DevTools.
   mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})


const menu = Menu.buildFromTemplate(templateMenu)
Menu.setApplicationMenu(menu)