Welcome to the DomeBnb ReadMe!


Summary

DomeBnb is has a similar concept as Airbnb. It is a website to hosts to create, edit and delete the spots.



Node Modules Installation

Backend:

In backend folder run npm install

Frontend:

In the frontend folder run npm install



Database setting up:

Create a user

In psql, CREATE USER WITH PASSWORD '' CREATEDB

Create .env file

Copy .env-example into your own .env file Add some values from the file



Create the database as follows:

npx dotenv sequelize db:create

npx dotenv sequelize db:migrate

npx dotenv sequelize db:seed:all



Start

Run npm start in both frontend and backend folder

Ready to go


