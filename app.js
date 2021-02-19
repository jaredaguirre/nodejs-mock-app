const multiply = require('./helpers/multiply');
const argv = require('./config/args-validator');

console.log(argv);
multiply.crearArchivoTabla(argv)
    .then(file => console.log(`Se grabo ${file}`))
    .catch(err => console.log(err));
