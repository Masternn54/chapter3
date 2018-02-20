//en funktion der viser minimum af de tall der bliver tilføjet

function min(x, y){

    let value;
    if (x>y){value = y;}
    if (y>x){value = x}
    return value;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

