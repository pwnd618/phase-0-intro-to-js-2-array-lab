const cats = ["Milo", "Otis","Garfield"];

function destructivelyAppendCat(){
cats.push("Ralph");
}

function destructivelyPrependCat(){
cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
cats.pop();   
}

function destructivelyRemoveFirstCat(){
cats.shift();
}

function appendCat(Broom){
    const newArray = [...cats]
    newArray.push(Broom);
    return newArray;
}

function prependCat(Arnold){
    return [Arnold, ...cats];
}

function removeLastCat(){
    return cats.slice(0, cats.length-1)
}

function removeFirstCat(){
    return cats.slice(1, cats.length);
}