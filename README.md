<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:ff8c00,100:ff5e00&text=Backend%20Starter%20Kit&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38"/>

# 🚀 Backend Starter Kit

### Production-Ready Node.js + Express Backend Boilerplate

A reusable backend starter template built with **Node.js**, **Express.js**, and **MongoDB**, designed to accelerate backend development by providing a clean folder structure, reusable utilities, middleware, and deployment-ready configuration.

<p>

<a href="https://github.com/Pradyum-02/Backend-Starter-Kit">
<img src="https://img.shields.io/badge/GitHub-Repository-orange?style=for-the-badge&logo=github"/>
</a>

<a href="https://backend-starter-kit-uulq.onrender.com/health">
<img src="https://img.shields.io/badge/Live%20API-Render-success?style=for-the-badge"/>
</a>

</p>

</div>

---

# 📖 Overview

Backend Starter Kit is a reusable Express backend template that eliminates repetitive setup work for every new backend project.

Instead of configuring Express, MongoDB, middleware, utilities, and deployment from scratch every time, simply clone this repository and start building your application immediately.

It serves as the foundation for future projects like:

- 💬 Real-Time Chat Backend
- 📁 File Upload Service
- 📧 Email Service
- 🔔 Notification Service
- 🏢 LeaveFlow
- 🏥 Hospital Management System
- 🎓 College OS

---

# ✨ Features

- ⚡ Express Server Setup
- 🍃 MongoDB Atlas Connection
- 🔐 JWT Utility
- 🛡 Global Error Handling
- 🚫 Custom 404 Middleware
- 📦 Async Handler Utility
- 📄 Standard API Response Class
- ❌ Custom API Error Class
- 📝 Logger Utility
- 🌍 Environment Variable Support
- 📡 Health Check Endpoint
- 🚀 Render Deployment Ready
- 📁 Professional Folder Structure

---

# 🏗 Project Structure

```text
Backend-Starter-Kit
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── notFoundMiddleware.js
│   │
│   ├── models
│   │
│   ├── routes
│   │
│   ├── services
│   │
│   ├── utils
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   ├── generateToken.js
│   │   └── logger.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

---

# 🛠 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,git,github,vscode" />

</div>

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/Pradyum-02/Backend-Starter-Kit.git
```

Navigate to the project

```bash
cd Backend-Starter-Kit
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run the server

```bash
npm run dev
```

---

# 🌐 API Endpoints

## Root Endpoint

```http
GET /
```

Returns

```json
{
  "success": true,
  "message": "Backend Starter Kit API is Running 🚀"
}
```

---

## Health Check

```http
GET /health
```

Returns

```json
{
  "success": true,
  "status": "OK",
  "message": "Backend Starter Kit is Healthy 🚀"
}
```

---

# 🌍 Live API

### Backend URL

👉 https://backend-starter-kit-uulq.onrender.com/

### Health Check

👉 https://backend-starter-kit-uulq.onrender.com/health

Use these endpoints directly in:

- Postman
- Thunder Client
- Frontend Applications
- Mobile Applications

---

# 📦 Reusable Utilities

### Middleware

- Authentication Middleware
- Error Middleware
- Not Found Middleware

### Utilities

- Async Handler
- API Response
- API Error
- JWT Generator
- Logger

---

# 🚀 Ready For

- Authentication Systems
- Chat Applications
- REST APIs
- File Upload Services
- Email Services
- Notification Services
- Enterprise Backend Projects

---

# 📈 Future Projects Using This Starter

- 💬 Real-Time Chat Backend
- 📁 File Upload Service
- 📧 Email Service
- 🔔 Notification Service
- 🏢 LeaveFlow
- 🏥 Hospital Management
- 🎓 College OS

---

# 📫 Connect With Me

<div align="center">

<a href="https://github.com/Pradyum-02">
<img src="https://skillicons.dev/icons?i=github" />
</a>

&nbsp;&nbsp;&nbsp;

<a href="https://www.linkedin.com/in/pradyum-meshram-7b4305321/">
<img src="https://skillicons.dev/icons?i=linkedin" />
</a>

&nbsp;&nbsp;&nbsp;

<a href="mailto:pradyumofc13@gmail.com">
<img src="https://skillicons.dev/icons?i=gmail" />
</a>

</div>

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

**Build Once • Reuse Everywhere • Scale Faster 🚀**

</div>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=0:ff8c00,100:ff5e00"/>

</div>
