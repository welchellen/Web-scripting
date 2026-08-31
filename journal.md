Phase 1: ## Phase 1

If I tried to change the character's name later in the program, JavaScript would give me an error because I created the character name using `const`. A constant cannot be reassigned after it has been created. I used `let` for health and experience points because those values need to be able to change during the game.

## Phase 2

The compound assignment operator made my code shorter and easier to read. Instead of writing `currentHealth = currentHealth + 20`, I could write `currentHealth += 20`. Both do the same thing, but `+=` makes it easier to update values that are already stored in variables.

## Phase 3

The loop allows the program to repeat the same action without me having to write the same code several times. In this case, the loop represents five days of training and adds experience points each day. If I needed to simulate 100 days instead, I could change the loop condition from 5 to 100 instead of writing the training code 100 separate times.

## Phase 4

I used a `while` loop for the boss battle. The loop continues running while both the hero and the boss still have health remaining. Unlike the `for` loop from Phase 3, I did not know exactly how many times the battle needed to repeat. The `while` loop keeps running until its condition becomes false, which happens when either the hero or the boss is defeated.




