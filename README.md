# NUtrition Secret
A website help students find food on campus and track energy intaking.

Website address: https://nutrition-secret.herokuapp.com/

If you want to run it locally
- fork and download this repo
- run `npm install` in repo folder
- then run `npm start`
- run `cd frontend` 
- run `npm install` & `npm start`

then you can see it on localhost:3000

## Tech Stack
ReactJS, Express, Node and MongoDB Atlas.


## Proposed Level of Achievement
Artemis.

## Motivation
Nowadays, the notion of keeping fit is prevailing among citizens, especially young adults, in our society. However, we notice that most students choose to dine in school canteens and there is no enough information on the nutrition information of meals offered.
In addition, we often encounter situations when we want to eat a certain food but don’t know where to buy it.
Therefore, we are inspired to design a platform for NUS students, providing menus offered by each canteen, together with the specific nutrition information and calories of various meals.


## Aim
- Make it convenient for students who usually dine in NUS canteens to record and track calorie intake.
- Make it convenient for students to search for menus offered by each canteen.
- Make it convenient for students to check comments for each stall/meal.

## User Stories
We mainly want to serve NUS students and staff, but can also provide service for NUS visitors.
Since it has been observed that people are gradually getting tired of having loads of apps on their phone, our project will be created in the form of a web app.
Being a web app, our project will help potential users get rid of the procedure of downloading the app, helping users significantly save time and avoid troublesome.
Users will have the choice of make their own decision of whether to register for the website or not.
However, without registration and logging in, the function would be limited.(e.g. unable to check their history of calories intake)

## Scope of Project
We focus on a **website** and its **mobile adjusting**.

- Provide online menu for various stalls that can be found on NUS campus
- Provide information of various food for each stall(e.g. price, calories, ingredients, etc)
- Enable the search function with multiple criteria(e.g. by descending price, by descending calories, by location, by special needs)
- Track daily food and calories intake


## Features
- Provide nutrition information on on-campus food
- Provide online menus for every canteen
- Record and track everyday food intake
- Enable the search function with multiple criteria
(e.g. by descending price, by descending calories, by location, by special needs)
- Open a public comment area for users to leave their comments about the food
- Automatically calculate total calories intake
- Trial mode available for visitors as well(no need to log in, but functionalities would be limited)

## How are we different with similar platforms?
- [react-recipe-app](https://github.com/hamza-mirza/react-recipe-app)

  This app can only use api to show as a search outcome. we plan to add nutrition api and food information collected in NUS canteens.
- [food-help](https://github.com/brtsai/food-help)

  This app can search restaurants but can't search for concrete food. We plan to add detailed food information.

## Program Flow

![](https://i.imgur.com/AA7Bj6z.jpg)




## Feature Plan
- [x] Sign up, log in, edit personal profile, forget password functions
- [x] Add food calorie information
- [x] Energy intake documentation and calculation
- [x] Food information search
- [x] Make trial mode available for users who don't log in
- [x] Deploy on Heroku
- [ ] [by 03/7] Add food nutrition information
- [ ] [by 10/7] Open a public comment area for users to leave their comments about the food
- [ ] [by 17/7] Mobile adjusting
- [ ] [by 27/7] Final testing




## How users would use and benifit from these features
- Sign up, log in, edit personal profile, forget password

  After signing up, users get an account, which allows them to document the calories they intake.
  They can editing personal profile to change their email address and password.
  If they forget password, they can click forget password to get their password after verifying by the email.
 
- Add food calorie information
  
  It's one of our core features. Users can know how many calories they intake when choosing to eat some food.

- Energy intake documentation and calculation
  
  Users can add food to the cart and click document them. Then the website can give a total calorie calculation result.
  Users can click history button on the right above to see all documentations.

- Food information search

  It can help users locate the food they want to eat.
  
- Make trial mode available for users who don't log in
  
  For users who don't login, they can also search food and look through restaurants and food.
  
- Deploy on Heroku

  Users can take advantage of this website online. It is stable.
  
## Feature test

All the following tests are carried out on https://nutrition-secret.herokuapp.com/
| Test Case                      | Steps Taken                                                                                      | Expected Result                                                                         | Actual Result                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Sign up using an email address | Click  sign up button, then type in personal information                                         | The website jumps to login page                                                         | The website jumps to login page                                                         |
| Login                          | Click login button then type in correct email and password                                       | The website jumps to main page and user can see the hitory button                       | The website jumps to main page and user can see the bistory button                      |
| Forgot password                | In login screen, click forgot password                                                           | The website asks user to enter associated email, then send the password to the email    | The website asks user to enter associated email, but the email doesn't receive the password    |
| Look through food              | Click restaurants button and then choose a restaurant                                            | Food provided by this restaurant appears including its calories                         | Food provided by this restaurant appears as well as its calories                        |
| Search for food                | Search for food in the search box                                                                | The food's information is returned including its calories and restaurants it belongs to | The food's information is returned including its calories and restaurants it belongs to |
|Check all history documentations                                |Click history button                                                                                                  |All food intaken history is loaded after around three seconds including food calories, time and ideal calorie intaking                                                                                         |All food intaken history is loaded after around three seconds including food calories, time and ideal calorie intaking                                                                                         |
| Document food                  | Click "+" button on the right of the food, then click the cart picture, then click document all. | The user can see this documentation in his/her history                                | The user can see this documentation in his/her history                                |








