describe('Comparadores comunes', () => {
    const user = {
        name: "William",
        lastname: "Meza"
    }
    const user2 = {
        name: "William",
        lastname: "Meza"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2)
    })

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2+2)
    })
})