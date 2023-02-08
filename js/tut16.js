// console.log("16")


// let element = document.createElement('li');
// element.className = "childul"
// element.id = "creadtedLi";
// element.setAttribute("title", "mytitle")
// element.innerText = "Hello is created by Nish"
// element.innerHTML = "<b> this is bold</b>";

// let ul = document.querySelector('ul.this');
// ul.appendChild(element);

// // console.log(ul);


// let elem2 = document.createElement('h3');

// elem2.id = "elem2";
// elem2.className = "elem2";
// let tnode = document.createTextNode("this is created for elem 2");

// elem2.appendChild(tnode);
// element.replaceWith(elem2)


// let myul = document.getElementById('myul');
// myul.replaceChild(element, document.getElementById('fui'))
// myul.removeChild(document.getElementById('lui'))


let elementh = document.createElement('h1')
elementh.innerText = "COde with harry"

elementh.id = "heading"

let a = document.getElementById('heading')

// a.replaceChild(elementh, a)

a.replaceWith(elementh)

console.log(elementh)
console.log(a);
