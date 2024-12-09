const { prepareAudit } = require('@cypress-audit/lighthouse');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);  // Prepara la auditoría de Lighthouse
      });

      on('task', {
        lighthouse: require('@cypress-audit/lighthouse').lighthouse,
      });
    },
    baseUrl: "https://www.amazon.com/",
    desktopWidth: 1920,
    desktopHeight: 1080,
    mobileWidth: 375,
    mobileHeight: 812,
    supportFile: 'cypress/support/commands.js',
  },
};
