/*

Just got a good one from Square: You'll be receiving inputs of ordered events as data in the form (event1, event2), where event1 comes before event2. End goal: write a function `isBeforeEvent()` that accepts 2 event inputs and checks if the first event comes before the second event. In the process, you will also write a function `addEventPair()` that accepts the event inputs.

huh? did you finish this? do they have date stamps associated?

sorry should have clarified: by "events", they really means just like variables that come before each other in a list. so you could receive `(a,b)` and that would mean `a` comes before `b`. and then `(b,c)` means `b` comes before `c`. so the goal would be to have a function `isBeforeEvent()` that would accept like `isBeforeEvent(a,c)` and return either `true` or `false`. it seems easy at first but remember you're only getting the data as pairs so thinking about how to store it and then traverse it

also, he presented the problem just like i did initially and then i had to ask questions from there. i got a working solution but he definitely helped me. ill upload my code later