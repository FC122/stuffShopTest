const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports/html/.jsons",
    "overwrite": false,
    "html": false,
    "json": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
    env:{
      frontendUrl: "https://stuff-shop.onrender.com",
      backendUrl: "https://stuffshopserver.onrender.com",
    }
  },
});
