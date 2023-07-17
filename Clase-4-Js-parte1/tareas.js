// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let array2=[];

  for (i=0; i < array.length ; i++ ) {
    array2[i]=array[i]+1;
  }
return array2;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  cadena=palabras[0] ;
  for (i=1; i < palabras.length ; i++ ) {
    cadena=cadena +' '+palabras[i] ;
  }
return cadena;

}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 esta= false;
  for (i=1; i < array.length ; i++ ) {
    if( array[i] === elemento) {
      esta= true;
    };
  }
return esta;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  suma=numeros[0] ;
  for (i=1; i < numeros.length ; i++ ) {
    suma=suma + numeros[i] ;
  }
return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma=resultadosTest[0] ;
  for (i=1; i < resultadosTest.length ; i++ ) {
    suma=suma +resultadosTest[i] ;
  }
return suma / resultadosTest.length ;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  masgrande=numeros[0] ;
  for (i=1; i < numeros.length ; i++ ) {
    if ( numeros[i]  >masgrande ) 
    {
      masgrande=numeros[i] ;
    }
   
  }
return masgrande  ;


}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:

  cantidad =0;
  for (i=0; i < arreglo.length ; i++ ) {
    if ( arreglo[i]  > 19 ) 
    {
      cantidad=cantidad + 1 ;
    }
   
  }
return cantidad  ;


}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
  let diaDeLaSemana=[];
  let quees=[];

  diaDeLaSemana[1]='Domingo';
  quees[1]='Es fin de semana';

  diaDeLaSemana[2]='Lunes';
  quees[2]='Es dia Laboral';
  
  diaDeLaSemana[3]='Martes';
  quees[3]='Es dia Laboral';
  
  diaDeLaSemana[4]='Miercoles';
  quees[4]='Es dia Laboral';
  
  diaDeLaSemana[5]='Jueves';
  quees[5]='Es dia Laboral';
  
  diaDeLaSemana[6]='Viernes';
  quees[6]='Es dia Laboral';
  
  diaDeLaSemana[7]='Sabado';
  quees[7]='Es fin de semana';
  
return  quees[numeroDeDia];

} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numeroatring= [];
 numeroatring=n.toString();

  if(numeroatring[0] === '9')
  {
    return true;
  } else
  {
    return false;
  }

}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:

  soniguales=true ;
  for (i=1; i < arreglo.length ; i++ ) {
    if ( arreglo[i]  !=arreglo[0] ) 
    {
      soniguales=false ; 
    }
   
  }
return soniguales  ;



} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevoarrar= new Array();
  estaEnero= false;
  estaMarzo= false;
  estaNoviembre= false;

  for (i=0; i < array.length ; i++ ) {
    if ( array[i] ==='Enero'  ) 
    {
      estaEnero= true;
      nuevoarrar.push(array[i]);
    }
    if (  array[i] ==='Marzo'  ) 
    {
      estaMarzo= true;
      nuevoarrar.push(array[i]);
    }
    if ( array[i] ==='Noviembre' ) 
    {
      estaNoviembre= true;
      nuevoarrar.push(array[i]);
    }
   
  }
 if (estaEnero ===false || estaMarzo ===false ||estaNoviembre ===false )
 {
   return "No se encontraron los meses pedidos";
 } else{
  return nuevoarrar;
 }
 


}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let arraymayor100= new Array();

  for (i=0; i < array.length ; i++ ) {
    if ( array[i] > 100 ) 
    {
      arraymayor100.push(array[i]);
    }
   
  }
return arraymayor100  ;

}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
