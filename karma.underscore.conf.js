// Karma configuration
// Generated on Fri Aug 09 2013 14:14:35 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.0-beta.13/angular.js',
        'src/angular-filters.js',
        'src/**/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit'
    reporters: ['progress'],

    // web server port
    port: 9877,

    // cli runner port
    runnerPort: 9101,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};