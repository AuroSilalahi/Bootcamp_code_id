function howManyKabisat(year1,year2){
    var year_range = [];
    for(var i = year1; i <= year2; i++){
        year_range.push(i);

    }
    var new_array = [];

    year_range.forEach(
        function(year){
            if(isKabisat(year))
            new_array.push(year);
        }
    );
    
    return new_array;

}

function isKabisat(year){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
} else {
        return false;
}

}

console.log(howManyKabisat(1997,2021));
