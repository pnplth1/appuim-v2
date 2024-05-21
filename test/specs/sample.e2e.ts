import { remote } from "webdriverio";

let driver: any;

describe("Android App Test", () => {
  before(async () => {
    driver = await remote({
      capabilities: {
        platformName: "Android",
        "appium:deviceName": "emulator-5554",
        "appium:platformVersion": "14",
        "appium:automationName": "UiAutomator2",
        "appium:app": "/Users/pnpl/appuim-v2/app/ApiDemos-debug.apk",
      },
    });
  });

  it("should open the app", async () => {
    const activity = await driver.getCurrentActivity();
    console.log("Current activity: ", activity);
    expect(activity).toBeDefined();
  });

  after(async () => {
    await driver.deleteSession();
  });
});
