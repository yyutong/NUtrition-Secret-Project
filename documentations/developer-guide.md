# NUtrition Secret Developer Guide
NUtrition Secret App is to help students find food on campus and track energy intaking.

Website address: https://nutrition-secret.herokuapp.com/

If you want to run it locally
- fork and download this repo
- run `npm install` in repo root folder
- then run `npm start`
- run `cd frontend` 
- run `npm install` & `npm start`

then you can see the frontend displays on localhost:3000, the server runs at localhost:5000.

## All Tests Have Done
 
- [Self-testing](https://docs.google.com/document/d/1f_qqU7R4AuXIkVB0wqkFXDY9WGJKCatvGndzxuR0WO4/edit)

- [User-testing](https://docs.google.com/spreadsheets/d/1azXy1g_Q0kTlz8d052Vl5jX42UzANbgucwUf0P3yMKE/edit#gid=1258926797)


## Software Engineering Principles Application

### Single-responsibility principle

Definition: A class should have one and only one reason to change, meaning that a class should have only one job.

>Separation of concerns is a recognition of the need for human beings to work within a limited context. As descibed by G. A. Miller [Miller56], the human mind is limited to dealing with approximately seven units of data at a time. A unit is something that a person has learned to deal with as a whole - a single abstraction or concept. Although human capacity for forming abstractions appears to be unlimited, it takes time and repetitive use for an abstraction to become a useful tool; that is, to serve as a unit.

  We separate frontend and backend development. We first decided what tech stacks for frontend and backend separately. Then we made a decision to use ReactJS for frontend and MongoDB for backend. Frontend and backend are not disturbed each other which is easy for us to debug them.

  For features, we also obey this rule. At one time we only developed one feature. For example, in the first few weeks, we focused on sign up and log in. In the next several weeks, we focused on frontend design. After our frontend had a basic frame, we turned to the backend.


### Open-closed principle

Definition: software entities (classes, modules, functions, etc.) should be open for extensions, but closed for modification.

For every js file, we use class xx extends component such as class menu extends component and class userscreen extends component. In this way, we can make sure that our code is compliant with the open/closed principle by utilizing inheritance and/or implementing interfaces that enable classes to polymorphically substitute for each other. 

### KISS (Keep It Simple, Stupid!)
> KISS might just be the engineer's motto. We've acknowledged our tendencies to build overly complex systems at times (there are anonymous meetings for this kind of thing) and it's forced us to admit that simplicity makes your solution so much better.

  We want to achieve two main goals in our website.
 1. food calorie documentation
 2. food search

  To make things easier, we chose a simple design. A user can figure out how to use it immediately. For every food item, calorie information is on the same bar. Search box is also at a obvious position.

### DRY (Don't Repeat Yourself)
> one of the best things about code is how reusable it is. If you write a cool bit of code that solves a useful problem in one place, refer back to it when the problem comes up in other places as well. From your perspective, any time you find yourself manually typing something in multiple times, there's a way to combine it all into a single task that gets run multiple times.

  We keep the same design for the same level. The code is reusable for the same levels which saves much time. For example, all restaurants and their menus are in the same format.





