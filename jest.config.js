module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      diagnostics: true,
    },
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/serviceWorker.ts",
    "!src/setupTests.ts",
    "!src/index.tsx",
  ],
  setupFiles: ["./config/jest/setupJest.ts", "./config/jest/setupEnzyme.ts"],
  coveragePathIgnorePatterns: ["./src/*/*.types.{ts,tsx}"],
  coverageReporters: ["json", "lcov", "text-summary", "clover"],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      lines: 95,
      functions: 95,
    },
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ["<rootDir>/src/**/*.test.{js,jsx,ts,tsx}"],
  automock: false,
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js",
  },
  modulePaths: [],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "src/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less)$": "<rootDir>/config/__mocks__/styleMock.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
