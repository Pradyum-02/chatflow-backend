<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=230&color=0:F97316,100:FB923C&text=ChatFlow&fontColor=ffffff&fontSize=60&fontAlignY=38&desc=Production-Ready%20Real-Time%20Messaging%20Platform&descAlignY=60&animation=fadeIn"/>

<p align="center">
  <strong>Real-Time Messaging Platform built using the MERN Stack with Socket.IO</strong>
</p>

<p align="center">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io"/>
<img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary"/>
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens"/>
<img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render"/>

</p>

<p align="center">

<a href="YOUR_FRONTEND_LINK">
<img src="https://img.shields.io/badge/Live-Demo-orange?style=for-the-badge"/>
</a>

<a href="https://chatflow-backend-ff6w.onrender.com">
<img src="https://img.shields.io/badge/Backend%20API-Live-success?style=for-the-badge"/>
</a>

</p>

</div>

---

# 📖 Overview

**ChatFlow** is a production-ready real-time messaging platform built using the **MERN Stack**. It enables users to communicate instantly through one-to-one conversations and group chats using **Socket.IO**, while securely managing authentication with **JWT** and supporting media uploads through **Cloudinary**.

The project follows a scalable architecture with separate frontend and backend applications, making it suitable for production deployment and further feature expansion.

---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Hashing using bcrypt

---

## 💬 Real-Time Messaging

- One-to-One Chat
- Group Chat
- Instant Message Delivery
- Online User Status
- Typing Indicator
- Conversation History

---

## 👥 Group Management

- Create Group
- Rename Group
- Add Members
- Remove Members
- Leave Group

---

## 📁 File Uploads

- Image Upload
- PDF Upload
- Document Upload
- Cloudinary Integration

---

## ⚡ Backend Features

- REST APIs
- Socket.IO
- MongoDB
- Mongoose
- JWT Authentication
- Cloudinary
- Multer

---

# 🛠 Tech Stack

## Frontend

- React
- React Router DOM
- Axios
- Socket.IO Client
- CSS
- Framer Motion

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT
- bcrypt
- Multer
- Cloudinary

---

# 📂 Project Structure

## Backend

```text
chatflow-backend/

src/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── socket/
├── utils/
│
server.js
package.json
```

## Frontend

```text
chatflow-frontend/

src/
│
├── assets/
├── components/
├── context/
├── hooks/
├── pages/
├── routes/
├── services/
├── socket/
├── styles/
├── utils/
│
App.jsx
main.jsx
```

---

# 🌐 REST API

## Authentication

```http
POST /api/v1/auth/register
POST /api/v1/auth/login
```

---

## Users

```http
GET /api/v1/users
```

---

## Conversations

```http
POST /api/v1/conversations
GET /api/v1/conversations
```

---

## Groups

```http
POST   /api/v1/conversations/group
PATCH  /api/v1/conversations/group/:groupId
PATCH  /api/v1/conversations/group/:groupId/add
PATCH  /api/v1/conversations/group/:groupId/remove
PATCH  /api/v1/conversations/group/:groupId/leave
```

---

## Messages

```http
POST /api/v1/messages
GET  /api/v1/messages/:conversationId
POST /api/v1/messages/upload
```

---

# ⚡ Socket.IO Events

## Client → Server

```text
setup

joinConversation

sendMessage

typing

stopTyping
```

---

## Server → Client

```text
receiveMessage

typing

stopTyping
```

---

# ⚙ Environment Variables

## Backend

```env
PORT=

MONGO_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

## Frontend

```env
VITE_API_URL=

VITE_SOCKET_URL=
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Pradyum-02/chatflow-backend.git
```

---

## Backend

```bash
cd chatflow-backend

npm install

npm run dev
```

---

## Frontend

```bash
cd chatflow-frontend

npm install

npm run dev
```

---

# 🌍 Deployment

| Service | Platform |
|----------|----------|
| Backend | Render |
| Frontend | Vercel |
| Database | MongoDB Atlas |
| Media Storage | Cloudinary |

---

# 📸 Screenshots

> Screenshots will be added after frontend deployment.

---

# 🚀 Future Improvements

- Read Receipts
- Message Search
- Push Notifications
- Message Reactions
- Voice & Video Calling

---

# 👨‍💻 Author

**Pradyum Meshram**

GitHub: https://github.com/Pradyum-02

LinkedIn: YOUR_LINKEDIN

Portfolio: YOUR_PORTFOLIO

---

<div align="center">

⭐ If you found this project useful, consider giving it a star!

Made with ❤️ by **Pradyum Meshram**

</div>
