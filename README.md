# OISSIP_3 - Food Project

OISSIP_3 is a comprehensive food-related web application developed using the MERN stack (MongoDB, Express, React, Node.js). The application offers features like meal planning, recipe sharing, ratings and reviews, and a payment gateway to enhance the user's food experience.

## Features

- **User Authentication**:
  - Secure registration and login using JWT (JSON Web Tokens).
  - Passwords are securely hashed with `bcrypt`.

- **Ratings and Reviews**:
  - Users can rate recipes and leave reviews.
  - View ratings and reviews from other users.

- **Payment Gateway**:
  - Integrated payment system for ordering ingredients or other related services.

- **Responsive Design**:
  - The application is fully responsive, providing an optimal experience across all devices.

## Technologies Used

- **MongoDB**: NoSQL database for storing user data, recipes, meal plans, and other information.
- **Express.js**: Backend framework used to build the RESTful API.
- **React.js**: Frontend library for building the user interface and managing state.
- **Node.js**: JavaScript runtime environment for running the backend server.
- **JWT**: For user authentication and session management.
- **Mongoose**: ODM for MongoDB, used to interact with the database.
- **bcrypt**: For hashing passwords securely.
- **Stripe**: (Assuming a payment gateway) Integration for processing payments.

## Installation and Setup

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **MongoDB**: Set up MongoDB locally or use a cloud service like MongoDB Atlas.
- **Payment Gateway Account**: (Stripe/PayPal) for processing payments.

### Steps to Set Up the Project

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/AtrePramod/OIBSIP_3git
    ```

2. **Install Backend Dependencies**:
    ```bash
    cd ../server
    npm install
    ```

3. **Install Frontend Dependencies**:
    ```bash
    cd ../client
    npm install
    ```

4. **Run the Backend**:
    ```bash
    cd ../server
    npm start
    ```

5. **Run the Frontend**:
    ```bash
    cd ../client
    npm start
    ```

6. **Access the Application**:
    - Open your browser and go to `http://localhost:3000` to start using OISSIP_3.

## Usage

- **Register/Login**: Create an account or log in to access all features.
- **Rate and Review**: Give feedback on recipes by rating and reviewing.
- **Payment Gateway**: Use the integrated payment system to order ingredients or services.


## Contact

For any questions or issues, please contact [pramodatre05@gmail.com](mailto:pramodatre05@gmail.com).
