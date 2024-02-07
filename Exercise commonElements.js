function commonElements (array1, array2){
for (const string of array1) {
    if (array2.includes(string)){
    console.log(string);
}
}
    console.log();
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);
//commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
//['s', 'o', 'c', 'i', 'a', 'l']);