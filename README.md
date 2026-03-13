# 🎫 IT Helpdesk Ticket System

A minimal **IT support helpdesk application** built to practice **CRUD operations and filtering using URL search parameters**.

The application allows users to create, view, update and manage support tickets in a simple interface. Ticket data is handled through a **custom-built API** and stored in a **MongoDB database**.

The main goal of the project was to explore how ticket data can be **filtered and controlled via search params in the URL**, making it easy to share and persist filter states.

## 📖 About the Project

This project simulates a simple IT support helpdesk system where users can create and manage support tickets.

Tickets are stored in a MongoDB database and accessed through a custom REST API built for the project.

The purpose of the project was to practice:
- CRUD operations (Create, Read, Update, Delete)
- Building and consuming a custom API
- Storing and managing data using MongoDB
- Filtering tickets using URL search parameters
- Handling forms and user input in the frontend

Using search parameters allows the application to store filter states directly in the URL, making filtered views shareable and persistent.

## 🌐 Live Demo
 
 🔧 Coming soon (TBC)

 Frontend:

 Backend:

## ✨ Features

✅ View all support tickets

✅ Create new support tickets

✅ Update ticket information

✅ Delete tickets

✅ Filter tickets using URL search parameters

✅ Persistent filtering via the URL

✅ Ticket data stored in MongoDB

✅ Data handled through a custom-built API

## 🛠 Technologies

### Frontend ###

- Next.js
- React
- TypeScript
- URL SearchParams

### Backend ###

- Node.js
- Express

### Database ###

- MongoDB
- Mongoose

## ⚙️ Installation
```
# Clone the repository
git clone https://github.com/username/repo-name.git

# Navigate into the project folder
cd repo-name

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🚀 Usage

**Dashboard Page**

The dashboard serves as the main landing page of the application and provides a quick overview of the helpdesk system. From here users can navigate to the ticket system and manage support requests.

**Tickets Page**

Displays a list of all support tickets fetched from the API and stored in MongoDB.

**Create Ticket**

Users can submit a new support ticket through a form.

**Update / Manage Tickets**

Tickets can be updated or deleted depending on their status.

**Ticket Filtering**

Tickets can be filtered using search parameters in the URL.

Example:
```
/tickets?status=open
/tickets?priority=high
```
This allows the application to maintain filter state and share filtered views easily.

## 📚 Learnings

Through this project I learned:

- How CRUD operations work in a full application

- Managing filtering using URL search parameters

- Structuring a ticket management system

- Handling forms and user input in React

## 🔮 Future Improvements

If I had more time, I would like to improve the project by adding:

- 🎨 Improved UI styling and design

- 🔐 User authentication / login system

- 🔔 Toast notifications for user feedback

- ✅ More advanced frontend form validation

- 🔎 Additional filtering options for tickets

- 🌐 Replace some static information with API-driven data

- 🛠 Improved error handeling both in backend and frontend

- 📊 More advanced ticket management features