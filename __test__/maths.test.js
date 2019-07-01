import { sumar, multiplicar, restar, dividir } from '../maths.js'

describe('Calculos matematicos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(3,3)).toBe(6);
    });
    test('Prueba de multiplicar', () => {
        expect(multiplicar(3,3)).toBe(9);
    });
    test('Prueba de restar', () => {
        expect(restar(3,3)).toBe(0);
    });
    test('Prueba de dividir', () => {
        expect(dividir(3,3)).toBe(1);
    });
});