function getCordinat(x1,y1,x2,y2) {
    const x = x1 - x2;
    const y = y1 - y2;
    const xs = Math.pow(x,2);
    const ys = Math.pow(y,2);
    const ds = xs + ys;
    const d = Math.sqrt(ds);

    return d;
   
}

console.log(getCordinat(3,4,-4,-5)); //9
console.log(getCordinat("1","2","-1","-2")); //1
console.log(getCordinat("x","2","-y","-2")); //input kordinat dalam angka
console.log(getCordinat(3.2,4.5,-4.4,-5)); //13.695801445917125