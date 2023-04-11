// SMIT ASSIGNMENT 2
// DAY-TUESDAY  11/04/2023



// Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it ?

// Answer

// function createAdder(numToAdd) {
//     return function (num) {
//         return num + numToAdd;
//     }
// }

// const addFive = createAdder(5);
// console.log(addFive(10));
// console.log(addFive(7));

//   Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. Youcan assume that the array is not nested?

// ANSWER


// function recursiveSearch(array, value) {
//     if (array.length === 0) {
//         return false;
//     }

//     if (array[0] === value) {
//         return true;
//     }

//     return recursiveSearch(array.slice(1), value);
// }

// const array = [2, 4, 6, 8, 10];
// console.log(recursiveSearch(array, 8));
// console.log(recursiveSearch(array, 3)); 


// Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element?

// ANSWER

// function addParagraph(text) {
//     const newParagraph = document.createElement('p');
//     const textNode = document.createTextNode(text);
//     newParagraph.appendChild(textNode);
//     document.body.appendChild(newParagraph);
//   }
//   addParagraph('This is a new paragraph!');


// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color?


// ANSWER


// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
//   const myElement = document.getElementById('myElement');
//   changeBackgroundColor(myElement, 'blue');

// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item?

// ANSWER

//  function addListItem(text) {
//      const list = document.querySelector("ul"); 
//      const newItem = document.createElement("li"); 
//     newItem.textContent = text; 
//     list.appendChild(newItem); 
//   }
//    addListItem("New list item");
//    const list = document.querySelector("#my-list"); t
//  addListItem("New list item", list); 


//   Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store ?


// ANSWER

//  function saveObjectToLocalStorage(key, obj) {
//      localStorage.setItem(key, JSON.stringify(obj));   }
  
//    const myObj = { name: 'Sarah', age: 30 };
//   saveObjectToLocalStorage('myKey', myObj);


//   Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used tostore the object. The function should return the object ?

// ANSWER

//  function getObjectFromLocalStorage(key) {
//      const storedValue = localStorage.getItem(key);
//     return JSON.parse(storedValue);
//    }
//   const myObj = getObjectFromLocalStorage('myKey');



//   Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object ?
 
// ANSWER

function saveAndRetrieveObject(obj) {
   
    for (let prop in obj) {
      localStorage.setItem(prop, JSON.stringify(obj[prop]));
    }
    

    let newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }
    return newObj;
  }