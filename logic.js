const Logic = {
    factorial(n) {
        if (n < 0) {
            return NaN
        }
        if (n == 0) {
            return 1
        }
        return n * Logic.factorial(n - 1)
    },
    power(n, e) {
        if (e < 0) {
            return Logic.power(1 / n, - e)
        }
        if (e == 0) {
            return 1
        }
        return n * Logic.power(n, e - 1);
    },
    badFibonacci(n) {
        if (n == 0) {
            return 0
        }
        if (n == 1) {
            return 1
        }
        return Logic.badFibonacci(n - 1) + Logic.badFibonacci(n - 2)
    },
    goodFibonacci(n) {
        const fibs = [0, 1]
        while (fibs[n] == undefined) {
            const len = fibs.length
            fibs[len] = fibs[len - 1] + fibs[len - 2]
        }
        return fibs[n]
    },
    loopFactorial(n) {
        let counter = 1
        if (n < 0 || !Logic.isInt(n)) {
            return NaN
        }
        for (; n > 1; n--) {
            counter *= n;
        }
        return counter
    },
    isInt(n) {
        return n % 1 === 0
    },
    loopPower(n, e) {
        let counter = n
        for (; e > 1; e--) {
            n *= counter
        }
        return n
    }
}

module.exports = Logic
