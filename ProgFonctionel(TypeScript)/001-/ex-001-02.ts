

const pi = 4.0 * Math.atan(1);

const cirlce_circumference = (r: number): number => 2 * pi * r;
const cirlce_area = (r: number): number => cirlce_circumference(r) / 2.0 * r;
const cirlce_volume = (r: number): number => cirlce_circumference(r) * 2 / 3 * r * r;


console.log(cirlce_circumference(5)); // 31.41592653589793
console.log(cirlce_area(5)); // 78.53981633974483
console.log(cirlce_volume(5)); // 523.6

console.log(pi); // 3.141592653589793