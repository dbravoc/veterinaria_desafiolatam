// operaciones.js
const fs = require('fs');
const citasPath = './citas.json';

function registrar(nombre, edad, tipoAnimal, color, enfermedad) {
    const cita = { nombre, edad, tipoAnimal, color, enfermedad };
    const citas = JSON.parse(fs.readFileSync(citasPath));
    citas.push(cita);
    fs.writeFileSync(citasPath, JSON.stringify(citas, null, 2));
    console.log('Cita registrada con éxito.');
}

function leer() {
    const citas = JSON.parse(fs.readFileSync(citasPath));
    console.log('Citas registradas:', citas);
}

module.exports = { registrar, leer };
