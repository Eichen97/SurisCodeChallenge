@echo off

dotnet --version > nul 2>&1
if %errorlevel% neq 0 (
    echo .NET SDK is not installed. Please install it from https://dotnet.microsoft.com/
    pause
    exit /b
)

set "script_dir=%~dp0"

cd "%script_dir%back"
start cmd /k "dotnet run"

cd "%script_dir%front"

where npm >nul 2>nul
if %errorlevel% equ 0 (
    echo npm is installed globally
) else if exist "node_modules\npm" (
    echo npm is available in the current directory
) else (
    echo npm is not installed globally or locally. Please install it from https://nodejs.org/
    pause
    exit /b
)

start cmd /k "npm install && exit /b"

cd "src"
start cmd /k "npm run dev"

timeout /t 3 > nul
start Chrome --new-window "http://localhost:5173"
