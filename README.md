# placeholder directive

a placeholder polyfill,  the directive which support placeholder attribute in ie8, ie9

# Requirements

- AngularJS

# Testing

We use karma to ensure the quality of the code.  The easiest way to run test is to use grunt:

    npm install
    npm test

The karma task will try to open IE as a browser in which to run the tests. Make sure this is available or change the configuration in test\karma.config.js

# Usage

We use [bower](http://twitter.github.com/bower/) for dependency management.  Add

    dependencies: {
        "angular-ui-placeholder": "latest"
    }

To your `bower.json` file. Then run

    bower install

This will copy the placeholder files into your `bower_components` folder, along with its dependencies. 

Next, read demo/index.html for detail
