//Use this file to define indexes for your queries

db.restaurants.createIndex({ "borough": 1, "grades.score":1,"cuisine":1})
