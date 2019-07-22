let options = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias:'l',
    default: 10
  }
}


const argv = require('yargs')
                            .command('listar', 'Imprimir tablas',options)
                            .command('crear','Crear archivo',options)
                            .help()
                            .argv;


module.exports = {
  argv
}
