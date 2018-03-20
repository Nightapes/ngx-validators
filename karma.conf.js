// Karma configuration
// Generated on Wed Dec 02 2015 22:57:01 GMT+0100 (Paris, Madrid)

module.exports = function (config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            "src/**/*.ts" // *.tsx for React Jsx
        ],
        exclude: [
            'node_modules/'
        ],
        preprocessors: {
            "src/**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },
        reporters: ["progress", "karma-typescript"],
        browsers: process.env.TRAVIS ? ['ChromeHeadless'] : ['Chrome'],
        karmaTypescriptConfig: {
            compilerOptions: {
                emitDecoratorMetadata: true,
                experimentalDecorators: true,
                module: "commonjs",
                sourceMap: true,
                target: "ES5",
                lib: ["DOM", "ES2015"]
            },
            include: ["src/**/*.ts"],
        },
        singleRun: true
    });
};