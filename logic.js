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
    }
}

module.exports = Logic
//console.log(Logic.power(5,3))