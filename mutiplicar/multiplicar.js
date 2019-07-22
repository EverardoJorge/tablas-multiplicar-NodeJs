const fs = require('fs');
const colors = require('colors');

/*---------LISTAR TABLA------------*/
let listar = (base, limite)=>{
  console.log(`================================`.red);
  console.log(`============TABLA===============`.blue);
  console.log(`================================`.red);
  for(let i = 1; i<=limite; i++){
    console.log(`${base} * ${i} = ${base * i}\n`);
  }
}
/*----------FIN DE LISTAR TABLA-------------*/

/*---------------CREAR ARCHIVO---------------*/
let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)){
      reject(`el ${base} no es un numero`);
      return;
    }else{
      let data = "";
      for(let i = 1; i<=limite; i++){
        data += `${base} * ${i} = ${base * i}\n`;
      }
      fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`,data,(err) => {
        if(err)
          reject(err);
          else
            resolve (`tabla-${base}-al-${limite}.txt`);
      });
    }
  });
};
/*--------FIN CE CREAR ARCHIVO------------------*/


module.exports = {
  crearArchivo,
  listar
};
