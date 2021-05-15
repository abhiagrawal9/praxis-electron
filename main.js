const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  // Create New Window
  mainWindow = new BrowserWindow({});

  // Load html into window
  mainWindow.loadFile('index.html');
});
