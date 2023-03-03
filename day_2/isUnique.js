function isCharsUnique(string){
    return new Set(string).size == string.length;

}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false