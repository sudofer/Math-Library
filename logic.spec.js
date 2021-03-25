const Logic = require("./logic");

const factorial = {
    "-1": NaN,
    0: 1,
    2.5: NaN,
    5: 120,
    10: 3628800
}

describe("Verify factorial is working :)", () => {
    Object.keys(factorial).forEach(
        x => {
            it(`factorial(${x}) = ${factorial[x]}`,
                () => {
                    expect(Logic.factorial(x)).toEqual(factorial[x]);
                }
            )
        }
    )

    Object.keys(factorial).forEach(
        x => {
            it(`loopFactorial(${x}) = ${factorial[x]}`,
                () => {
                    expect(Logic.loopFactorial(x)).toEqual(factorial[x]);
                }
            )
        }
    )
})

const power = [
    [0, 0, 1],
    [2, 2, 4],
    [2, -2, 1 / 4],
    [5, 10, 9765625],
    [-2, 2, 4],
    [-2, 3, -8],
    [-1, 1, -1],
    [-1, 2, 1],
    [2.5, 2, 6.25],
    // [4, 1 / 2, 2]
]

describe("Verify power is working :)", () => {
    power.forEach(
        resultSet => {
            it(`${resultSet[0]}^(${resultSet[1]}) = ${resultSet[2]}`,
                () => {
                    expect(Logic.power(resultSet[0], resultSet[1])).toEqual(resultSet[2]);
                }
            );
        }
    )
})

const fibonacci = {
    // "-1": NaN,
    0: 0,
    // 2.5: NaN,
    1: 1,
    2: 1,
    3: 2,
    4: 3,
    5: 5,
    6: 8,
    7: 13,
    8: 21,
    9: 34,
    10: 55
}

describe("Verify fibonacci is working :)", () => {
    Object.keys(fibonacci).forEach(
        key => {
            it(`fibonacci(${key}) = ${fibonacci[key]} `,
                () => {
                    expect(Logic.goodFibonacci(key)).toEqual(fibonacci[key]);
                }
            );
        }
    )
})

