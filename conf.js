exports.config = {
//seleniumAddress: 'http://localhost:4444/wd/hub',
directConnect: true,
specs: ['todo-spec.js'],

capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
    'binary': "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    'args': ['--user-data-dir=C:/Temp/ChromeProfile','--user-data-dir=C:/Temp/ChromeProfile','--no-sandbox','--remote-debugging-port=9222']
    },


},
};
