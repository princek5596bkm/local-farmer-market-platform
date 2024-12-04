const { app, BrowserWindow } = require('electron');
const path = require('path');
const { exec } = require('child_process');

// Start the Spring Boot backend (using the JAR file)
const startBackend = () => {
    exec('java -jar path-to-your-spring-boot-app.jar', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting backend: ${error}`);
            return;
        }
        console.log(`Backend started successfully: ${stdout}`);
    });
};

// Create the Electron window and load the React build
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load the React production build index.html
    win.loadURL(`file://${path.join(__dirname, 'build', 'index.html')}`);

    win.on('closed', () => {
        app.quit();
    });
};

// Wait for Electron to be ready
app.whenReady().then(() => {
    startBackend();  // Start the Spring Boot backend
    createWindow();   // Create the Electron window with React frontend
});

// Quit the app when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
