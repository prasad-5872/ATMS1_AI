@echo off
title ATLAS Traffic Control - Full Stack Launcher
color 0b
echo ==============================================================
echo   ATLAS: Full Stack Adaptive Traffic Control Management System
echo   Connecting: Frontend + Python REST Backend + SQLite DB
echo ==============================================================
echo.

cd /d "%~dp0"

echo [1/3] Starting Python Backend Server & SQLite Database (Port 8000)...
start "ATLAS-Backend-SQLite" /min python backend_server.py

echo [2/3] Waiting 2 seconds for SQLite database connection...
timeout /t 2 /nobreak >nul

echo [3/3] Launching Web Control Room in Browser...
start http://localhost:3000/

echo.
echo ==============================================================
echo   ATLAS FULL-STACK STATUS:
echo   - SQLite Database: atlas_traffic.db (Initialized & Connected)
echo   - Python REST API: http://127.0.0.1:8000/api/state
echo   - Frontend UI:     http://localhost:3000/
echo.
echo   Press Ctrl+C in this window anytime to stop Vite.
echo ==============================================================
npm run dev

pause
