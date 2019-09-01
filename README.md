#  Hipter Burger's MVC

Inspired by my hometown of Portland, Oregon, this hipster themed CRUD application allows the user to chose from the available burgers to "eat." After the burger the button to be eaten is clicked, the burger moves to the "Loser Burgers" column.

## Custom ORM

A custom ORM is used in order to interact with the database. Functions are created for all CRUD interactions with the database. It is through the `burgerControllers.js` file that these functions are used to add burgers to the databse, get all of the burger info to display, update the database when the burger has been eaten, and remove a burger.

## Handlebars

Content through routes. When the burger data is received from the database, handlebars then renders the `index.handlebars` to dynamically display the data.

## Technologies Used

* JavaScript
* JQuery
* Node.js
* Express
* MySQL Database
* Handlebars
* HTML5
* Bootstrap 4

### Created by Savannah Israel

[Demo App on Heroku](https://dry-ocean-95126.herokuapp.com/)
