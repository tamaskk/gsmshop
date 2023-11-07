@echo off
for %%F in (*.png) do (
  cwebp "%%F" -o "%%~nF.webp"
)