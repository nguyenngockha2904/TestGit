let x = 1;

let y = 0;

let z = 0;

let h = 0;



x += 2;

y++;

y += x++;

x += y++;

z = y - 4;

y = z - 1;

h = ++z;

console.log(`x=${x}, y=${y} z=${z} h=${h}`);