var clasificacion = ['Maria', 'Sonia', 'Clara', 'Maria Jose', 'Eva', 'Pilar',]

clasificacion.splice(1, 1, 'Clara')
clasificacion.splice(2, 1, 'Sonia')

var eliminadas = clasificacion.splice(clasificacion.length - 3, 3)

var eliminadasAnteriores = ['Bea', 'Miriam']

while (eliminadasAnteriores.length > 0) {
    eliminadas.push(eliminadasAnteriores[0])
    eliminadasAnteriores.shift()
}

var premios = [150, 100, 50]

for (let i = 0; i < clasificacion.length - 1; i++) {
    console.log('Nombre: ', clasificacion[i])
    console.log('Premio: ', premios[i])
    console.log(' ')
}

var aleatorios = []
while (aleatorios.length < 100) {
    var n = Math.round(Math.random() * 100)
    aleatorios.push(n)
}



var aleatorios2 = []
while (aleatorios2.length < 100) {

    var n = Math.round(Math.random() * 100)

    if (!(aleatorios2.includes(n))) {
        aleatorios2.push(n)
    }

}

for (let index = 0; index < aleatorios2.length; index++) {
    console.log(aleatorios2[index]);

}


function Comprobar() {
    var ordenado = true
    var j = 0
    while (j < aleatorios2.length - 1 && ordenado) {
        var n1 = aleatorios2[j]
        var n2 = aleatorios2[j + 1]
        if (n1 > n2) {
            ordenado = false
        }
        j++
    }
    return ordenado
}
function Cambio(a, b) {
        var aux = aleatorios2[a];
        aleatorios2[a] = aleatorios2[b];
        aleatorios2[b] = aux;
}

while (!Comprobar()) {

    for (x = 0; x < aleatorios2.length; x++) {
        var n1 = aleatorios2[x]
        var n2 = aleatorios2[x + 1]

        if (n1 > n2) {
            Cambio(x, x + 1)
        }

    }
}

for (let i = 0; i < aleatorios2.length; i++) {
    console.log(aleatorios2[i]);
}
