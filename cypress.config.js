const { lighthouse, prepareAudit } = require('cypress-audit');

module.exports = {
  e2e: {
    baseUrl: 'https://www.amazon.com/',
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
        return launchOptions;
      });

      on('task', {
        lighthouse: lighthouse(),
      });
    },
  },
};
