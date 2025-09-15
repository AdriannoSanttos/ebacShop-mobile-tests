exports.config = {
    //runner: 'local',
    //port: 4723,

    user: 'oauth-j.adriannosanttos-786e7',
    key: '4506ec8f-2a82-4d57-8a30-80429906b168',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: '/',

    

    specs: [
        './test/specs/**/*.cjs'
    ],
    exclude: [],

    maxInstances: 1,
    
    capabilities: [
        //{
        //platformName: 'Android',
        //'appium:deviceName': 'ebac-q',
        //'appium:platformVersion': '9.0',
        //'appium:automationName': 'UiAutomator2',
        //'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        //'appium:appWaitActivity': '.MainActivity',
        //'appium:disableIdLocatorAutocompletion': true
    //}

{
 platformName: 'Android',
 'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
 'appium:deviceName': 'Google.*',
 'appium:platformVersion': '14',
 'appium:automationName': 'UiAutomator2',
 'appium:disableIdLocatorAutocompletion' : true,
 'sauce:options': {
    build: 'appium-build-XCSBF-test-ebacshop1',
    name: 'Ebac Shop Test',
    deviceOrientation: 'PORTRAIT',
    appiumVersion: 'stable'
  },
}

],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
};

