
# URL Shortener (MERN Stack)

A full-stack URL shortening service with click tracking and analytics, built as a 4‑week remote internship project at PHICSIT.

---

## 🚀 Live Demo & Repository

- **GitHub Repository:** https://github.com/vaibhav211002/URL-Shortner  
- **Live Demo:** *url-shortner-nv3d.vercel.app/*

---

## 📝 Overview

This project allows users to generate concise, trackable short links. It provides essential analytics including click counts and timestamps. Features include:

- **URL Shortening**: Generate unique short URLs.
- **Click Tracking**: Monitor how often each URL is accessed, with timestamps.
- **Responsive UI**: Built using React & Material‑UI.
- **Full MERN stack**: MongoDB, Express.js, React.js, Node.js.

---

## 🛠️ Built With

### Frontend

- React.js  
- Material-UI  
- React‑Toastify  

### Backend

- Node.js + Express.js  
- MongoDB with Mongoose  
- RESTful API design  

### Deployment

- Frontend: Vercel  
- Backend: Render

---

## ⚙️ Key Features

- **Create Short URLs**  
  - Submit a long URL → receive a unique short code.
- **Click Analytics**  
  - Each click is logged with a timestamp for tracking.
- **Authentication (if implemented)**  
  - Optionally integrate user login for personalized link management.
- **Responsive & Clean UI**  
  - Modern interface built with Material-UI and Toast notifications.

---

## 📦 Getting Started

### Prerequisites

- Node.js  
- npm or yarn  
- MongoDB (local or Atlas)

### Setup

1. Clone the repo  
   ```bash
   git clone https://github.com/vaibhav211002/URL-Shortner.git
   cd URL-Shortner
2. Install server dependencies
   ```bash
   cd backend
   npm install
3. Setup your .env file:
   ```bash
   PORT=5000
   MONGODB_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key

4. Start the backend server
   ```bash
   npm run dev
5. Setup and run the frontend
   ```bash
   cd ../frontend
   npm install
   npm start

# API ENDPOINTS :- 

| Endpoint                    | Method | Description                        |
| --------------------------- | ------ | ---------------------------------- |
| `/api/shorten`              | POST   | Create a short URL.                |
| `/api/:shortCode`           | GET    | Redirect to the original long URL. |
| `/api/analytics/:shortCode` | GET    | Fetch click count & timestamps.    |

# Project Architecture : - 

[Frontend: React + Material-UI]
         |
       Axios
         |
[Backend: Node.js + Express + Mongoose + MongoDB]
         |
   Data stored as BSON documents




