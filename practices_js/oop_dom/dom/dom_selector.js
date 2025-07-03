// DOM Selector:: Defintions and Methods:: example for DOM Selector methods 
// DOM Selector is a part of the Document Object Model (DOM) that allows you to select and manipulate HTML elements in a web page.
// The DOM Selector is a part of the Document Object Model (DOM) that allows you to select and manipulate HTML elements in a web page.  
// It provides methods to select elements based on various criteria such as tag name, class name, ID, and more.
// The DOM Selector methods are used to traverse and manipulate the DOM tree, allowing developers to create dynamic and interactive web applications.   
// The DOM Selector methods include:
// 1. `getElementById(id)`: Selects an element by its ID.
// 2. `getElementsByClassName(className)`: Selects all elements with a specific class name.
// 3. `getElementsByTagName(tagName)`: Selects all elements with a specific tag name.
// 4. `querySelector(selector)`: Selects the first element that matches a CSS selector.
// 5. `querySelectorAll(selector)`: Selects all elements that match a CSS selector.
// 6. `closest(selector)`: Selects the closest ancestor element that matches a CSS selector.
// 7. `matches(selector)`: Checks if an element matches a CSS selector.
// 8. `children`: Returns a live HTMLCollection of an element's children.
// 9. `parentElement`: Returns the parent element of an element.
// 10. `nextElementSibling`: Returns the next sibling element of an element.
// 11. `previousElementSibling`: Returns the previous sibling element of an element.    
// 12. `firstElementChild`: Returns the first child element of an element.
// 13. `lastElementChild`: Returns the last child element of an element.    
// 14. `querySelectorAll(selector)`: Returns a static NodeList of all elements that match a CSS selector.
// 15. `getRootNode()`: Returns the root node of the document or shadow tree.
// 16. `getElementsByName(name)`: Selects all elements with a specific name attribute.
// 17. `getElementsByTagNameNS(namespace, localName)`: Selects elements by tag name in a specific namespace.
// 18. `getElementsByClassNameNS(namespace, className)`: Selects elements by class name in a specific namespace.
// 19. `getElementsByAttribute(attribute)`: Selects elements by a specific attribute.
// 20. `getElementsByAttributeNS(namespace, attribute)`: Selects elements by a specific attribute in a namespace.
// 21. `getElementsByAttributeValue(attribute, value)
// Selects elements by a specific attribute and value.
// 22. `getElementsByAttributeValueNS(namespace, attribute, value)`: Selects elements by a specific attribute and value in a namespace.
// 23. `getElementsByAttribute

// Example of using DOM Selector methods to select and manipulate elements
// Selecting an element by its ID
const elementById = document.getElementById('myElement');
console.log(elementById); // Output: <div id="myElement"></div>

// Selecting all elements with a specific class name
const elementsByClassName = document.getElementsByClassName('myClass');
console.log(elementsByClassName); // Output: HTMLCollection of elements with class "myClass"
// Selecting all elements with a specific tag name
const elementsByTagName = document.getElementsByTagName('div');
console.log(elementsByTagName); // Output: HTMLCollection of <div> elements in the document
// Selecting the first element that matches a CSS selector
const firstElement = document.querySelector('.myClass');
console.log(firstElement); // Output: <div class="myClass"></div>
// Selecting all elements that match a CSS selector
const allElements = document.querySelectorAll('.myClass');
console.log(allElements); // Output: NodeList of all elements with class "myClass"
// Selecting the closest ancestor element that matches a CSS selector
const closestElement = elementById.closest('.myClass');
console.log(closestElement); // Output: <div class="myClass"></div> 
// (if it exists in the DOM)    
// Checking if an element matches a CSS selector
const isMatch = elementById.matches('.myClass');
console.log(isMatch); // Output: true or false depending on the match
// Getting the children of an element
const children = elementById.children;
console.log(children); // Output: HTMLCollection of child elements of elementById
// Getting the parent element of an element
const parentElement = elementById.parentElement;
console.log(parentElement); // Output: <div> (parent element of elementById)
// Getting the next sibling element of an element
const nextSibling = elementById.nextElementSibling;
console.log(nextSibling); // Output: <div> (next sibling element of elementById

// Getting the previous sibling element of an element
const previousSibling = elementById.previousElementSibling;
console.log(previousSibling); // Output: <div> (previous sibling element of elementById
// Getting the first child element of an element
const firstChild = elementById.firstElementChild;
console.log(firstChild); // Output: <div> (first child element of elementById
// Getting the last child element of an element
const lastChild = elementById.lastElementChild;
console.log(lastChild); // Output: <div> (last child element of elementById
// Getting all elements that match a CSS selector
const allMatchingElements = document.querySelectorAll('.myClass');
console.log(allMatchingElements); // Output: NodeList of all elements with class "myClass
// Getting the root node of the document or shadow tree
const rootNode = document.getRootNode();        
console.log(rootNode); // Output: Root node of the document or shadow tree
// Getting elements by name attribute    
const elementsByName = document.getElementsByName('myName');    
console.log(elementsByName); // Output: HTMLCollection of elements with name attribute "myName" 
// Getting elements by tag name in a specific namespace 
const elementsByTagNameNS = document.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'div');    
console.log(elementsByTagNameNS); // Output: HTMLCollection of <div> elements in the document
// Getting elements by class name in a specific namespace
const elementsByClassNameNS = document.getElementsByClassNameNS('http://www.w3.org/1999/xhtml', 'myClass');
console.log(elementsByClassNameNS); //
// Output: HTMLCollection of elements with class "myClass" in the specified namespace
// Getting elements by a specific attribute
const elementsByAttribute = document.querySelectorAll('[data-attribute="value"]');
console.log(elementsByAttribute); // Output: NodeList of elements with the specified attribute
// Getting elements by a specific attribute in a namespace
const elementsByAttributeNS = document.querySelectorAll('[xmlns="http://www.w3.org/1999/xhtml"][data-attribute="value"]');
console.log(elementsByAttributeNS); //
// Output: NodeList of elements with the specified attribute in the specified namespace
// Getting elements by a specific attribute and value
const elementsByAttributeValue = document.querySelectorAll('[data-attribute="value"]');
console.log(elementsByAttributeValue); // Output: NodeList of elements with the specified attribute and value
// Getting elements by a specific attribute and value in a namespace
const elementsByAttributeValueNS = document.querySelectorAll('[xmlns="http://www.w3.org/1999/xhtml"][data-attribute="value"]');
console.log(elementsByAttributeValueNS); // Output: NodeList of elements with the specified attribute and value in the specified namespace
// Getting elements by a specific attribute and value (alternative example)
const elementsByAttributeValueAlt = document.querySelectorAll('[data-attribute="value"]');
console.log(elementsByAttributeValueAlt); // Output: NodeList of elements with the specified attribute and value
// Getting elements by a specific attribute and value in a 