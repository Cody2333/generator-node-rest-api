'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.options = {
      name: 'node-rest-api'
    };
  }
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('generator-node-rest-api') + ' generator!'
    ));
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name:',
        default: this.options.name // Default to current folder name
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author name:',
        default: ''
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description:',
        default: ''
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Confirm to install?',
        default: true
      }]).then(answers => {
        this.options.name = answers.name;
        this.options.author = answers.author;
        this.options.description = answers.description;
        this.options.confirm = answers.confirm;
      });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('node-rest-api/src'),
      this.destinationPath(`${this.options.name}/src`)
    );
    this.fs.copyTpl(
      this.templatePath('node-rest-api/test'),
      this.destinationPath(`${this.options.name}/test`)
    );
    this.fs.copyTpl(
      this.templatePath('node-rest-api/.*'),
      this.destinationPath(`${this.options.name}`)
    );
    this.fs.copyTpl(
      this.templatePath('node-rest-api/README.md'),
      this.destinationPath(`${this.options.name}/README.md`)
    );
    const pkg = this.fs.readJSON(this.templatePath('node-rest-api/package.json'), {});
    pkg.name = this.options.name;
    pkg.author = this.options.author;
    pkg.description = this.options.description;
    this.fs.writeJSON(this.destinationPath(`${this.options.name}/package.json`), pkg);
  }

  end() {
    if (this.options.confirm) {
      this.log(
      `
      All things are almost done.
      Last thing: Edit the mongodb config in [src/config.js] manually
      Enter the porject dir and as below:
      Use command [npm install] or [yarn] to install the dependencies
      Use command [npm run start] to start the project
      Use command [npm run test] to run the test
      `);
    } else {
      this.log('Process terminated');
    }
  }
};
