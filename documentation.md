I apologize for the confusion. Let's update the documentation accordingly:

# Yourba App Documentation

## Introduction

The Yourba App is a web application built to provide users with an anonymous platform to connect and chat with other users. It allows users to create accounts, view potential matches, connect with others, engage in real-time chats, and update their profile information.

## Technologies Used

The app is developed using the following technologies:

- **React**: A popular JavaScript library for building user interfaces. React is used for creating the frontend components and managing the application's state.
- **Node.js**: A JavaScript runtime environment that allows running JavaScript on the server side. Node.js is used to build the backend server for handling API requests.
- **Express**: A fast and minimalist web application framework for Node.js. Express is used to handle routing and middleware for the backend server.
- **MongoDB**: A NoSQL document-oriented database. MongoDB is used to store and retrieve user account details, connections, conversations, and profile information.
- **Prisma**: An open-source database toolkit that provides an ORM (Object-Relational Mapping) for Node.js. Prisma is used to interact with the MongoDB database.
- **Tailwind CSS and daisyUI**: CSS frameworks that provide a set of pre-designed UI components and utility classes to style the app's frontend.
- **bcrypt**: A library for hashing passwords. bcrypt is used to securely store and compare user passwords.
- **Sockets** (to be used later): A library for enabling real-time bidirectional communication between clients and servers. Sockets will be used for real-time chat functionality.

## Pages

### Landing Page

**Entry Point**: Landing.jsx

The Landing Page serves as the entry point of the app. It provides an introduction to the app's features and prompts users to either login or create a new account.

### Login Page

**Path**: /login

The Login Page allows users to enter their login credentials to access their account. It validates the credentials and redirects users to the Meets Page upon successful login.

### Register Page

**Path**: /register

The Register Page enables new users to create an account. It prompts users to provide necessary details, such as username, email, and password. The page communicates with the backend to store user account information securely in the database.

### Meets Page

**Path**: /meets

The Meets Page displays potential matches to the user. It provides options to either connect with or skip a user. The page communicates with the backend to retrieve and display user profiles.

### Connects Page

**Path**: /connects

The Connects Page shows the user's connections and conversations. It allows users to initiate chats with their connections and view existing conversations. The page communicates with the backend to retrieve and display connection and conversation data.

### Profile Page

**Path**: /profile

The Profile Page displays the user's profile information, including their username, profile picture, and additional details. It also provides options to update the profile information.

### Update Profile Page

**Path**: /profile/update

The Update Profile Page allows users to modify their profile information, such as profile picture, bio, interests, and preferences. The page communicates with the backend to update the user's profile data in the database.

### Chats Page

**Path**: /chats

The Chats Page provides a user interface for real-time chat functionality. It displays the user's active conversations and allows them to send and receive messages in real-time using sockets.

### PeopleDetail Page

**Path**: /people/:id

The PeopleDetail Page shows detailed information about a specific user, including their profile picture, username, bio, and interests. It allows users to view the profiles of other users.

## Conclusion

The Yourba

App provides users with a secure and anonymous platform to connect with potential matches and engage in real-time conversations. By utilizing technologies such as React, Node.js, Express, MongoDB, and Prisma, the app offers a smooth user experience and efficient data management. With additional features like real-time chat using sockets, the app facilitates meaningful connections between users while maintaining their anonymity.
