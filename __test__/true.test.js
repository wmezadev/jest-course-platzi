import { isNull, isTrue, isFalse, isUndefined } from '../true'

describe('Probar resultados nulos', () => {
    test ('Es nulo', () => {
        expect (isNull()).toBeNull()
    })
})

describe('Probar resultados verdaderos', () => {
    test ('Es verdadero', () => {
        expect (isTrue()).toBeTruthy()
    })
})

describe('Probar resultados falsos', () => {
    test ('Es falso', () => {
        expect (isFalse()).toBeFalsy()
    })
})

describe('Probar resultados indefinidos', () => {
    test ('Es indefinido', () => {
        expect (isUndefined()).toBeUndefined()
    })
})

describe('Probar resultados que no sean verdaderos', () => {
    test ('No es verdadero', () => {
        expect (isUndefined()).not.toBeTruthy()
    })
})