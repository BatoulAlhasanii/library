module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: [
        "./test/setEnvVars.js"
    ],
    setupFilesAfterEnv: [
        "./test/setup.ts"
      ]
};