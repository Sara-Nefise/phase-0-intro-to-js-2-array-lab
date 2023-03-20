let cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
let newcats=[...cats, name]
return newcats
}
function prependCat(name){
    const newCats = [name, ...cats];
return newCats;
    }
    function removeLastCat(){
        const newCats = cats.slice(0,cats.length-1);
    return newCats;
        }
        function removeFirstCat(){
            const newCats = cats.slice(1);
        return newCats;
            }