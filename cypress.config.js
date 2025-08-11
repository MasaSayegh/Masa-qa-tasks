const { defineConfig } = require("cypress");

module.exports = defineConfig({
   video: true,
  	reporter: "mochawesome",
      reporterOptions: {
        reportDir: "cypress/myReport", // where to save in directory
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
    },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
  },
});
