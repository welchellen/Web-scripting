
## Phase 1: The Vault Foundation

In this phase, I created a function called accessVault that checks if the user entered the correct key. I used an if/else statement to return either "Access Granted" or "Access Denied." I also used console.log to test the function with different keys.

Using "use strict" is considered a safety net because it helps developers catch mistakes in their code. It makes JavaScript follow stricter rules and prevents certain errors that might otherwise go unnoticed.

## Phase 2: The Security Layer

The difference between returning a value and throwing an error is that returning a value gives a result back to the function, while throwing an error stops the normal execution of the code until the error is handled. A developer might prefer using custom error classes because they make it easier to understand what went wrong instead of just getting a general error message. In this phase, I created two custom error classes to identify whether a key was missing or incorrect.

## Phase 3: The Safety Protocol

The finally block is different from the catch block because catch only runs when an error occurs, while finally runs whether there is an error or not. This is helpful when something needs to happen every time the program runs. For example, if a program opens a file, the finally block could be used to make sure the file gets closed even if an error happens. In this phase, I used try, catch, and finally to handle errors without stopping the entire program.

## Phase 4: The Audit Suite

Automated testing is more reliable than manual testing because it checks the same conditions every time without having to manually enter each value. It also makes it easier to find