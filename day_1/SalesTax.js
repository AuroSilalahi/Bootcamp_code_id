function getSalesTax(price, tax){
    if(isNaN(price)){
        return ('Must be numeric');
    }
    if (isNaN(tax)){
        return ('Must be numeric');
    }
    else{
        const total = price + tax;

        return total;
    }
        
}

console.log(getSalesTax("a", 1));//Price harus dalam angka
console.log(getSalesTax(500, "pajak"));//Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak"));//Pajak harus dalam angka
console.log(getSalesTax(4500, 5));