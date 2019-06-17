console.log("External JS running");

window.myNewKey = "hello world"

console.log(window); // JS global object in broswer


// let numArr = [1,2,3,4,5];
// for (let num in numArr){
    // console.log('for in way: ', numArr[num]);
// }

function elementChecker(arr) {
    for (let num in arr){
        console.log('for in process: ', arr[num]);
    }
}

let title = document.getElementById("title");

console.log(title);
console.dir(title); // .dir allows you to see properties of tag/element (which are objects)

let nameBox = document.getElementById("nameBox");
console.dir(nameBox);

// classList:
// An HTML DOM property that returns the class name(s) of an element, as a DOMTokenList object
// (read only) lets you toggle CSS classes on and off if you add a modify() or remove() or replace(oldClass,newClass)

let liTags = document.getElementsByTagName("li");
console.log(liTags);

for (let i = 0; i < liTags.length; i++) {
    console.log(liTags[i])
    if (i % 2 === 0) {
        liTags[i].classList.add("new-class");
    }
}