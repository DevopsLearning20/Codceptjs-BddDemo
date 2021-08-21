exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://zero.webappsecurity.com',
      show: false,
      restart: false,
      windowSize: '1200x900',
      waitForNavigation: "networkidle0",
      chrome: { args: ['--no-sandbox', '--ignore-certificate-errors', '--disable-setuid-sandbox'] }
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    StepByStepReport: {
      enabled: false,
      screenshotsForAllureReport: true
    },
    allure: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  autoLogin: {
    enabled: true,
    saveToFile: true,
    inject: 'login',
    users: {
      user: {
        // loginAdmin function is defined in `steps_file.js`
        login: (I) => I.loginUser(),

      }

    }
  },

  tests: './tests/**/*.js',
  name: 'BddDemo'
}