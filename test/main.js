const wdio = require("webdriverio");

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: "11",
        deviceName: "pixel_4",
        automationName: "UiAutomator2",
        app: "/home/artem/Delinternet/android-test-with-appium/whatsapp.com.apk",
        //app: "/home/artem/Android/Sdk/platform-tools/whatsapp.com.apk",
        appPackage: "com.whatsapp",
        appActivity: "com.whatsapp.Main", 
        // app: "/home/artem/Delinternet/Android_test/app-test/messages.com.apk",
        // appPackage: "com.imessages.messaging.chat",
        // appActivity: "com.imessages.messaging.chat.sms.activity.SplashActivity",
    }
};

async function main() {
    const client = await wdio.remote(opts);

    const agreeBtn = await client.$("//android.widget.Button[@index='6']");
    await agreeBtn.click();

    const codeNum = await client.$("//android.widget.EditText[@index='0']");
    await codeNum.setValue("34");

    const mainNum = await client.$("//android.widget.EditText[@index='1']");
    await mainNum.setValue("621274614");

    const nextBtn = await client.$("//android.widget.Button[@index='4']");
    await nextBtn.click();

    const okBtn = await client.$("//android.widget.Button[@index='1']");
    await okBtn.click();

    ////////// sms ////////////////
    // const checkBtn = await client.$("//android.widget.CheckBox[@index='0']");
    // await checkBtn.click();

    // const defBtn = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout[2]");
    // await defBtn.click();

    // const allowBtn = await client.$("//android.widget.Button[@index='0']");
    // await allowBtn.click();

    // const allowBtnCall = await client.$("//android.widget.Button[@index='0']");
    // await allowBtnCall.click();

    // const allowBtnMsg = await client.$("//android.widget.Button[@index='0']");
    // await allowBtnMsg.click();

    // const cancelBtn = await client.$("//android.widget.Button[@index='0']");
    // driver.pause(10000)
    // await cancelBtn.click();
    ////////////////////////////
    await client.deleteSession();
}

main();