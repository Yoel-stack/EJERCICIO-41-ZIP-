/*
 * EJERCICIO:
 * ¿Has visto la camiseta.rar?
 * https://x.com/MoureDev/status/1841531938961592740
 *
 * Crea un programa capaz de comprimir un archivo 
 * en formato .zip (o el que tú quieras).
 * - No subas el archivo o el zip.
 */

const fs = require ('fs');
const archiver = require ('archiver');

var output = fs.createWriteStream(Date.now()+'.zip')
var archive = archiver('zip'); 
archive.pipe(output);

archive.append(fs.createReadStream('nombreArchivo'), {name: 'nombreQueLePondremos'});

archive.finalize(); //Forma facil de comprimir cualquier archivo a Zip




