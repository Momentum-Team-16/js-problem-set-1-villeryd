let names = ["Capel", "Daniel", "Jerome", "John"];
for (let name of names) {
    console.log("hello", name);
}

let capNames = [];

for (let name of names) {
    capNames.push(name);
}
console.log("caps" , capNames);