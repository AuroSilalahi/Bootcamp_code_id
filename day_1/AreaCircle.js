function getAreaCircle(r){
    if (r <= 0){
        return ('try higher');
    }
    else{
        const pi = 3.14159;
        radius = pi * r * r;
        return radius
    }
    
}

console.log(getAreaCircle('-1'));
console.log(getAreaCircle('a'));
console.log(getAreaCircle(5));
