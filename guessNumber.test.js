const guessNumber = require("./guessNumber")
const n = require('./random_numbers.json')

test("Recebendo o número, deve retornar um valor não nulo", () => {
  n.forEach(element => {
    expect(guessNumber(element)).not.toBeNull;
  });
})

test("Recebendo o número, deve retornar um valor entre -1 e 1", () => {
        n.forEach(element => {
            try {
                expect(guessNumber(element)).toBe(-1)
              }
              catch{
                try {
                  expect(guessNumber(element)).toBe(0)
                }
                catch{
                  expect(guessNumber(element)).toBe(1)
                }
              }
        });
})

test("Recebendo o número, deve retornar um valor não Undefined", () => {
      n.forEach(element => {
        expect(guessNumber(element)).not.toBeUndefined;
      });
})

test("Recebendo o número, deve retornar um valor maior ou igual que -1", () => {
  n.forEach(element => {
    expect(guessNumber(element)).toBeGreaterThanOrEqual(-1)
  });
})

test("Recebendo o número, deve retornar um valor menor ou igual que 1", () => {
  n.forEach(element => {
    expect(guessNumber(element)).toBeLessThanOrEqual(1)
  });
})
