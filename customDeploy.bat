@ECHO OFF
ECHO CUSTOM DEPLOY IN ACTION!
ECHO ------------------------

ECHO RUN: npm install
call npm install

ECHO ------------------------
ECHO Npm install DONE successfully
ECHO ------------------------

ECHO RUN: npm run build for production env
call npm run build

ECHO ------------------------
ECHO Npm run build DONE successfully
ECHO ------------------------

ECHO RUN: node beforePublishCustom script for change version and module.exports
call node .\customDeploy\beforePublishCustom.js

ECHO ------------------------
ECHO I did everything for you
ECHO ------------------------

:choice
set /P c=You want to publish the package in NPM repo [Y/N]?
if /I "%c%" EQU "Y" goto :somewhere
if /I "%c%" EQU "N" goto :somewhere_else


:somewhere

echo "Publish your script to NPM"
cd packages\react-data-grid
call npm publish
cd..
cd..
ECHO ------------------------
ECHO Package published successfully
ECHO ------------------------


:somewhere_else

echo "Now you only need to go to /package/react-data-grid and run NPM PUBLISH"