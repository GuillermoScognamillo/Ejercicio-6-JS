/* Ejercicio 6: Ámbito (Scope)
Escribe un programa que declare una variable dentro de una función e intente acceder a ella fuera de la función. Observa qué pasa y explica por qué.
Escribe un programa que declare una variable dentro de un bloque (por ejemplo, dentro de una declaración if) e intente acceder a ella fuera del bloque. Observa qué pasa y explica por qué.
Desafío Adicional
Escribe un programa que pida al usuario su nombre y edad, luego imprima un mensaje de saludo personalizado y calcule cuántos años faltan para que cumpla 100 años.
Escribe una función esPrimo que tome un número como parámetro y devuelva true si el número es un número primo y false de lo contrario. Prueba esta función con diferentes números. */

/* let multiplicar = (a,b)=>{
    let nro = 5;
    return a*b;
}

const resultado = multiplicar(5,6) ;
console.log(resultado);

console.log(nro); */

// Aqui indica un mensaje de error, que la variable no esta definida. Esto se debe a que estoy llamando a una variable Local dentro del scope global

/* let casa = "de madera";

if (casa == "de ladrillo"){
    let vivienda = true;
    console.log(vivienda);
}
else{
    let vivienda = false;
    console.log(vivienda);
}

console.log(vivienda); */

//Se observa lo mismo, al declarar la variable dentro del bloque if, cuando se quiere mostrar por fuera del bloque, muestra un mensaje de error, que vivienda no esta definida.


const userName = prompt(`Escriba su numbre`);
const Edad = prompt(`Escriba su edad`);

let calculo = (a)=>{
    return 100-a;
}
const diferencia = calculo(Edad);


alert(`Hola ${userName}, te faltan ${diferencia} años para cumplir 100`);


/* Función que averigua si un nro es primo */
let esPrimo = (a) => {
    for (let i = a - 1; i > 1; i--) {
        if (a % i == 0) {
            /* console.log(`es multiplo de ${i}`); */
            return false;
        }
    }
    return true;
}

/* Función que muestra todos los nros primos hasta a */
let quienesSonPrimos = (a) => {
    contador = 0;
    for (let i = 2; i < a; i++) {
        prueba = esPrimo(i);
        if (prueba == true) {
            console.log(i);
            contador++;
        }
    }
    console.log(`Hay ${contador} números primos hasta ${a}`);
}

/* Función que muestra todos los nros NO primos hasta a */
let quienesNoSonPrimos = (a) => {
    for (let i = 2; i < a; i++) {
        prueba = esPrimo(i);
        if (prueba == false) {
            console.log(i);
        }
    }
}

/* Función que abre un menu de elección de nro primos o no primos y cantidad a ver */

function menu(){
    const seleccion = prompt(`Escriba 1 si quiere ver nros primos o 2 si quiere ver NO primos`);

    const nro = prompt(`Hasta que nro quiere ver quienes son o no son primos?`);

    if (seleccion == 1) {
        quienesSonPrimos(nro);
    }
    else if (seleccion == 2) {
        quienesNoSonPrimos(nro);
    }
    else {
        console.log(`Opcion incorrecta`);
    }
}

menu();