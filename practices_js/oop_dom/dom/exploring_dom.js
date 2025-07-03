 //dom manipulation full process
// 1. Create a new element
// 2. Set attributes and properties
// 3. Append the element to the DOM
// 4. Modify the element's content
// 5. Remove the element from the DOM   
// 6. Add event listeners to the element
// 7. Modify styles of the element
// 8. Clone the element
// 9. Replace the element with another element
// 10. Traverse the DOM to find the element 
// 11. Use query selectors to find the element
// 12. Use the element in a function
// 13. Use the element in a loop
// 14. Use the element in a conditional statement
// 15. Use the element in a class method
// 16. Use the element in a static method
// 17. Use the element in a getter method
// 18. Use the element in a setter method
// 19. Use the element in a prototype method
// 20. Use the element in a constructor method
// 21. Use the element in a factory method
// 22. Use the element in a module method
// 23. Use the element in a namespace method
// 24. Use the element in a closure
// 25. Use the element in an IIFE (Immediately Invoked Function Expression)
// 26. Use the element in a promise
// 27. Use the element in an async function
// 28. Use the element in a generator function
// 29. Use the element in a callback function
// 30. Use the element in a timeout function    
// 31. Use the element in an interval function
// 32. Use the element in an event handler function
// 33. Use the element in a form submission handler function
// 34. Use the element in a drag and drop handler function
// 35. Use the element in a mouse event handler function
// 36. Use the element in a keyboard event handler function
// 37. Use the element in a touch event handler function
// 38. Use the element in a scroll event handler function
// 39. Use the element in a resize event handler function
// 40. Use the element in a focus event handler function
// 41. Use the element in a blur event handler function
// 42. Use the element in a change event handler function
// 43. Use the element in a submit event handler function
// 44. Use the element in a reset event handler function
// 45. Use the element in a click event handler function
// 46. Use the element in a dblclick event handler function
// 47. Use the element in a contextmenu event handler function
// 48. Use the element in a mouseover event handler function
// 49. Use the element in a mouseout event handler function
// 50. Use the element in a mousemove event handler function
// 51. Use the element in a mouseenter event handler function
// 52. Use the element in a mouseleave event handler function
// 53. Use the element in a keydown event handler function
// 54. Use the element in a keyup event handler function
// 55. Use the element in a keypress event handler function
// 56. Use the element in a touchstart event handler function
// 57. Use the element in a touchend event handler function
// 58. Use the element in a touchmove event handler function    



//example of DOM manipulation bassed on the above steps:
// 1. Create a new element
const newElement = document.createElement('div');
// 2. Set attributes and properties
newElement.setAttribute('id', 'myElement');
newElement.className = 'my-class';
// 3. Append the element to the DOM
document.body.appendChild(newElement);
// 4. Modify the element's content  
newElement.textContent = 'Hello, World!';   
// 5. Remove the element from the DOM
// document.body.removeChild(newElement); // Uncomment to remove the element
// 6. Add event listeners to the element
newElement.addEventListener('click', () => {
    console.log('Element clicked!');
});
// 7. Modify styles of the element
newElement.style.backgroundColor = 'lightblue';
newElement.style.padding = '10px';
// 8. Clone the element
const clonedElement = newElement.cloneNode(true);
// 9. Replace the element with another element
const anotherElement = document.createElement('span');
anotherElement.textContent = 'This is another element.';    
document.body.replaceChild(anotherElement, newElement);     
// 10. Traverse the DOM to find the element     
const elements = document.querySelectorAll('.my-class');
elements.forEach(element => {
    console.log(element); // Output: <div class="my-class"></div>
}); 
// 11. Use the element in a function
function logElement(element) {
    console.log(element); // Output: <div class="my-class"></div>
}
logElement(newElement); 
// 12. Use the element in a loop
for (let i = 0; i < elements.length; i++) {
    logElement(elements[i]);
}
// 13. Use the element in a conditional statement
if (newElement) {
    console.log('Element exists!'); // Output: Element exists!
}
// 14. Use the element in a class method
class ElementLogger {
    log(element) {
        console.log(element);
    }
}
const logger = new ElementLogger();
logger.log(newElement); 
// 15. Use the element in a static method
class ElementLogger {
    static log(element) {
        console.log(element);
    }
}
ElementLogger.log(newElement);
// 16. Use the element in a getter method
class ElementWrapper {
    constructor(element) {
        this._element = element;
    }
    
    get element() {
        return this._element;
    }
}
const wrapper = new ElementWrapper(newElement);
console.log(wrapper.element); // Output: <div class="my-class"></div>
// 17. Use the element in a setter method
class ElementWrapper {
    constructor(element) {
        this._element = element;
    }

    get element() {
        return this._element;
    }

    set element(newElement) {
        this._element = newElement;
    }
}
const wrapper = new ElementWrapper(newElement); 
wrapper.element = anotherElement;
console.log(wrapper.element); // Output: <div class="another-class"></div>
// 18. Use the element in a prototype method    
Element.prototype.log = function() {
    
}    
newElement.log();    
// 19. Use the element in a constructor method
class ElementWrapper {
    constructor(element) {
        this._element = element;
    }
    
    log() {
        console.log(this._element);
    }
}
const wrapper = new ElementWrapper(newElement);
wrapper.log(); // Output: <div class="my-class"></div>    
// 20. Use the element in a factory method
function createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
}   
const newDiv = createElement('div', 'factory-class');
console.log(newDiv); // Output: <div class="factory-class"></div>
// 21. Use the element in a module method
const ElementModule = (() => {
    function createElement(tagName, className) {
        const element = document.createElement(tagName);
        element.className = className;
        return element;
    }
    
    return {
        createElement
    };
})();
const moduleDiv = ElementModule.createElement('div', 'module-class');
console.log(moduleDiv); // Output: <div class="module-class"></div>
// 22. Use the element in a namespace method
const ElementNamespace = {
    createElement(tagName, className) {
        const element = document.createElement(tagName);
        element.className = className;
        return element;
    }
};
// 23. Use the element in a namespace method
const namespaceDiv = ElementNamespace.createElement('div', 'namespace-class');
console.log(namespaceDiv); // Output: <div class="namespace-class"></div>
// 24. Use the element in a closure
function createElementWithClosure(tagName, className) {
    return function() {
        const element = document.createElement(tagName);
        element.className = className;
        return element;
    };
}
const createDiv = createElementWithClosure('div', 'closure-class');
const closureDiv = createDiv();
console.log(closureDiv); // Output: <div class="closure-class"></div>
// 25. Use the element in an IIFE (Immediately Invoked Function Expression)
(function() {
    const element = document.createElement('div');
    element.className = 'iife-class';
    console.log(element); // Output: <div class="iife-class"></div>
})();
// 26. Use the element in a promise
function createElementAsync(tagName, className) {   
    return new Promise((resolve) => {
        const element = document.createElement(tagName);
        element.className = className;
        resolve(element);
    });
}
createElementAsync('div', 'promise-class')
    .then(element => {
        console.log(element); // Output: <div class="promise-class"></div>
    });
// 27. Use the element in an async function
async function createElementAsync(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
}
createElementAsync('div', 'async-class')    
    .then(element => {
        console.log(element); // Output: <div class="async-class"></div>
    });
// 28. Use the element in a generator function
function* createElementGenerator(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    yield element;
}
const generator = createElementGenerator('div', 'generator-class');
const generatorDiv = generator.next().value;
console.log(generatorDiv); // Output: <div class="generator-class"></div>
// 29. Use the element in a callback function
function createElementWithCallback(tagName, className, callback) {
    const element = document.createElement(tagName);
    element.className = className;
    callback(element);
}
createElementWithCallback('div', 'callback-class', (element) => {
    console.log(element); // Output: <div class="callback-class"></div>
}); 
// 30. Use the element in a timeout function
setTimeout(() => {
    const element = document.createElement('div');
    element.className = 'timeout-class';
    console.log(element); // Output: <div class="timeout-class"></div>
}, 1000);
// 31. Use the element in an interval function
setInterval(() => {
    const element = document.createElement('div');
    element.className = 'interval-class';
    console.log(element); // Output: <div class="interval-class"></div>
}, 1000);
// 32. Use the element in an event handler function
document.addEventListener('click', (event) => {
    const element = document.createElement('div');
    element.className = 'event-handler-class';
    console.log(element); // Output: <div class="event-handler-class"></div>
});
// 33. Use the element in a form submission handler function
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const element = document.createElement('div');
    element.className = 'form-submit-class';
    console.log(element); // Output: <div class="form-submit-class"></div>
}       
);
// 34. Use the element in a drag and drop handler function
document.addEventListener('dragover', (event) => {
    event.preventDefault();
    const element = document.createElement('div');
    element.className = 'drag-over-class';
    console.log(element); // Output: <div class="drag-over-class"></div>
}
);
// 35. Use the element in a mouse event handler function
document.addEventListener('mousemove', (event) => {
    const element = document.createElement('div');
    element.className = 'mouse-move-class';
    console.log(element); // Output: <div class="mouse-move-class"></div>
}
);
// 36. Use the element in a keyboard event handler function
document.addEventListener('keydown', (event) => {
    const element = document.createElement('div');
    element.className = 'key-down-class';
    console.log(element); // Output: <div class="key-down-class"></div>
}
);
// 37. Use the element in a touch event handler function
document.addEventListener('touchstart', (event) => {
    const element = document.createElement('div');
    element.className = 'touch-start-class';
    console.log(element); // Output: <div class="touch-start-class"></div>
}
);
// 38. Use the element in a scroll event handler function
document.addEventListener('scroll', () => {
    const element = document.createElement('div');
    element.className = 'scroll-class';
    console.log(element); // Output: <div class="scroll-class"></div>
}
);  
// 39. Use the element in a resize event handler function
window.addEventListener('resize', () => {   
    const element = document.createElement('div');
    element.className = 'resize-class';
    console.log(element); // Output: <div class="resize-class"></div>
}
);
// 40. Use the element in a focus event handler function
document.querySelector('input').addEventListener('focus', () => {
    const element = document.createElement('div');
    element.className = 'focus-class';
    console.log(element); // Output: <div class="focus-class"></div>
}
);  
// 41. Use the element in a blur event handler function
document.querySelector('input').addEventListener('blur', () => {
    const element = document.createElement('div');
    element.className = 'blur-class';
    console.log(element); // Output: <div class="blur-class"></div>
}   
);
// 42. Use the element in a change event handler function
document.querySelector('input').addEventListener('change', () => {
    const element = document.createElement('div');
    element.className = 'change-class';
    console.log(element); // Output: <div class="change-class"></div>
}
);  
// 43. Use the element in a submit event handler function
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const element = document.createElement('div');
    element.className = 'submit-class';
    console.log(element); // Output: <div class="submit-class"></div>
}
);
// 44. Use the element in a reset event handler function
document.querySelector('form').addEventListener('reset', () => {
    const element = document.createElement('div');
    element.className = 'reset-class';
    console.log(element); // Output: <div class="reset-class"></div>
}
);
// 45. Use the element in a click event handler function
document.addEventListener('click', () => {   
    const element = document.createElement('div');  
    element.className = 'click-class';
    console.log(element); // Output: <div class="click-class"></div>
}
);  
// 46. Use the element in a dblclick event handler function
document.addEventListener('dblclick', () => {
    const element = document.createElement('div');
    element.className = 'dblclick-class';
    console.log(element); // Output: <div class="dblclick-class"></div>
}
);
// 47. Use the element in a contextmenu event handler function
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const element = document.createElement('div');
    element.className = 'contextmenu-class';
    console.log(element); // Output: <div class="contextmenu-class"></div>
}
);
// 48. Use the element in a mouseover event handler function    
document.addEventListener('mouseover', () => {
    const element = document.createElement('div');
    element.className = 'mouseover-class';
    console.log(element); // Output: <div class="mouseover-class"></div>
}
);  
// 49. Use the element in a mouseout event handler function
document.addEventListener('mouseout', () => {
    const element = document.createElement('div');
    element.className = 'mouseout-class';
    console.log(element); // Output: <div class="mouseout-class"></div>
}
);  
// 50. Use the element in a mousemove event handler function
document.addEventListener('mousemove', () => {
    const element = document.createElement('div');
    element.className = 'mousemove-class';
    console.log(element); // Output: <div class="mousemove-class"></div>
}
);
// 51. Use the element in a mouseenter event handler function
document.addEventListener('mouseenter', () => {
    const element = document.createElement('div');
    element.className = 'mouseenter-class';
    console.log(element); // Output: <div class="mouseenter-class"></div>
}
);
// 52. Use the element in a mouseleave event handler function
document.addEventListener('mouseleave', () => {
    const element = document.createElement('div');
    element.className = 'mouseleave-class';
    console.log(element); // Output: <div class="mouseleave-class"></div>
}
);  


// 53. Use the element in a keydown event handler function
document.addEventListener('keydown', () => {
    const element = document.createElement('div');
    element.className = 'keydown-class';
    console.log(element); // Output: <div class="keydown-class"></div>
}
);
// 54. Use the element in a keyup event handler function
document.addEventListener('keyup', () => {
    const element = document.createElement('div');
    element.className = 'keyup-class';
    console.log(element); // Output: <div class="keyup-class"></div>
}
);
// 55. Use the element in a keypress event handler function
document.addEventListener('keypress', () => {   
    const element = document.createElement('div');
    element.className = 'keypress-class';
    console.log(element); // Output: <div class="keypress-class"></div>
}   
);
// 56. Use the element in a touchstart event handler function
document.addEventListener('touchstart', () => { 
    const element = document.createElement('div');
    element.className = 'touchstart-class';
    console.log(element); // Output: <div class="touchstart-class"></div>
}
);
// 57. Use the element in a touchend event handler function
document.addEventListener('touchend', () => {
    const element = document.createElement('div');
    element.className = 'touchend-class';
    console.log(element); // Output: <div class="touchend-class"></div>
}
);
// 58. Use the element in a touchmove event handler function
document.addEventListener('touchmove', () => {
    const element = document.createElement('div');
    element.className = 'touchmove-class';
    console.log(element); // Output: <div class="touchmove-class"></div>
}
);

