const plusOne = require('./plusOne');
const arrays = require('./arrays')

test("Recebendo o array, deve retornar o mesmo array + 1", () => {
    expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toStrictEqual([6n,1n,4n,5n,3n,9n,0n,1n,9n,5n,1n,8n,6n,7n,0n,5n,5n,4n,4n])
})

test("Para cada array recebido, deve retornar um valor não nulo", () => {
    arrays.forEach(element => {
        expect(plusOne(element)).not.toBeNull();
    });
})

test("Para cada array recebido, deve retornar um valor não Undefined", () => {
    arrays.forEach(element => {
        expect(plusOne(element)).not.toBeUndefined;
    });
})

test("Para cada array recebido, deve retornar um valor positivo", () => {
    arrays.forEach(element => {
        expect(plusOne(element)).toBeTruthy()
    });
})
