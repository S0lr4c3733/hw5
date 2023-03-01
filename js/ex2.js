const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ood = arr.filter((nbr) => nbr % 2 !== 0);
const div = arr.filter((nbr) => nbr % 2 === 0 || nbr % 5 === 0);
const div3 = arr.filter((nbr) => nbr % 3 === 0).map((nbr) => Math.pow(nbr, 2));
const sum = arr.filter((nbr) => nbr % 5 === 0).reduce((a, b) => a + Math.pow(b, 2), 0);
console.log(ood);
console.log(div);
console.log(div3);
console.log(sum);
