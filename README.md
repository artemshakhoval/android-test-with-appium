## android-test-with-appium

Sending messages via whatsapp using Android Virtual Device

## You can clone project by command: 
git clone https://github.com/tjomashah/Android-test-with-appium.git

## Steps you have to do:
1) Download and install Android Studio:
	- put this link "https://developer.android.com/studio/" and click to download;
	- install Android Studio ("https://developer.android.com/studio/install");
	- open Android Studio and build your project (use this link "https://developer.android.com/studio/install");
2) Create Android Virtual Device(AVD) ("https://developer.android.com/studio/run/managing-avds");
3) Launch AVD (tools -> AVD -> actions('launch'));
4) Install Java and set path for JAVA_HOME (use this link "https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04" for help);
5) Set path for ANDROID_HOME (use this link "https://stackoverflow.com/questions/26256279/how-to-set-android-home-path-in-ubuntu" for help)
6) Download and install Appium:
	- put this link "https://appium.io" and click to download;
	- go to downloaded file -> click right button of mouse -> properties -> permissions -> click to allow executinf file
	- launch Appium;
	- go to "Edit Configuration" and put there path for ANDROID_HOME and JAVA_HOME (example: ANDROID_HOME - /home/artem/Android/Sdk, JAVA_HOME - /usr/lib/jvm/java-11-openjdk-amd64); 
	- click save and close this window;
	- in a main window click "Start Server";
	- your Appium was launched

## Start project
1) Start your express server with the command -> npm start
2) Now you need to use some API platform for using APIs (in this example i'm using "Postman"):
	- create API request with your host, port and add data to body in json format ({ "number" : "your number", "message" : "your message" })
3) app will launch and AVD will sent a message