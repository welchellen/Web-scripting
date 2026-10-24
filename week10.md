Phase 1:
What did you accomplish in this phase? In your own words, what is the difference between the Pet class itself and an “instance” of that class? 
The Pet class itself is kind of like the big picture while an instant of that class is kind of like a piece of that picture. Every piece of that picture has the same shape but you can see it differently. For example using the key word "new" creates an object that we can use to create characters. Those objects are instances.

Phase 2:
What was the process of connecting your JavaScript class method to an HTML button? What part of the DOM manipulation felt most intuitive, and what part was confusing? 

I used document.getelementbyId to connect my javascript class method to the HTML button. 

Phase 3:
How did your mental model change when moving from a single static pet to a dynamic list of pet objects? How does the Pet class make it easier to handle multiple pets compared to creating individual objects manually?
The model changed when moving from a single static pet to a dynamic list of pet objects because you can now use the same class for different pets. The Pet class made it much easier to handle multiple pets because its like one class controls it all and there is no need for multiple objects. 

Phase 4:
One bug I noticed was that the pet's hunger level could go below zero if I kept clicking the Feed button. I fixed this by using `Math.max()` to make sure the hunger level stopped at zero. I also had some issues with my curly brackets and capitalization, which caused errors in my code. The most helpful suggestion from the AI tutor was using `Math.max()` because it was a simple way to fix the hunger issue without adding a lot of extra code. The AI also suggested using template literals and event delegation, but I decided to keep my code the way I originally wrote it since it was easier for me to understand and still met the assignment requirements.





