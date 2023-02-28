function fareinheitToKelvin(farenheit){
    const Kevin = Math.round((farenheit + 459.67) / 1.8);

    return Kevin;
}


console.log(fareinheitToKelvin(45)); //Convert Fareinheit (45) to Kelvin = 280
console.log(fareinheitToKelvin("1")); //Convert Fareinheit (1) to Kelvin = 811
console.log(fareinheitToKelvin("F")); //Fareinheit must an number