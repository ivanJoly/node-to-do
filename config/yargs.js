const argv = require('yargs')
            .command('crear', 'Crea una nueva tarea por hacer', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea por hacer'
            }
            })
            .command('actualizar', 'Actualizar el estado completado de una tarea', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea por hacer'
            },
            completado:{
                default: true,
                alias: 'c',
                desc: 'Marca como completado o pendiente la tarea'
            }  
            })
            .command('borrar', 'Elimina la tarea', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea por hacer'
            }
            })
            .help()
            .argv

module.exports = {
    argv
}