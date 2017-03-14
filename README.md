# Galen Framework
# Requirements:
For Galen you need to have a Java version 1.8 or greater installed. If you don’t have Java you can install it from [official website](https://www.java.com/en/download/help/download_options.xml)
## Install on OS X and Linux
### NPM-based Installtion:
*If you’re using NPM you can just install galen via the following command:
```
sudo npm install -g galenframework-cli
```
### Manual Installation:
Download the archive from [download page](http://galenframework.com/download/) and extract it anywhere. Go to folder and execute the following command: 
```
sudo ./install.sh
```
That’s it! Now you can check if Galen is successfully install by the following command: 
```
galen -v
```
## Install on Windows:
At the moment there is no installer for Windows. In order to make galen.bat script accessible in your command line you need to manually add it to your Path variable. There is a good article explaining [how to configure Galen in Windows](http://mindengine.net/post/2014-01-08-configuring-galen-framework-for-windows/#.WMfn1BIrJjA)

<hr></hr>

#### Running the Test
1. First you need to start a simple http server, go to ``../Galen/Addq-Test/Page`` and run 
```
python -m SimpleHTTPServer 8000
``` 

2. Then in another terminal window/tab go to ``Galen/Addq-Test/galen/tests`` and run this command line
```
galen test test-example.test --htmlreport ../reports
``` 
