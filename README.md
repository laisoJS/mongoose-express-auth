# Express-Mongoose Auth app
This project is a simple authentication application build using Express.js and Mongoose for the Database.\
Here is the list of al the package used in this project:<br> 
`express`, `dotenv`, `jsonwebtoken`, `mongoose`, `validator`, `bcrypt`, `helmet`

## Features
- Routes
    - Register
    - Login
- Middleware
    - is logged in

## 📦 Prerequisites
- Node.js and npm (or yarn) installed on your system.
- A MongoDB database running

## 💾 Installation
1. Clone this repository:\
    `git clone https://github.com/laisoJS/mongoose-express-auth`

2. Navigate to the project directory:\
    `cd mongoose-express-auth`

## 🔨 Usage
1. Start the server :
    | Method      | Command       |
    |------------ |-------------- |
    | **Install** | `npm install` |
    | **Start**   | `npm start`   |
    | **Dev**     | `npm dev`     |
2. The server will run on port `8080` if not changed in the `.env`.\
   You can access it in your browser at `http://localhost:8080`

## 🔧 Configuration
- Rename `exemple.env` to `.env` and add your config

## 🔗 API Endpoints (Modify as needed)
- `/api/auth/login` - POST request to login a user
- `/api/auth/register` - POST request to register a new user

## 📔 Additional Notes
- This is a basic structure. Feel free to extend it as you need
- Remember to implement proper security measure for user data privacy

## 👍 Contributing
Feel free to contribute to this project by creating pull requests!

## License
This project is licensed under the MIT License. See the LICENSE file for details.
