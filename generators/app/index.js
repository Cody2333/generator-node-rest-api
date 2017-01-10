'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('generator-node-rest-api') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'confirm',
      message: 'Confirm to install ?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('express-rest-api/.*'),
      this.destinationPath('node-rest-api')
    );
    this.fs.copyTpl(
      this.templatePath('express-rest-api/'),
      this.destinationPath('node-rest-api')
    );
  }
});
