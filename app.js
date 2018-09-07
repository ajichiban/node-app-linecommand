const {argv} = require('./config/yargs')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const colors = require('colors')

let comando = argv._[0]

let base = argv.base | argv.b
let limite = argv.limite | argv.l

switch (comando) {

    case 'listar':
        listarTabla(base, limite )
            .then( tabla => console.log(tabla.green))
            .catch( err => console.log('Error: ', err))
        break

    case 'crear':
        crearArchivo(base, limite)
            .then(res => console.log('archivo creado :'.green, res.yellow))
            .catch(err => console.log('Erro :', err))
        break

    default:
        console.log(`'${comando}' no es un comando valido`)
        break
}
