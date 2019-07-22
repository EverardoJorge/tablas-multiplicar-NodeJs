/*
*COMENTARIOS DEL PROGRAMA
*/

const argv = require ('./settings/yargs').argv;
const colors = require('colors');
const {crearArchivo, listar} = require('./mutiplicar/multiplicar');


//let argv = process.argv;

//console.log('LIMITE',argv.limite);

let comando = argv._[0];

switch(comando){
  case 'crear':
    crearArchivo(argv.base, argv.limite).then(mensaje => {
      console.log(`=======================================================`.green);
      console.log(`El archivo '${mensaje.green}' fue creado exitosamente`);
      console.log(`=======================================================`.green);
      }).catch(e => console.log(e));
    break;

  case 'listar':
      listar(argv.base, argv.limite);
    break;
  default:
    console.log('comando no reconocido');
};


/*
*/
