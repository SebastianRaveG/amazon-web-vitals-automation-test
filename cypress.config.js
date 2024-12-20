const { lighthouse, prepareAudit } = require('cypress-audit');

module.exports = {
  e2e: {
    baseUrl: 'https://www.amazon.com/',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        launchOptions.args.push('--disable-gpu'); // Desactivar la aceleración por hardware
        prepareAudit(launchOptions);
        return launchOptions;
      });

      on('task', {
        lighthouse: lighthouse(),
      });
    },
  },
};
