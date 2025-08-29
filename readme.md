1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
**getElementById** : It finds one element by its id attribute. IDs are unique, so it always gives one element. If no element is found, it returns null.
**getElementsByClassName**: It selets all elements that prosses a specific classname and return HTML collection. If none are found, it returns an empty list.
**querySelector**:Selects the first element that matches a CSS selector.
Works with id, class, tag, or complex selectors and return  a single Element object. If none is found, it returns null.
**querySelectorAll**:Selects all elements that match a CSS selector and return a NodeList. If none are found, it returns an empty list.


2. How do you **create and insert a new element into the DOM**?
Create element:const newDiv = document.createElement('div'); 
Add attributes:const textNode = document.createTextNode('This is a new div!'); newDiv.appendChild(textNode);
Insert the new element: const parentElement = document.getElementById('container');
parentElement.appendChild(newDiv);

3. What is **Event Bubbling** and how does it work?
  Event Bubbling is the order in which events "bubble up" through the DOM tree . When an event (like a click) happens on an element, the event first runs on that element, then it goes up (bubbles) to its parent, then parent's parent, and so on until document.
 
   
4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is basically a pattern to handle events efficiently.

Useful beceause Performance Optimization,Handling Dynamic Content,Code Simplicity and Maintainability,Reduced Memory Footprint.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
 **preventDefault()**:stops the default browser behavior
 
**stopPropagation()**:stops the event from reaching parent elements.

