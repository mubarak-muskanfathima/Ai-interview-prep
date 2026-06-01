# AI Interview Preparation Platform

## Overview

AI Interview Preparation Platform is a full-stack web application that helps users prepare for technical interviews using AI-generated questions and AI-powered answer evaluation.

Users can:

* Register and log in securely
* Select an interview category
* Generate interview questions using AI
* Submit answers
* Receive AI-based feedback and scoring
* Save interview results

## Features

* User Authentication (JWT)
* AI Question Generation
* AI Answer Evaluation
* Interview Score Analysis
* MongoDB Data Storage
* Responsive Frontend

## Tech Stack

### Frontend

* React
* Vite
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication

### AI

* Groq API
* Llama 3.3 70B Versatile Model

## Project Structure

ai-interview-prep/
├── frontend/
├── backend/
└── README.md

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the backend folder:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_api_key
```

## Future Enhancements

* Interview History Dashboard
* Performance Analytics
* Multiple Difficulty Levels
* PDF Report Generation

## Author

Muskan Mubarak

Final Year Full Stack Development Project
