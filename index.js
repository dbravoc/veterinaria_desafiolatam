// index.js
const { registrar, leer } = require('./operaciones');

const [nodePath, scriptPath, operacion, ...args] = process.argv;

switch (operacion) {
    case 'registrar':
        registrar(...args);
        break;
    case 'leer':
        leer();
        break;
    default:
        console.log('Operación no reconocida.');
}
