module.exports = {
  bail: false,
  verbose: false,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/wwwroot/js-tests/mock/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/wwwroot/js-tests/mock/styleMock.js"
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx",
    "json"
  ],
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  setupFiles: [
    "<rootDir>/wwwroot/js-tests/setup/test-shim.js",
    "<rootDir>/wwwroot/js-tests/setup/enzyme-setup.js"
  ],
  testPathIgnorePatterns: ["<rootDir>/wwwroot/js-tests/setup/"],
};