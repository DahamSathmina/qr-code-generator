const path = require('path');
const { app, BrowserWindow, ipcMain, Menu } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    frame: false, // No default title bar
    icon: path.join(__dirname, './Assets/ico/icon-512.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  Menu.setApplicationMenu(null); // Hide menu bar
  win.loadFile('index.html');

  ipcMain.on('window-control', (event, action) => {
    if (action === 'minimize') win.minimize();
    else if (action === 'maximize') win.isMaximized() ? win.unmaximize() : win.maximize();
    else if (action === 'close') win.close();
  });
}

app.whenReady().then(createWindow);
