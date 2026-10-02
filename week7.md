Phase 1: 
Describe how you implemented the timer and how you generated random colors. Why is it important to use a consistent interval for the lighting?
I implemented the setInterval function and put the colors as the argument and then used the style.backgroundcolor css element to change the colors every 2 seconds. It is important to use a consistent interval for this because you want to be able to control it.

Phase 2:
Explain the concept of “event bubbling.” How did stopPropagation() allow you to separate the Dancer’s interaction from the Floor’s interaction?
The concept of event bubbling is when events in js are called when one element is nested in another element. While they all have seperate listeners. stopPropagation() seperated the call from the dance floor and the call from the dancer. This allowed me to be able to click them seperatly. 

Phase 3:
Why is it more effective to use a global window listener for keyboard shortcuts rather than attaching the listener to a specific HTML element? What are some challenges when handling “held down” keys?

It is more effective because you can use a global window listener anywhere which is expecially important for the keyboard shortcuts because it captures the key presses anywhere on the page. Which can prevent missed inputs.