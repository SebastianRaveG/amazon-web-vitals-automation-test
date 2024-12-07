const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    videosFolder: 'cypress/videos',
    pageLoadTimeout: 120000,
  },
});
