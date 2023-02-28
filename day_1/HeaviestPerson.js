function getHeavier(w1, w2, w3){
    if(w1 >= w2 && w1 >= w3){
        return w1;
    }
    if(w2 >= w1 && w2 >= w3){
        return w2;
    }
    else{
        return w3
    }
}
console.log(getHeavier(12,45,70));//70