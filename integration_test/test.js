const opts = {
  port: 4723,
  capabilities: {
    // platformName: "Android",
    platformName: "iOS",
    // platformVersion: "8.0",
    // platformVersion: "12.4",
    platformVersion: "12.2",
    // deviceName: "Android Emulator",
    deviceName: "iPhone 8",
    // udid: "7B30BCC6-A19E-490E-906C-6872E178B57B", // device id
    udid: "3bf3857b6b09734ea10121ad203f655993373fad",
    bundleId: "com.example.avCapture",
    // app: "/path/to/the/downloaded/ApiDemos.apk",
    // automationName: "UiAutomator2"
    automationName: "XCUITest",
    xcodeOrgId: "UGN693JR2J",
    xcodeSigningId: "iPhone Developer"
}
};
const webdriverio = require('webdriverio');


async function a() {
    const client = await webdriverio.remote(opts);
    const size = await client.getWindowSize();
    console.log(size)
    await client.pause(1000);
    // console.log(client.getPageSource());
    await client.acceptAlert();
    // await client.dismissAlert();
//     await client.touchAction({
//         action:"tap",
//         x: "276", y: "368"})
// await        client.touchAction({
//             action:"press",
//             x: "276", y: "368"})
//      await       client.touchAction({
//                 action:"tap",
//                 x: "276", y: "368"})
                // await field.setValue("Hello World!");
    // const value = await field.getValue();
    // assert.equal(value,"Hello World!");
}

a();
