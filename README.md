# ✈️ Flight Management System (MERN Stack)

A full-stack Flight Management and Booking System built using the **MERN Stack**. This application allows users to search and book flights, while administrators can manage flights, bookings, and users through a dedicated dashboard.

---

## 🚀 Features

### 👤 User Features
- User Registration & Login
- JWT Authentication
- Browse Available Flights
- Search Flights
- Book Flights
- View My Bookings
- Responsive User Interface

### 👨‍💼 Admin Features
- Secure Admin Login
- Dashboard with Statistics
- Create New Flights
- Edit Flight Details
- Delete Flights
- View All Bookings
- Manage Flight Inventory

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Nodemailer

---

## 📂 Project Structure

```
Flight_Management/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/syedhussain0827/Flight_Management.git
```

```bash
cd Flight_Management
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

Run Backend

```bash
npm start
```

---

## Frontend Setup

Open a new terminal.

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## API Features

### Authentication
- Register User
- Login User

### Flights
- Get All Flights
- Create Flight
- Update Flight
- Delete Flight

### Bookings
- Book Flight
- View My Bookings
- View All Bookings (Admin)

---

## 🔒 Authentication

- JWT Authentication
- Protected Routes
- Role-Based Authorization
- Password Encryption using bcrypt

---

## Future Improvements

- Flight Seat Selection
- Payment Gateway Integration
- Flight Filters
- Email Notifications
- Booking Cancellation
- Dark Mode
- User Profile Management

---

## Author

**Syed Yousuf Hussain**

GitHub: https://github.com/syedhussain0827

LinkedIn: *([Add your LinkedIn profile link here](https://www.linkedin.com/in/syed-yousuf-hussain-42336a317/))*

---

## License

This project is licensed under the MIT License.
