const first = ['Behind', 'every', 'great', 'man'];
const second = ['is', 'a', 'woman'];
const third = ['rolling', 'her', 'eyes'];


function combineArray(p1, p2, p3){
    let combined = [];
    combined = p1.concat(p2,p3);
    return combined.join(" ");
    
}
document.getElementById("result").innerHTML = combineArray(first, second, third);

console.log(combineArray(first, second, third));