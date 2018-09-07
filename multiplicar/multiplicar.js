// requireds
const fs = require('fs')
const colors = require('colors')

let listarTabla = (base, limite = 10)=>{
    return new Promise((res, rej)=>{
        let tabla = '############################ \n'
        for(let i = 1; i <= limite; i++){
            tabla += `${i} x ${base} = ${base * i} \n`
        }
        tabla += '############################ \n'
        res(tabla)
    })
}

let crearArchivo = (base, limite = 10) =>{
    return new Promise((resolve, reject)=>{

        // Validando si es un numero.
        if(!Number(base)){
            reject(`${base} no es un numero`)
            return
        }
        let data = ''
        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`
        }
        // escribir en un archivo.
        fs.writeFile(`tablas/tabla-${base}.txt`, data, e =>{
            if(e) reject(e)
            else
                resolve(`tabla-${base}.txt`)
         })
         
    })
}

// exportar
module.exports = {crearArchivo, listarTabla}


