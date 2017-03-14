# Galen Framework
## Install on OS X and Linux
### NPM-based Installtion:
*If you’re using NPM you can just install galen via the following command:
```
sudo npm install -g galenframework-cli
```
### Manual Installation:
Download the archive from <a href="http://galenframework.com/download/">download page</a> and extract it anywhere. Go to folder and execute the following command: 
```
sudo ./install.sh
```
That’s it! Now you can check if Galen is successfully install by the following command: ``galen -v``
<br>Running the Test:<br>
*First go to ..Galen/Addq-Test/Page and run ``python -m SimpleHTTPServer 8000`` to start a simple http server<br>
*Then in another terminal window/tab go to ``Galen/Addq-Test/galen/tests``<br> 
and run this command line``$ galen test test-example.test --htmlreport ../reports`` 
