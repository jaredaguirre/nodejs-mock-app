const fs = require('fs');
const color = require('colors')

const crearArchivoTabla = (argv) => {

    let base = argv.b;
    let printList = argv.l;
    let limit = argv.h;

    let salida ='';
    return new Promise((resolve, reject) => {
        
        try{

            //Creacion de la tabla
            for (let i = 1; i <= limit; i++) {
                salida += `${base} x ${i} = ${base * i}\n`;
            }
            //Escritura de la tabla
            fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);

            if(printList == true)
                console.log(salida);
            resolve(`tabla-del-${base}.txt`);

        }catch{
            reject('Error de grabado. No se pudo crear');
        }
        
    })
}

module.exports = {
    crearArchivoTabla
}