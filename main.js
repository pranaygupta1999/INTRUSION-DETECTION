const {app, BrowserWindow, ipcMain} = require('electron')
// var remote = require('remote'); // Load remote compnent that contains the dialog dependency
// var dialog = remote.require('dialog'); // Load the dialogs component of the OS
var fs = require('fs'); // Load the File System to execute our common tasks (CRUD)

var filepath = "../Results_knn.txt"

ipcMain.on("result", (event, arg) => {
    console.log(arg);
    fs.readFile(filepath, 'utf-8', (err, data) => {
        if(err){
            console.log("An error ocurred reading the file :" + err.message);
            return;
        }

        // Change how to handle the file content
        console.log("The file content is : " + data);
        event.sender.send("result", data);
    });
})

function createWindow(){
    win = new BrowserWindow({
        width:800, 
        height: 520,
        frame: false,
        webPreferences: {
        nodeIntegration: true
    }
    
    })
    
    win.loadURL('http://localhost:3000/home')
}
app.on('ready', createWindow)