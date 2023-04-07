@echo off
:restart
java -Xmx8G -jar fabric-server-mc.1.19.2-loader.0.14.19-launcher.0.11.2.jar nogui
sleep 5
goto restart