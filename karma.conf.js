// Karma configuration
// Generated on Wed Dec 02 2015 22:57:01 GMT+0100 (Paris, Madrid)

module.exports = function (config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            "src/**/*.ts" // *.tsx for React Jsx
        ],
        exclude: [
            'node_modules/**/*spec.js'
        ],
        preprocessors: {
            "src/**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },
        reporters: ["progress", "karma-typescript"],
        browsers: process.env.TRAVIS ? ['ChromeHeadless'] : ['Chrome'],
        karmaTypescriptConfig: {
            exclude: [
                'node_modules/**/*spec.js',
                'examples/**/*.ts'
            ],
            compilerOptions: {
                lib: [
                    "es5",
                    "es6",
                    "dom"
                ]
            }
        },
        singleRun: true
    });
};