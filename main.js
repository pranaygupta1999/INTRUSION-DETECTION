const {app, BrowserWindow, ipcMain} = require('electron')
// var remote = require('remote'); // Load remote compnent that contains the dialog dependency
// var dialog = remote.require('dialog'); // Load the dialogs component of the OS
var fs = require('fs'); // Load the File System to execute our common tasks (CRUD)

var filepath = "../Results_knn.txt"
var filepath1 = "./detect1.txt"
var filepath2 = "./detect2.txt"
var isScanning = false;

ipcMain.on("result", (event, arg) => {
    console.log(arg);
    // let reader = new FileReader;

    fs.readFile(filepath, 'utf-8', (err, data) => {
        if(err){
            console.log("An error ocurred reading the file :" + err.message);
            return;
        }
        event.sender.send("result", data);
    });
});
// ipcMain.on("packets", (event, arg1) => {
 
//     // let reader = new FileReader;
//     console.log(arg1);
//     fs.readFile(filepath1, 'utf-8', (err, detect1) => {
//         if(err){
//             console.log("An error ocurred reading the file :" + err.message);
//             return;
//         }

//         event.sender.send("packets", detect1);
//     });
// })

// ipcMain.on("persentage", (event, arg2) => {

//     // let reader = new FileReader;

//     fs.readFile(filepath2, 'utf-8', (err, detect2) => {
//         if(err){
//             console.log("An error ocurred reading the file :" + err.message);
//             return;
//         }
        
//         event.sender.send("persentage", detect2);
//     });
// })

ipcMain.on("run_script", (event, arg) => {
    // let reader = new FileReader;
    if (isScanning) {
        console.log("scan is already running");
        return;
    }
    var python = require('child_process').spawn('python', ['-u','./src/python/main.py']);
    // var python = require('child_process').spawn('py', ['-u','./src/python/hello.py']); //Comment above line and uncomment this line for windows
    python.stdout.on('data',function(data){
        isScanning = true;
        var outputLine = data.toString('utf8');
        if( outputLine.split(' ')[0] == "UI-DATA" && outputLine.split(' ').length == 3)
            event.sender.send("packets", outputLine.split(' ')[1], outputLine.split(' ')[2])
        process.stdout.write(outputLine);
        
        // event.sender.send("render_again");
            //packets info
        // fs.readFile(filepath1, 'utf-8', (err, detect1) => {
        //     if(err){
        //         console.log("An error ocurred reading the file :" + err.message);
        //         return;
        //     }

        //     event.sender.send("packets", detect1);
        // });

        // //percent
        // fs.readFile(filepath2, 'utf-8', (err, detect2) => {
        //     if(err){
        //         console.log("An error ocurred reading the file :" + err.message);
        //         return;
        //     }
            
        //     event.sender.send("persentage", detect2);
        // });
    });

});

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

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })