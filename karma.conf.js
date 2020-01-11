process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function(config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: ["src/**/*.ts"],
    preprocessors: {
      "src/**/*.ts": "karma-typescript"
    },
    karmaTypescriptConfig: {
      include: ["src/**/*.ts"],
      compilerOptions: {
        module: "commonjs"
      }
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeWithoutSecurity"],
    customLaunchers: {
      ChromeWithoutSecurity: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox", "--disable-setuid-sandbox"]
      }
    },
    singleRun: true
  });
};
