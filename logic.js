const Logic =   {
    factorial(n){
        if (n < 0){
            return NaN
        } 
        if (n == 0) {
            return 1
        }
        return n * Logic.factorial(n-1)
    },
    power(n, e){
        if (e < 0 ){
           return Logic.power (1 / n, - e)
        }
        if (e == 0){
            return 1
        }
        return n * Logic.power(n, e - 1);
    },
    badFibonacci(n){
        if (n == 0){
            return 0
        }
        if (n == 1){
            return 1
        }
        return Logic.badFibonacci(n-1) + Logic.badFibonacci(n-2)
    },
    goodFibonacci(n){
        const fibs = [0,1]
        while (fibs[n]==undefined){
            const len = fibs.length
            fibs[len] = fibs[len-1] + fibs[len-2]
        }
        return fibs[n]
    }
   
}

module.exports = Logic
