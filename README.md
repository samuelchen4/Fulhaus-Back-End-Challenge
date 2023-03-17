# Fulhaus-Back-End-Challenge

REST API for acronyms. Created with NodeJs, Express framework, MongoDb for database, and Mongoose ODM.

## How to Start

### Steps:

1. Clone git repo
2. type in terminal **_npm install_** to download all dependencies
3. type in terminal **_npm run dev_** to start server

### Important notes:

- must have **_MongoDB_** installed
- Mongodb must be running on local machine
- server runs on port 5000
- on server start, a MongoDb will be instantiated with the name fulhausDB
  - if no documents exist in database, the seeder data will be automatically added

## Functionality

Has four functions:

- GET
- POST
- PATCH
- DELETE

### GET

Gets a list of acronyms based on an input string that is fuzzy matched against the documents.

- Supports pagination, returns documents based on the limit per page and current page.
- Headers show if there is more data avaliable and the current page compared to the total number of pages

### POST

Inserts a new acronym document into collection

### PATCH

Updates the acronym name for document based on the id

### DELETE

deletes a document based on id
