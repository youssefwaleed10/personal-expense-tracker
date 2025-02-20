# Personal Expense Tracker  

## Description  
Personal Expense Tracker is a training project focused on learning token-based authentication and user sign-in using JWT.
The main goal is to implement secure authentication and work with branches rather than focusing on the frontend design.
The project is built using the MERN stack and provides basic user authentication and expense tracking functionality.  

## Features  
- User authentication (Sign Up & Sign In)  
- Secure password hashing and JWT-based authentication  
- Add, edit, and delete expenses  
- View expense history  

## Tech Stack  
- **Frontend:** React, React Router  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT, Bcrypt  

## Installation  

### **1. Clone the Repository**  

git clone https://github.com/youssefwaleed10/personal-expense-tracker.git
cd personal-expense-tracker

### **2.  install dependencies for both the backend and frontend**  
cd backend
npm install
cd frontend
npm install

### **3. create dotenv file in the backend directory and add the required environment variables**  
MONGO_URI=mongodb+srv://yousseffwaleedd:Youssef1010@personal-expense-tracke.v6vn6.mongodb.net/
PORT=5001
JWT_SECRET=9e8a301b71ef66d2b72b8fe6789ec0d92316f300d1a43d042fb1e4fdd5fca046e

### **4. To start the application, run the following commands**  
# Start backend
cd backend
npm start

# Start frontend
cd frontend
npm run dev

# Finally
Once the application is running, users can sign up, log in, add expenses, and view their expense history.

This project is meant for training purposes, specifically focusing on authentication and token-based security,
rather than frontend development.
