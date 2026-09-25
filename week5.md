Phase 1: I used the label element to label the poems and the input element to get input from the user. It is important to give each item a unique ID because html will confuse them and you will have multiple errors.

Phase 2: What was the difference between what getElementById returned and what your group selection method returned? 
The difference between what getElementById returned and the group selection is that the getElementById returned a htlm element, while the group selection returned a list of nodes. 

Phase 3: When you moved the item, did you have to manually “delete” it from the first wall? Explain what happened to the node in the DOM tree when you called the movement method. 

When I moved the item I didn't have to delete it I just used the ammendchild method and it moved it for me. I had to create variable for the child and parent function in order to define them. When I called the movement method it moved the poem to the east wall in the DOM tree.