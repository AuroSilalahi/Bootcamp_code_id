function getProsentase(start, end){
    if (isNaN(start)){
        return ('Harus angka')
    }
    if (isNaN(end)){
        return('Harus angka')
    }
    else{
    const selisih = end - start;
    const hasilBagi = (selisih / start) * 100;

    return (Math.round(hasilBagi) + '%');
    }
}
console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%