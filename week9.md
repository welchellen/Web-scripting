phase 1: Form Foundation and Intercept
In this phase, I created an HTML form that allows a customer to enter their name, star rating, and comments. I also connected my JavaScript file and used an event listener to detect when the form is submitted. I used event.preventDefault() to stop the page from refreshing when the submit button is clicked.

Without event.preventDefault(), the browser would try to submit the form using its normal behavior, which could cause the page to refresh or navigate away. Since this project does not have a backend server, preventing the default action allows JavaScript to handle the information directly on the page.

phase 2:For this phase, I used an array called errors to collect any validation messages. I used if statements to check whether the name was blank, whether the rating was 5 stars, and whether the comments contained the word "wonderful."

I chose to display all errors at once instead of showing them individually. I think this is easier for the user because they can see everything they need to correct without having to submit the form multiple times. One disadvantage is that several error messages could be overwhelming, but I think displaying them together is more helpful for this assignment.

Phase 3:
In this phase, I added a success message that appears when the user enters valid information. I also made the form disappear after a successful submission. I used localStorage.setItem() to save the reviewer's name and localStorage.getItem() to retrieve it when the page loads again.

Local storage is simpler than cookies for this project because it allows JavaScript to save information directly in the browser without sending it to a server. Cookies are more useful when a website needs to send information to a server, such as certain login sessions. Since this project only needs to remember a name, local storage works well.

