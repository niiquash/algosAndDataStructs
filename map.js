const map = new Map([['a', 1], ['b', 2]]);

// adding values
map.set('c', 3);

// exists
console.log(map.has('c'))
console.log(map.size)

// delete
map.delete('c')

// delete all
map.clear();

for (const [key, value] of map) {
    console.log(`${key}: ${value}`)
}
