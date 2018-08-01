const { argv } = require('./config/yargs');

const colors = require('colors');
const toDo = require('./to-do/to-do');

let comando = argv._[0]

switch( comando ) {

    case 'crear':
        let tarea = toDo.crear( argv.descripcion );
        console.log(tarea);
        break;

    case 'listar':
        let listado = toDo.getListado();

        console.log('==POR HACER=='.green);
        for (let tarea of listado){
            console.log('Descripcion: ',tarea.descripcion);
            console.log('Estado: ', tarea.completado);
        }
        console.log('============='.green);
    break;

    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;

    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
    console.log('Comando no reconocido');
}