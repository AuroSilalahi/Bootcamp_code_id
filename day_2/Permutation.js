const checkPermute = function (strA, strB){
	var isValid = true;
	
	if (!strA || !strB || strA.length !== strB.length){
		return !isValid;
	}
	
	var sortedA = sort(strA), sortedB = sort(strB);
	
	return sortedA === sortedB;
}

function sort(str){
	return str.split("").sort().toString();;
}
console.log(checkPermute('aba', 'aab'))//true;
console.log(checkPermute('aba', 'aaba'))//false;
console.log(checkPermute('aba', 'aa'))//false;