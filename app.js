const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)

console.log(chalk.bold.inverse.green('Success!'))

console.log(chalk.bold.inverse.red('Success!'))

console.log(chalk.bold.inverse.yellow('Success!'))

