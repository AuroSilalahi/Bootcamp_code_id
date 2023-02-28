function sumDigit(n){
    sum = 0;
    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"))