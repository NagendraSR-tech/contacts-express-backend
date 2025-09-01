# Contact Manager Backend

A project built with **Node.js**, **Express**, and **MongoDB** to manage contacts with CRUD operations and user authentication.

## Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT for Authentication
- Nodemon – Watches files & restarts server on save.
- Thunder Client – For testing API endpoints.

## Features
- REST API for managing contacts.
- User registration and login with JWT authentication.
- CRUD operations for contacts.
- Modular and scalable backend structure.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB](https://www.mongodb.com/) (local or Atlas cloud)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/contact-manager-backend.git

2. Navigate into the project directory:
   ```bash
   cd contact-manager-backend

3. Install dependencies:
   ```bash
   npm install

4. Create a .env file in the root and add:
   ```bash
   PORT=5001
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key

5. Start the development server:
   ```bash
   npm run dev
   ```
   or directly with Nodemon:
   ```bash
   nodemon server.js
   ```

## API Endpoints

### User Routes
- POST /api/users/register – Register a new user
- POST /api/users/login – Login and get JWT token

### Contact Routes
- GET /api/contacts – Get all contacts
- POST /api/contacts – Add a contact
- GET /api/contacts/:id – Get a single contact
- PUT /api/contacts/:id – Update a contact
- DELETE /api/contacts/:id – Delete a contact

### Testing
Use Thunder Client (VS Code Extension) or Postman to test API routes.

