@echo off
echo Limpiando carpeta dist...

:: Mata procesos Node
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM npm.exe >nul 2>&1

:: Espera un momento
timeout /t 2 /nobreak >nul

:: Elimina la carpeta
if exist dist (
    rmdir /S /Q dist
    echo Carpeta dist eliminada.
) else (
    echo La carpeta dist no existe.
)

echo Listo!
pause