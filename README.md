Overview
This is a web-based financial data filtering application that allows users to fetch, display, and analyze Apple Inc.'s annual income statements. Users can view data in a tabular format, filter results based on specific criteria, and sort the information for better analysis.

Features
Data Fetching and Display:

Retrieves annual income statements for Apple Inc. using the Financial Modeling Prep API.
Displays data in a responsive table with the following columns:
Date
Revenue
Net Income
Gross Profit
EPS (Earnings Per Share)
Operating Income
Filtering Options:

Date Range: Filter rows between specific years (e.g., 2020–2024).
Revenue Range: Filter rows where revenue falls within a user-defined range.
Net Income Range: Filter rows where net income falls within a user-defined range.
Sorting Options:

Sort the table by:
Date (ascending/descending)
Revenue (ascending/descending)
Net Income (ascending/descending)
Responsive Design:

Mobile-friendly interface using TailwindCSS, ensuring usability across devices.
Technologies Used
Frontend:

React (JavaScript/TypeScript) for building the user interface.
TailwindCSS for styling and responsiveness.



Prerequisites
Node.js and npm installed on your machine.
Free API key from Financial Modeling Prep.

Setup Instructions
Clone the repository:

Navigate to the project directory:

Install dependencies: npm install

Create a .env file in the project root and add your API key:

Start the development server : npm start
