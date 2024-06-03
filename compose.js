import { compose } from "redux";

function removeSpaces(str){
    return str.split(" ").join("");
}

function repeatString(str){
    return str.repeat(2);
}

function makeUpperCase(str){
    return str.toUpperCase();
}

function makeItalics(str){
    return str.italics();
}

let str = "hello how are u ??";


let composeResult = compose(makeUpperCase,repeatString,removeSpaces);

console.log(composeResult(str));


