import input from "./input.js"
//0
let txt = "Ez egy példa szöveg, amit használunk.";
//1
console.log(txt.slice(0, 5));
//2
console.log(txt.slice(2, 8));
//3
console.log(txt.slice(4));
//4
console.log(txt.slice(4, 10));
//5
console.log(txt.toUpperCase());
//6
let nagybetu = '';

for (let i = 0; i < txt.length; i++) {
    if (i % 2 === 0) {
        nagybetu += txt[i].toUpperCase();
    } else {
        nagybetu += txt[i].toLowerCase();
    }
}
console.log(nagybetu);
//7
console.log(txt.replace(/e/g, 'E'));
//8
let spliteld = txt.split('e');
console.log(spliteld);
