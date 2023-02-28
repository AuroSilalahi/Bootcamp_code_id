function calculateDistance(a, t){
    if (a <= 0 || t <= 0){
        return ('Accelaration or time must be >= 0');
    }
    else{
        const S = 0.5 * a * t * t;
        return S;
    }
    
}

console.log(calculateDistance("a", "t"));
console.log(calculateDistance(-1, 9));
console.log(calculateDistance(50, 60));