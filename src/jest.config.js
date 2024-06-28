import { Config } from "jest";

const config = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/src/mocks/fileMock.js",
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/mocks/fileMock.js"
    },
    collectCoverageFrom: [
        "./src/**/*.{js,jsx}",
        "!**/node_modules/**"
    ]
}

export default config