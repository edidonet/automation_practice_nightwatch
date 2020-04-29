require('babel-core/register')

const chromedriver = require('chromedriver');
require('geckodriver');

// const testUrl = 'http://automationpractice.com/'
const defaultTimeout = 15000

console.log(chromedriver.path)
console.log(this.webdriver.server_path)
console.log(webdriver.server_path)

module.exports = {
    src_folders: ['tests'], 

    page_objects_path: './pages',
    globals_path: './hooks/globals.js',

    webdriver: {
        start_process: true,
    },

    // test_workers: {
    //     enabled: true,
    //     workers: 3
    // },

    test_settings:{
        default: {
            globals: {
                // launch_url: testUrl,
                waitForConditionTimeout: defaultTimeout 
            },
            webdriver: {
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: "chrome"
            }
        },

        headless: {
            globals: {
                // launch_url: testUrl,
                waitForConditionTimeout: defaultTimeout 
            },
            webdriver: {
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions: {
                    w3c: false,
                    args: ['--headless', '--no-sandbox']
                }
            }
        },

        firefox: {
            globals: {
                // launch_url: testUrl,
                waitForConditionTimeout: defaultTimeout 
            },
            webdriver: {
                server_path: '.\\node_modules\\.bin\\geckodriver.cmd',
                port: 4444
            },
            desiredCapabilities: {
                browserName: "firefox",
                acceptInsecureCerts: true
            }
        }
    }
}