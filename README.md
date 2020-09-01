[![Codacy Badge](https://app.codacy.com/project/badge/Grade/00aa50a8c507486392a2d7a84f973d40)](https://www.codacy.com/manual/torsami77/mcs-backend?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=torsami77/mcs-backend&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/torsami77/mcq-backend.svg?branch=develop)](https://travis-ci.org/torsami77/mcq-backend) [![Coverage Status](https://coveralls.io/repos/github/torsami77/mcs-backend/badge.svg)](https://coveralls.io/github/torsami77/mcs-backend)

# MCQ-backend
A Multiple Choice Question Platform

**App's Instance and API Documentation:  https://quick-mcq-backend.herokuapp.com/**

## Seeded Questions and Answers from 
https://www.mbarendezvous.com/reading-comprehension-passages/#with%20answers

## NB: 
- Mock questions are repeated to make up for required 10
- All right answers are represented in option_1 column of questions table
___
### TECHNOLOGY USED
+ Back End: Node.JS, NPM, Express
+ Libraries: jsonwebtoken, ES6, Babel, eslint, Jet/Chai, Sequelize, etc
+ Database: PostgreSQL
+ CI/CD: Travis, Coveralls, Codacy
+ API Documentation: Swagger
___
### INTEGRATION
- Clone or download this repository.
- npm install - Install dependencies for the app
- Go to src/database/config/config.js to set database variables
- Set process.env.SECRET
- Create a sendgrid.com email API and set it to process.env.SENDGRID_API_KEY
- npm run migrate - To run migrations
- npm run seed - To seed database with questions
- npm run start:dev - To run app in dev mode (Port: 3000)
- npm start - To run app in production 
___

# User Stories
## Authentication
	- Sign up
	- Sign in
	- Password reset request
	- Password Creation
	- Log out

## Assessments
	- View assessment score history -- Partially Completed
	- Take exams
	- View instructions
	- Randomly fetch and view 2 passages with 10 questions each from seeded database.
	- Randomly display 4 objective answers in each fetched question
	- Set timer (timeout & intervals)
	- Injury time UX
	- Time up UX
	- Substitution UX
	---incomplete
	- Sum each correct answer by 5 points to compute 75 passing mark
	- Passed and failed score UX

___
# Thank you
