const { sumArray, countWords, findMax, isDivisible } = require('../functions');

// ==============================
//    1.- Pruebas para sumArray
// ==============================

describe('sumArray', () => {

  //  Arreglo de números positivos
  it('suma correctamente un arreglo de números positivos', () => {
        expect(sumArray([1, 2, 3, 4])).toBe(10);
  });


  // Arreglo de números negativos
  it('suma correctamente un arreglo de números negativos', () => {
        expect(sumArray([-1, -2, -3, -4])).toBe(-10);
  });


  // Arreglo vacío (debe retornar 0)
  it('retorna 0 cuando el arreglo está vacío', () => {
        expect(sumArray([])).toBe(0);
  });


  //  Arreglo que incluya 0
  it('suma correctamente un arreglo que incluye 0', () => {
        expect(sumArray([0, 5, 10, 0])).toBe(15);
  });
});


// ==============================
//   2.- Pruebas para countWords
// ==============================

describe('countWords', () => {

  // Cadena de texto normal
  it('cuenta las palabras de una cadena normal', () => {
        expect(countWords('Hola mundo esto es una prueba')).toBe(6);
  });


  // Cadena con espacios al inicio y al final
  it('ignora espacios al inicio y al final', () => {
        expect(countWords('   Hola mundo   ')).toBe(2);
  });


  // Cadena vacía (debe retornar 0)
  it('retorna 0 cuando la cadena está vacía', () => {
        expect(countWords('')).toBe(0);
  });


  // Cadena con espacios consecutivos entre palabras
  it('ignora espacios consecutivos entre palabras', () => {
        expect(countWords('Hola    mundo')).toBe(2);
  });
});


// ==============================
// 3.- Pruebas para findMax
// ==============================

describe('findMax', () => {

  // Arreglo de números positivos
  it('encuentra el mayor en un arreglo de positivos', () => {
        expect(findMax([5, 2, 9, 3])).toBe(9);
  });


  // Arreglo de números negativos
  it('encuentra el mayor en un arreglo de negativos', () => {
        expect(findMax([-5, -2, -9, -3])).toBe(-2);
  });


  // Arreglo vacío (debe retornar null)
  it('retorna null cuando el arreglo está vacío', () => {
        expect(findMax([])).toBeNull();
  });


  // Arreglo donde todos los números son iguales
  it('retorna el mismo número cuando todos son iguales', () => {
        expect(findMax([7, 7, 7, 7])).toBe(7);
  });
});


// ==============================
// 4.- Pruebas para isDivisible
// ==============================

describe('isDivisible', () => {

    // Números divisibles
  it('retorna true cuando el número es divisible', () => {
        expect(isDivisible(10, 2)).toBe(true);
  });


  // Números no divisibles
  it('retorna false cuando el número no es divisible', () => {
        expect(isDivisible(10, 3)).toBe(false);
  });


  // Divisor igual a 0 (mensaje de error)
  it('retorna mensaje de error cuando el divisor es 0', () => {
        expect(isDivisible(10, 0)).toBe('No se puede dividir entre cero');
  });


  // Números negativos como entrada
  it('funciona correctamente con números negativos', () => {
        expect(isDivisible(-10, 2)).toBe(true);
        expect(isDivisible(-10, 3)).toBe(false);
  });
});