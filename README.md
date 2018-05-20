# Assignment 2 - ReactJS app.

Name: Phil Healy
Student number: 20079557
Assignment 2 

## Overview.

+ My own app concept
+ mongo db connection
+ 3 entities in the database
+ Header and footer Nav
+ Coded API tests 
+ Routing - 4 routes
+ Full manipulation of resources (Read/Write/Update/Delete)
+ User authentication 

Main concepts of the app is to add new recipes and view exisiting recipes.The app includes a list of the existing recipes with the ingredients and method attached. 

Across the navigation bar you will see differnt tabs including:

+login/sign up - To sign in or register as a user  -Persistance to DB

+Shopping List - Based on the recipe the user chooses they can then navigate to the Shopping list tab on the app. From there the user can insert the items in which they need to purchase for the chosen recipe. The user can also remove the items inserted one by one from the list.

+Reviews - any user can insert a comment/review based on any of the recipes. Each of the reviews can also be deleted. This component is not persisted to the DB. To do so I would follow the same process of the previous mongo integrations. 

Building on assignment one the main recipe index now has Mongo integration allowing full manipulation of resources (Create/read/update/delete). Each recipe contains an edit and delete option. Users can alter any recipe they wish and it will therefore be updated in the database. Deleting a recipe is also an option, and it will therefore be removed from the database.

As previously mentioned the app also contains an option to add a new recipe. The user simply, inputs the name, ingredients, and method. Following the submission of the new entry, 
an alert will pop up thanking you for entering the recipe with the name outlined also. Through the mongo integration every new entry will be insert into the recipies database

The same mongo integration applies for the shopping list - once item added, shoplist data base is updated with new entry. Same applies for delete. Database will be updated and item removed. 


 ## User Features

+ Insert input form -add new recipe
+ Footer navigation - to the top of the page
+ Edit feature - Edit and update aspects of the recipe 
+ Delete - Remove a recipe from the list
+ Shopping list - create a shopping list of items required for the users choice
+ Remove - Independently remove each of the items from the shopping list 
+ Review section - add a review/comment in regards to any of the recipes 
+ Remove - Independently remove each of the reviews
+ Mongo Integration with full manipulation resources 
+ Implemented a server side version using Mongo db and primed the recipe Entity with test data
+ Implemented components using express, babel, mongoose, elint, router etc. 


## Installation requirements.
. . . .  List of software used to develop the app . . . . . . .
+ ReactJS v15.3.0
+ Bootstrap 3
+ Create-react-app my-app
+ Npm install - node modules
+ Run build 
+ npm install  bootstrap@3.3.6  --save
+ npm install -g httpserver
+ npm install  lodash@2.4.2 --save
+ npm install react-router-dom@4.2.2 --save
+ npm install  superagent@1.6.1 --save
+ git & configuration 
+ npm install --save-dev babel-cli
+ npm install --save-dev babel-preset-env
+ npm install --save express
+ npm install --save-dev eslint babel-eslint
+ npm install dotenv --save
+ npm install -save mongoose
+ npm install --save-dev nodemon
+ npm install -save express-async-handler
+ npm install cors
+ npm install 
+ npm install --save axios
+ npm install --save react-signup-login-component
+ npm install --save body-parser
+ npm install --save lodash
+ npm install --save-dev mocha
+ npm install --save-dev should
+ npm install --save-dev supertest
+ npm install --save-dev babel-core
+ npm install --save-dev babel-polyfill
+ npm install save-dev cross-env
+ npm install --save-dev mochawesome

When cloning the app from my repository, you simply just need to run npm start on the client
To initialise the server - in the server folder run npm start
To intialise the data base - locate the mongoDB file > /server/3.6/bin and run mongod



## Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![image1](model.PNG)



## App Component Design.

A diagram showing the app's hierarchical component design is below and also details the various HTTP commands executed on each entity component.

![image1](Networkdiagram2.jpg)

## UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (user regeneration and login views, if implemented, can be omitted) . . . . . . .

![image2](screen1.png)
![image3](screen2.png)
![image4](screen3.png)
![image5](screen4.png)
![image6](screen5.png)

## Routing.
. . . . List each route supported and state the associated view . . . . .

  +   <Route path="/login" component={LoginView} /> - Displays login view
  +   <Route path='/recipe' component={RecipeApp}/> - Displays main recipe view
  +   <Route path='/shoplist' component={Shopping}/> - Displays shopping list view
  +   <Route path='/comment' component={Comment}/> - Displays comment view

# Web API Endpoint Reference
As seen in the component diagram above we had 3 main entities that the app integrated with. For each entity we used 3 different api components for adding, retrieving and updating the data for recipe, user and shopping list. For both the shoplist and recipe we used the react fetch method. For the user we used the axios functionality to show 2 different ways of integrating with the server side. 

## Web API Install and Operation

The server code root is contained in \project\src\server

+ npm start will start the server on localhost 8080
+ npm test will run the mocha test suites 


    "start": "cross-env NODE_ENV=development nodemon  --exec babel-node index.js",
    "test": "cross-env NODE_ENV=test mocha --require babel-core/register --require babel-polyfill --reporter mochawesome --exit",
    "pretest": "eslint *.js ./api/*.js ./test/*.js"


## API Design

Recipe
| HTTP Verb & Path |  Description |
| -- | -- |
| GET: /api/recipies |return a list of recipies |
| POST: /api/recipies |add a new recipie |
| PUT: /posts/api/recipies/:id | update a recipie |
| DELETE: /posts/api/recipies/:id | delete a recipies |

Shopping List
| HTTP Verb & Path |  Description |
| -- | -- |
| GET: /api/shoplist |return a list of shoplist |
| POST: /api/shoplist |add a new shoplist |
| PUT: /posts/api/shoplist/:id | update a shoplist |
| DELETE: /posts/api/shoplist/:id | delete a shoplist |

User
| HTTP Verb & Path |  Description |
| -- | -- |
| GET: /api/users |return a list of shoplist |
| POST: /api/users |add a new shoplist |

## API Configuration
Describe the configuration approach for your endpoint. For example, contents of config file and where it should be located:
~~~bash
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb://localhost:27017/entries_db
seedDb=true
secret=ilikecake
~~~

## Security and Authentication
In the app I used JSON Web Tokens for security and authentication. I created a user table and code to implement the api for username and encrypted passwords. I used the 3rd party component install:

npm install --save react-signup-login-component

I integrated the generated view into the app. I tested and confirmed the login and registering functionality worked. I ran into trouble trying to prevent the app showing the other views if the user had not registered and logged in. Given more time I would have fully implemented this.

## Testing
I used mocha test suite to implement two test classes for user and recipe (/src/server/test). I ran into difficulty getting the recipe test fully functionable. Test results were generated to:

/src/server/mochawesome-report

![][image4](testing.png)

## Extra features

+ User registration/login
+ Comments page
+ React/Axios implementation
+ API Testing

## Independent learning.

As part of this project I had again a steep learning curve in the various aspects of react, expres, node and JSON. I ran into alot of difficulty around CORS while testing my api. I did alot of reading of this issue and ultimately figured out I needed to install a NPM package to resolve. There were various other issues that seem trivial looking back but consumed alot of time to resolve. I have learned a great deal in the process of developing this application and take great pride in the end result.



[image1]: ./model.png
[image2]: ./design.jpg
[image3]: ./screen.png
[image4]: ./testing.png
