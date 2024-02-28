/*
    The window object reprsents an open window in a 
    browser. It is browser object (not JavaScript's)
    and is automatically created by browser
    
    It is a global object
    has lot of properties and methods

*/
//Example:
window.alert("Hello");
window.console.log("window object");

/*
Abou Dom

*/

//Dom manuplation
/*accessing our elements 
    1- selecting with id
    2- selecting with class
    3- selecting with tag
*/
// Selecting with id
document.getElementById("myId");

//selecting with class
document.getElementsByClassName("myClass");

//selecting with tag
document.getElementsByTagName("div");

//Query Selector
document.querySelector("myId/myClass/tag");
//returns first element

document.querySelectorAll("myId/myClass/tag");
//returns a NodeList

//getting and updating properties
/*
    1-tagName -- returns tag for elements node
    2-innerText -- returns the text content of the element and all its children
    3-innerHTML -- returns the plain text or HTML contents in the element
    4-textContent -- returns textual content even for hidden elements
*/
