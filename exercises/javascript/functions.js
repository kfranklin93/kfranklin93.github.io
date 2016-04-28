function average(a, b) {
    if (b) {
        return (a + b) / 2;
    } else {
        return a;
    }
}

var v1 = average(4, 5);
console.log('v1:', v1);

var v2 = average(7);
console.log('v2:', v2);

var v3 = Math.sqrt(12);
console.log('v3:', v3)
