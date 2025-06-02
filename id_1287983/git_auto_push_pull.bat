@echo off
cd /d %~dp0
echo === Pulling latest changes from GitHub...
git pull origin main

echo === Adding local changes...
git add .

echo === Committing with message...
git commit -m "Daily auto update"

echo === Pushing to GitHub...
git push origin main

echo === Done.
pause
