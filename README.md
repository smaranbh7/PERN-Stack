# PERN Stack Todo Application

A full-stack todo application built with the PERN (PostgreSQL, Express, React, Node.js) stack.

## Features

- Create, Read, Update, and Delete todos
- Responsive design with Bootstrap
- RESTful API backend
- PostgreSQL database for persistent storage

## Project Structure

```
todo/
├── client/          # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       └── App.js
└── server/          # Express backend
    ├── database.sql
    ├── db.js
    └── index.js
```

## Setup Instructions

### Prerequisites

- Node.js
- PostgreSQL
- npm or yarn

### Database Setup

1. Create a PostgreSQL database named 'perntodo'
2. Execute the SQL commands in `server/database.sql`

### Server Setup

1. Navigate to the server directory:
   ```bash
   cd todo/server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file with your database configuration:
   ```
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_HOST=your_host
   DB_PORT=5432
   DB_NAME=your_DB_Name
   ```
4. Start the server:
   ```bash
   node index.js
   ```

### Client Setup

1. Navigate to the client directory:
   ```bash
   cd todo/client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

## API Endpoints

- GET `/todos` - Get all todos
- GET `/todos/:id` - Get a specific todo
- POST `/todos` - Create a new todo
- PUT `/todos/:id` - Update a todo
- DELETE `/todos/:id` - Delete a todo 
