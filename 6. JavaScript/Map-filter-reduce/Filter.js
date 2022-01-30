function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 4, 67, 87, 9, 12];

console.log(filtraPares(meuArray));