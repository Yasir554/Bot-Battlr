### Bot Battlr

## Description

Bot Battlr is a React-based single-page application (SPA) that allows users to view a collection of bots, enlist them into their personal army, release them, and even permanently delete them. The app fetches bot data from an API and provides sorting and filtering functionalities to manage the bots efficiently.

## Features
Fetch bot data from an external API.
Display a collection of bots with attributes such as health, damage, and class.
Sort and filter bots based on attributes.
Enlist bots into a personal army with restrictions (only one bot per class).
Release bots back to the collection.
Permanently delete bots from both the collection and the army.

## Technologies Used

React.js (with Vite)
JavaScript 
CSS
JSON Server (API hosted on Render)

## Installation and Setup

Ensure you have Node.js and npm installed on your system.
Steps to Run the Project;
1. Clone this repository:
2. git clone https://github.com/your-username/bot-battlr.git
3. Navigate to the project directory:
4. cd bot-battlr
5. Install dependencies:
6. npm install
7. Start the development server:
8. npm run dev
9. Open the application in your browser at http://localhost:5173/.


## API Endpoint

The application fetches bot data from: "https://bots-si0g.onrender.com/bots"

## Components Breakdown

1. App.jsx
Manages the main state of the application, including the list of bots and the user's army.
Fetches bot data from the API on mount.
Contains functions to enlist, release, and delete bots.

2. BotCollection.jsx
Displays a list of bots.
Allows users to sort and filter bots by class and attributes.
Includes a function to enlist bots into the army.

3. BotCard.jsx
Displays individual bot details with an enlist button.

4. YourBotArmy.jsx
Displays enlisted bots.
Provides options to release or permanently delete a bot.

5. SortBar.jsx
Contains dropdowns for sorting bots and filtering by class.
Functionality Overview
Fetching Bots: Uses fetch inside useEffect to get bot data from the API.
Sorting and Filtering: Uses useState to update the criteria dynamically.
Enlist a Bot: Adds a bot to the army if no other bot of the same class exists.
Release a Bot: Removes a bot from the army without affecting the collection.
Delete a Bot: Removes a bot from both the army and the server permanently.

