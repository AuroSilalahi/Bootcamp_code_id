let string = ""

for (let i = 0; i < 6; i ++){
    for(let j = 1; j < 6 - i + 1; j++){
        string += j;
    }
    string += "\n";
}

for (let i = 0; i < 6; i++) {
    for(let j = 1; j < 6 - i + 1; j++){
        string += 6 - j - i +1;
    }
    string += "\n";

} 
console.log(string);