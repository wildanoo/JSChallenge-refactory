
let data = "ibu ratna antar ubi";

function reverse(n){
    let reversed = "";
    for (let index = n.length - 1; index > -1; index--) {
        reversed += n[index]
    }
    return reversed;
}

console.log(reverse(data));