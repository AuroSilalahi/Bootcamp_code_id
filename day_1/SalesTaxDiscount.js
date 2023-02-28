function getSalesDiscount(price, tax, discount){
    if (isNaN(price)){
        return ('Must be numeric')
    }
    if(isNaN(tax)){
        return ('Must be numeric');
    }
    if(isNaN(discount)){
        return ('Must be numeric');
    }
    else{
        const disc = price * (discount / 100);        
        const priceAfterDisc = price - disc;
        const taxes = priceAfterDisc * (tax / 100);
        const TotalPayment = priceAfterDisc + taxes;
        return TotalPayment;
    }
    
}
console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));