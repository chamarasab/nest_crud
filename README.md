# Angular + NestJS + MongoDB CRUD App

### Designed and developed by, Chamara Ekanayake

## Introduction

Angular is a popular front-end framework for building single-page applications, while NestJS is a powerful back-end
framework for building scalable and modular applications using TypeScript. MongoDB is a NoSQL document database that
provides high performance, scalability, and flexibility. Together, these technologies can be used to build a full-stack
CRUD application, where users can Create, Read, Update, and Delete data from a MongoDB database using an Angular
front-end and a NestJS back-end.

### Features

Angular front-end for a modern and responsive user interface
NestJS back-end for a scalable and modular application architecture
MongoDB database for flexible and high-performance data storage
Full CRUD functionality for managing data
RESTful API for easy integration with other applications

### Getting Started

To get started with this project, follow these steps:

Clone the repository to your local machine using git clone https://github.com/chamarasab/nest_crud.git
Install the dependencies by running npm install in both the frontend and backend directories
Start the back-end server by running npm run start:dev in the backend directory
Start the front-end server by running ng serve in the frontend directory
Open your browser and navigate to http://localhost:4200 to access the application

### Usage

Once the application is up and running, you can use it to Create, Read, Update, and Delete data from the MongoDB
database. The front-end interface provides a user-friendly way to interact with the application, while the back-end API
handles the data storage and retrieval.

### Conclusion

The Angular + NestJS + MongoDB CRUD App provides a powerful and flexible stack for building modern web applications. By
leveraging the strengths of each technology, developers can create applications that are scalable, modular, and easy to
maintain. Whether you're building a small prototype or a large-scale enterprise application, this stack has everything
you need to get the job done.

### Essential Codes

> nest g mo users

> nest g cl users/schema/users.schema --flat --no-spec

> nest g s users --no-spec

> nest g co users --no-spec

> ng generate component users/all-users --skip-tests

> ng generate interface users/users

> ng generate service users/users --skip-tests

> npm install @nestjs/common

### Screenshots
<img src="https://github.com/chamarasab/nest_crud/blob/master/screenshots/img3.gif" alt="insert.gif"/>
<a href="https://github.com/chamarasab/nest_crud/blob/master/screenshots/crud.pdf" class="btn btn-primary">Read More</a>
