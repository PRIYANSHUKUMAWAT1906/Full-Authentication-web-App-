#  Full Authentication Web App

This is a full-stack authentication web application built using **Node.js, Express, MongoDB, and Vanilla JavaScript**.
The project allows users to **sign up, log in, access a protected dashboard, and log out securely using JWT authentication.**

---

##  Features

* User Signup
* User Login
* Password hashing using **bcrypt**
* **JWT authentication**
* Protected dashboard route
* Token expiration handling
* Logout functionality
* User profile display
* Basic frontend UI with HTML, CSS, and JavaScript

---

##  Tech Stack

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Thunder_client

**Frontend**

* HTML
* CSS
* Vanilla JavaScript

---

##  Project Structure

```
project/
│
├── config/
│   └── db.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── auth.js
│
├── middleware/
│   └── auth.js
│
├── public/
│   ├── login.html
│   ├── signup.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
└── README.md
```

---

##  API Endpoints

### Signup

```
POST /api/signup
```

Creates a new user account.

---

### Login

```
POST /api/login
```

Authenticates a user and returns a JWT token.

---

### Get Profile

```
GET /api/profile
```

Protected route that returns the logged-in user's profile.

Header required:

```
Authorization: Bearer TOKEN
```

---

## ⚙ Installation

Clone the repository:

```
git clone https://github.com/yourusername/auth-app.git
```

Install dependencies:

```
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## ▶ Run the Project

```
node server.js
```

Open in browser:

```
http://localhost:3000
```

---

##  Future Improvements

* Add better UI styling
* Add password validation
* Implement refresh tokens
* Deploy application online

## connect with me 
* Linkedin=https:https://www.linkedin.com/in/priyanshu-kumawat-73b569322/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2jOScHdMRhWxpsvl91fZ%2BA%3D%3D
* email= er.priyanshu1906@gmail.com
