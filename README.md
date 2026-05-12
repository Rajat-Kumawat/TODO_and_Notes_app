# Todo & Notes App with Auth

> A full-stack web application featuring a RESTful API backend and React frontend, with secure JWT-based authentication and full CRUD functionality for todos and notes.

---

## 🎯 Objective

Build a production-ready full-stack application from the ground up — covering backend API design, database modelling, authentication, and frontend integration — deployed on a live platform.

---

## 🗓️ Project Roadmap

### Week 1 — Backend Foundation
- Set up an **Express.js** server
- Connect to **MongoDB** using Mongoose
- Design user and note/todo schemas
- Build a **REST API** with full CRUD operations

### Week 2 — Authentication & Security
- Implement **JWT-based auth** (register / login / logout)
- Protect private routes using auth **middleware**
- Handle token validation and error responses

### Week 3 — Frontend & Deployment
- Build a **React** frontend and connect it to the API
- Manage application state and handle auth flows
- Make API calls using **Axios / fetch**
- Deploy the app on **Render / Vercel**

---

## ⚙️ Core Functionalities

| Feature | Description |
|---|---|
| User Registration | Create a new account with hashed password storage |
| User Login / Logout | Authenticate users and issue/invalidate JWT tokens |
| Protected Routes | Middleware to restrict access to authenticated users only |
| Create Todo / Note | Add new items tied to the logged-in user |
| Read Todos / Notes | Fetch all items belonging to the current user |
| Update Todo / Note | Edit existing items |
| Delete Todo / Note | Remove items permanently |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend Framework | Express.js |
| Database | MongoDB + Mongoose |
| Authentication | JWT (JSON Web Tokens) |
| Frontend | React |
| HTTP Client | Axios |
| Deployment | Render / Vercel |

---

## 📚 What You'll Learn

- Designing RESTful APIs with Express.js
- Data modelling with **Mongoose** and MongoDB
- Implementing **JWT authentication** end-to-end
- Managing **React state** for authenticated UIs
- Making HTTP requests with **fetch / axios**
- Deploying full-stack apps to the cloud

---

## 📁 Project Structure (Suggested)

```
project-root/
├── server/
│   ├── models/          # Mongoose schemas (User, Note/Todo)
│   ├── routes/          # Express route handlers
│   ├── middleware/       # JWT auth middleware
│   ├── controllers/     # Business logic
│   └── server.js        # Entry point
├── client/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Login, Register, Dashboard
│   │   └── App.jsx
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd project-root

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### Environment Variables

Create a `.env` file inside `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Run the App

```bash
# Start the backend (from /server)
npm run dev

# Start the frontend (from /client)
npm start
```