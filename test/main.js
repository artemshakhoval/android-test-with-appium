const wdio = require("webdriverio");

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: "11",
        deviceName: "pixel_4",
        automationName: "UiAutomator2",
        noReset: true,
        app: "/home/artem/Delinternet/android-test-with-appium/whatsapp.com.apk",
        appPackage: "com.whatsapp",
        appActivity: "com.whatsapp.Main", 
    }
};

async function main() {
    const client = await wdio.remote(opts);
  
    const searchBtn = await client.$('//android.widget.TextView[@content-desc="Search"]');
    await searchBtn.click();

    const inputField = await client.$('//android.widget.EditText[@resource-id="com.whatsapp:id/search_input"]');
    await inputField.setValue("Me");

    const applyBtn = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.RelativeLayout/android.widget.LinearLayout');
    await applyBtn.click();

    const msgContent = await client.$('//android.widget.EditText[@index="1"]');
    await msgContent.setValue("Test message");

    const sendBtn = await client.$('//android.widget.ImageButton[@content-desc="Send"]');
    await sendBtn.click()
    
    await client.deleteSession();
    
}

main();