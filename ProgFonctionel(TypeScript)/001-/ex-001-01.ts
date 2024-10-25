
const square = (x: number) => x * x;
console.log(square(5)); // 25


const fibonatchi = (n: number): number => {
    if (n <= 1) {
        return n;
    }
    return fibonatchi(n - 1) + fibonatchi(n - 2);
}
console.log(fibonatchi(10)); // 55


const factorial = (n: number): number => {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120


const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const sort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const left = arr.slice(1).filter(x => x <= pivot);
    const right = arr.slice(1).filter(x => x > pivot);
    return [...sort(left), pivot, ...sort(right)];
}
console.log(sort(arr)); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]


const sort_dicotomy = (arr: number[]): number[] => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x <= pivot);
    const right = arr.filter(x => x > pivot);
    return [...sort_dicotomy(left), pivot, ...sort_dicotomy(right)];
}

