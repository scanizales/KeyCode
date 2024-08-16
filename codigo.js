//Decidí crear esta funcion.Objetivo: Devolver una lista así; 1, 2, 3, y 4 y no 1,2,3,4
function mostrarListaconY(lista){
    let salida = ''
    for (let i = 0; i < lista.length; i++){
        if(i == lista.length-1){
            salida += ('y '+ lista[i]+'.') //Último elemento
        }
        else if (i == lista.length-2) {
            salida += lista[i] + ' ' //Penúltimo elemento
        }
        else{
            salida += lista[i] + ', ' //Resto de elementos
        }
    }
    return salida
}

//Definicón de variables
let nombre = 'Pepe'
let edad = 25
let precio = 99.90
let series = ['La ley de los audaces','Gambito de dama']
peliculas_favoritas = [{nombre:'El código enigma ', año_estreno:'2004', protagonistas:['Alang Turing', 'Joan Clarke']},
                       {nombre:'Corazones malheridos', año_estreno:'2022', protagonistas:['Cassie Salazar', 'Luke']},
                       {nombre:'La era de hielo 3', año_estreno:'2009', protagonistas:['Mannie', 'Ellie','Sid','Diego','Buck']}
                      ]

//Mostrar las variables por consola                      
console.log('La variable nombre: '+ nombre)
console.log('La variable edad: '+ edad)
console.log('La variable precio: '+ precio + '\n')

//For para mostrar la lista peliculas_favoritas
for (let i = 0; i < peliculas_favoritas.length; i++){
    if(i==0){
        console.log('Mis películas favoritas son:\n')
    }//Utizamos la función  mostrarListaconY(lista) para mostrar la lista de protagonistas de una forma más amigable
    console.log('Nombre: ' + peliculas_favoritas[i].nombre + '\nAño de estreno: '+ peliculas_favoritas[i].año_estreno + '\nProtagonistas: ' + mostrarListaconY(peliculas_favoritas[i].protagonistas) +'\n')

}

//Incrementamos la edad en 1
edad++

//Mostramos el núevo valor de edad
console.log('Edad con incremento: '+ edad)

//Agregamos un nuevo elemento a la lista de series
series.push('Anne with an "E"')

//Mostramos utilizando la función mostrarListaconY(lista)
console.log('Nueva lista agregando una película: ' + mostrarListaconY(series))


