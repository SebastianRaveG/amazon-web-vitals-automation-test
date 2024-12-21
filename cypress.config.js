const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = {
  e2e: {
    baseUrl: "https://www.amazon.com", // baseUrl correcto
    setupNodeEvents(on, config) {
      const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--no-sandbox'); // Ayuda en entornos CI
          launchOptions.args.push('--disable-dev-shm-usage');
        }
        prepareAudit(launchOptions);
        return launchOptions;
      });

      on("task", {
        lighthouse: lighthouse(), // Define la tarea de Lighthouse
      });
    },
    chromeWebSecurity: false,
  },
};
