import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'm2q8it',
    fixturesFolder: 'tests/e2e/fixtures',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    e2e: {
        baseUrl: 'http://localhost:5173/',
        specPattern: 'tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'tests/e2e/support/index.js',
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config)
            // include any other plugin code...

            // It's IMPORTANT to return the config object
            // with any changed environment variables
            return config
        },
    },
})
