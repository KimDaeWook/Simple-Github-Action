const core = require ('@actions/core')

const name = core.getInput('who-to-wish',{default: 'Sukresh'})

console.log("Hii Mr/Miss "+name)

core.setOutput("statement","Hii Mr/Miss "+name)
