# FUTURE_FS_02
# 🚀 Mini CRM – Client Lead Management System

A full-stack Client Lead Management System (Mini CRM) built using the MERN stack to help businesses manage incoming leads, track customer interactions, and monitor conversion progress.

This project was developed as part of **Future Interns – Full Stack Web Development Internship (Task 2 – 2026).**

---

# 📌 Project Overview

The Mini CRM allows businesses to collect, manage, and track potential client leads through an easy-to-use dashboard.

The system enables administrators to:

* View all leads
* Add new leads
* Update lead information
* Change lead status
* Delete leads
* Track customer conversion progress

This project demonstrates real-world CRUD operations, REST API development, database integration, and frontend-backend communication.

---

# 🎯 Objectives

* Build a functional CRM system
* Practice full-stack development
* Implement CRUD operations
* Connect React frontend with Express backend
* Store and manage lead data using MongoDB
* Create a business-oriented application

---

# 🛠 Tech Stack

## Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Axios

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Development Tools

* VS Code
* Git
* GitHub
* Postman

---

# ✨ Features

## Lead Management

✔ View all leads

✔ Add new leads

✔ Edit lead details

✔ Delete leads

## Lead Information

Each lead contains:

* Name
* Email
* Phone Number
* Lead Source
* Status

## Lead Status Tracking

Leads can be tracked through different stages:

* New
* Contacted
* Converted

## Dashboard

* Display all leads
* Manage lead records
* Real-time updates

---

# 📂 Project Structure

```bash
mini-crm/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   │   └── leadController.js
│   │
│   ├── routes/
│   │   └── leadroutes.js
│   │
│   ├── db.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/yourusername/mini-crm.git
```

## Navigate to Project Folder

```bash
cd mini-crm
```

---

# Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start backend server:

```bash
npm start
```

Server runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔗 API Endpoints

## Get All Leads

```http
GET /api/leads
```

## Create New Lead

```http
POST /api/leads
```

## Update Lead

```http
PUT /api/leads/:id
```

## Delete Lead

```http
DELETE /api/leads/:id
```

---

# 📊 Sample Lead Data

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "source": "Website",
  "status": "New"
}
```

---

# 🚀 Future Enhancements

* Admin Authentication (JWT)
* Search & Filter Leads
* Follow-Up Notes
* Lead Analytics Dashboard
* Conversion Rate Tracking
* Export Leads to CSV/Excel
* Email Notifications
* Role-Based Access Control

---

# 📸 Screenshots

Add screenshots of:

* Dashboard
* Lead List
* Add Lead Form
* Update Lead Status

---

# 🌐 Live Demo

Frontend:

```text
https://your-app.vercel.app
```

Backend:

```text
https://your-api.onrender.com
```

---

# 💻 GitHub Repository

```text
https://github.com/yourusername/mini-crm
```

---

# 👨‍💻 Author

**Shaik Arifha**

Full Stack Developer

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

Email: [your-email@example.com](mailto:your-email@example.com)

---

# 📜 Internship Task

**Future Interns – Full Stack Web Development Internship (2026)**

### Task 2: Client Lead Management System (Mini CRM)

The objective of this task is to build a lead management platform that allows businesses to store, track, and manage customer leads efficiently through a centralized dashboard.

---

# ⭐ Acknowledgements

* Future Interns
* React.js Documentation
* Node.js Documentation
* Express.js
* MongoDB Atlas
* Open Source Community
