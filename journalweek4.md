Week 4 Interactive receipt and Bill calculator:
Phase 1:
Instead of putting all the store details into a single storeInfo object, you could have saved each detail in its own standalone global variable. What are the advantages of grouping related data into an object versus managing separate variables?

The advantages of grouping related data into an object versus managing separate variables include it helping to keep things organized and a lot less code. If I had saved each detail in it's own standalone global variable it would have created confusion in the longevity of my code. 
Phase 2:
What happens if you set a value to a property of an object that didn’t exist before? How does that effect the ways that you can create and set object properties? 
I tried this and It said it couldn't find the variable. It effects the ways because you have to define the variable outside of the loop before it can recognize it. This hinders being able to define a variable in a loop. 


Phase 3:
Reflect on using the for...of loop to move through your list. How did you target and pull out just the price property from each item object inside the loop?
Using the for..of loop to move through the list was very helpful but also very tedious. I had my console.log in the wrong place and it was printing to the console before it had any answers. But using the loop I used subtotal= subtotal+ item price to pull out the item price property with each user imput.


Phase 4:
Reflect on how using .pop() affected your data. How did removing an item from the array automatically change your final calculations when you ran the total logic?

Using .pop() removed the item and removing the item automatically changed the final calculations to $0 if i only bought one item. It changed the total logic but kept the tax and table rate the same. 

