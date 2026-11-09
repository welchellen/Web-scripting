Phase 1:
What did you accomplish in this phase? What is the practical difference between a regular expression with start/end anchors (^...$) and one without them when checking the length of a username?

In this phase I created two validation functions using regular expressions to check names and usernames. The difference between using the start (^)and the end($) and not using them is that the anchors make sure that the entire username follows the rules. Not just part of it passes but it makes sure the whole thing does. 

Phase 2: 
What did you accomplish in this phase? Why is the case-insensitive flag i cleaner than converting strings with .toLowerCase() or writing alternate variations in an if statement?

In this phase I added two more validation function using regular expressions to check promo codes and phone numbers. The case-insenstivive flag i is cleaner because it eliminates alot of coding and work.

Phase 3:
What did you accomplish in this phase? What is the conceptual difference between testing a string with .test() and extracting/reformatting data using capturing groups and backreferences?

In this phase, I created a function that formats valid phone numbers into a standard format using regular expressions, capturing groups, and the .replace() method. I also tested it with different phone numbers to make sure it worked correctly. The difference is that .test()only checks if a string matches a pattern and returns true or false, while capturing groups and backreferences allow you to take parts of a string and rearrange them into a new format.

Phase 4:
I designed my processRegistration() function by combining all the validation functions from the previous phases. I used an array to collect errors and return a failure message if any required information was invalid. If everything was valid, the function returned the formatted phone number and whether the discount was applied. Building and testing each regular expression separately made the final phase easier because I already knew the functions worked. It also made the code easier to organize and helped me avoid errors when putting everything together.


Phase 5:
What bugs or unexpected results did you identify while running the full test suite? If you consulted an AI tutor for review, what advice did it provide, and what did you learn about regular expressions from this exercise?

In this phase, I tested my registration program using the sample dataset and added extra edge cases to check for invalid characters and incorrect lengths. I learned that usernames with special characters and phone numbers with spaces should fail validation. I also checked that usernames with 3 and 12 characters were accepted, while 13 characters were rejected. The AI review suggested improving the name validation to prevent names containing only spaces. This exercise helped me better understand how regular expressions work and why testing different inputs is important for catching errors.

