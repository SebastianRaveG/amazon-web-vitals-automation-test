const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');

module.exports = {
  e2e: {
    baseUrl: "https://www.amazon.com/",
    setupNodeEvents(on, config) {
      // Prepara Lighthouse para la auditoría
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      // Configura el task para Lighthouse
      on('task', {
        lighthouse: lighthouse(), // Correcto
      });
    },
  },
};
