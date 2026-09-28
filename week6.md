Phase 1:
How are you passing data from one then() call to another?

You are using the then() call as a promise and using the parameters to call other things. 

Phase 2:
Explain what a “Promise” actually represents in this code. What happens if the API is down or the URL is wrong? How does .catch() help us handle that?
In this code a promise represents getting something from json. If the api is down it will send an error code. .catch() helps us keep this from breaking our code by catching it and sending an error code while trying to fix it. 

Phase 3:
Using the Fetch API improves the user experience because the page does not have to completely reload every time the user searches for a word. Instead, only the part of the page displaying the results is updated. This makes the website feel faster and smoother because the user can stay on the same page and quickly search for another word.

Phase 4:

