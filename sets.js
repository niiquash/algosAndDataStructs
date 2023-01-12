const set = new Set([1, 2, 3]);
set.add(4);
set.add(4);

// check if value exists in set
console.log(set.has(4));

// delete
set.delete(3);

// size
console.log(set.size);

// delete all values
set.clear();

for (const item of set) {
    console.log(item);
}