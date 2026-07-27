echo off
title www.whitecloud.iblogger.org
DEL %systemroot%\prefetch\ /Q /S
DEL %systemroot%\Temp\ /Q /S
DEL %systemroot%\%temp%\ /Q /S
DEL "%USERPROFILE%\Local Settings\Temporary Internet Files" /Q /S /F
DEL "%USERPROFILE%\Local Settings\Temp" /Q /S /F
DEL "%USERPROFILE%\Local Settings\Historique" /Q /S /F
DEL "%USERPROFILE%\Local Settings\Application Data\Microsoft\Windows live contacts" /Q /S /F
del "%USERPROFILE%\RECENT" /Q /S /F
del "%USERPROFILE%\Cookies" /Q /S /F  

cls
@echo off
del /s /f /q c:\windows\temp\*.*
rd /s /q c:\windows\temp
md c:\windows\temp
del /s /f /q C:\WINDOWS\Prefetch
del /s /f /q %temp%\*.*
rd /s /q %temp%
md %temp%
deltree /y c:\windows\tempor~1
deltree /y c:\windows\temp
deltree /y c:\windows\tmp
deltree /y c:\windows\ff*.tmp
deltree /y c:\windows\history
deltree /y c:\windows\cookies
deltree /y c:\windows\recent
deltree /y c:\windows\spool\printers
deltree /y c:\windows\prefetch
del c:\WIN386.SWP
cls

@ECHO off


SET T1= Done By myomyintkyaw

DEL %systemroot%\prefetch\ /Q /S

DEL "%USERPROFILE%\Local Settings\Temporary Internet Files" /Q /S /F

DEL "%USERPROFILE%\Local Settings\Temp" /Q /S /F

DEL "%USERPROFILE%\Local Settings\Historique" /Q /S /F

DEL "%USERPROFILE%\RECENT" /Q /S /F

DEL "%USERPROFILE%\Cookies" /Q /S /F

Echo ******* *******
Echo ****** ******
Echo ***** *****
Echo **** Finished ****
Echo ***** *****
Echo ****** ******
Echo ******* *******


