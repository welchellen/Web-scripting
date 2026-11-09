Phase 1:
What did you accomplish in this phase? What is the practical difference between a regular expression with start/end anchors (^...$) and one without them when checking the length of a username?

In this phase I created two validation functions using regular expressions to check names and usernames. The difference between using the start (^)and the end($) and not using them is that the anchors make sure that the entire username follows the rules. Not just part of it passes but it makes sure the whole thing does. 

Phase 2: 
What did you accomplish in this phase? Why is the case-insensitive flag i cleaner than converting strings with .toLowerCase() or writing alternate variations in an if statement?

In this phase I added two more validation function using regular expressions to check promo codes and phone numbers. The case-insenstivive flag i is cleaner because it eliminates alot of coding and work.

Phase 3:
What did you accomplish in this phase? What is the conceptual difference between testing a string with .test() and extracting/reformatting data using capturing groups and backreferences?

In this phase, I created a function that formats valid phone numbers into a standard format using regular expressions, capturing groups, and the .replace() method. I also tested it with different phone numbers to make sure it worked correctly. The difference is that .test()only checks if a string matches a pattern and returns true or false, while capturing groups and backreferences allow you to take parts of a string and rearrange them into a new format.