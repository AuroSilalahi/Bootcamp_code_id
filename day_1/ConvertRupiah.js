function convertToRupiah(money,type){
    switch(type){
        case "usd":
            return `USD ${money * 15000}`;
        case "yen":
            return('YEN ' + (money * 130));
        case "euro":
            return('EURO ' + (money * 1600));
        default:
            return "no match type currency";
    }
    
}
console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency