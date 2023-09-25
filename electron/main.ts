import { app, BrowserWindow } from 'electron'
import { createIPCHandler } from 'electron-trpc/main'
import { appRouter } from '../trpc/router'
import path from 'path'

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      webSecurity: true,
    },
  })
  createIPCHandler({ router: appRouter, windows: [win] })
  win.setMenuBarVisibility(false)
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, '../.output/public/index.html'))
  } else {
    win.loadURL(process.env.VITE_DEV_SERVER_URL as string)
  }
})
