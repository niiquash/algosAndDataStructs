const obj = {
    name: 'Bruce',
    age: 27,
    "key-three": true,
    sayMyName: function () {
        console.log(this.name)
    }
}
obj.hobby = 'football'

obj.sayMyName();
console.log(Object.keys(obj)) // [ 'name', 'age', 'key-three', 'sayMyName', 'hobby' ]
console.log(Object.values(obj)[0]) // Bruce
console.log(Object.entries(obj)) // [['name', 'Bruce'],['age', 27],['key-three', true],['sayMyName', [Function: sayMyName]],['hobby', 'football']]