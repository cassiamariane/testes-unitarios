let removeElement = require('./removeElement');
const arrays = require('./arrays')

const mock = jest.fn((nums) => {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == null){
            const fromIndex = i
            const toIndex = nums.length;
            const element = nums.splice(fromIndex, 1)[0];
            nums.splice(toIndex, 0, element);
            nums.pop()
        }
    }
    return nums
})

test("Recebendo o array e um valor, deve retornar o mesmo array com o valor indicado removido", () => {
    expect(removeElement([6, 1, 4, 5, 3, 9, 3], 3, mock)).toStrictEqual([6, 1, 4, 5, 9])
})

test("A fuunção mock deve ser chamada como callback da função original", () => {
    arrays.forEach(element => {
        removeElement(element, 5, mock)
        expect(mock).toHaveBeenCalled();
    });
})

test("Passando as arrays contidas na JSON file, os resultados retornados não devem conter o número 5", () => {
    arrays.forEach(element => {
        expect(removeElement(element, 5, mock)).not.toContain(5);
    });
})

test("Passando as arrays contidas na JSON file, os resultados retornados não devem ser nulos", () => {
    arrays.forEach(element => {
        expect(removeElement(element, 2, mock)).not.toBeNull();
    });
})

test("Passando as arrays contidas na JSON file, os resultados retornados não devem ser Undefined", () => {
    arrays.forEach(element => {
        expect(removeElement(element, 2, mock)).not.toBeUndefined;
    });
})
