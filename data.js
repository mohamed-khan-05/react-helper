const data = [
  {
    title: "Welcome",
    category: "Welcome",
    description: null,
    code: null,
    img: "https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Start up",
    category: "QuickStart",
    description:
      "Creates the folder frontend and dependencies * Execute this within a folder with the description name",
    code: "npx create-vite frontend --template react && cd frontend && npm i && cd .. && code .",
    img: "/react-helper/images/QuickStart/startup.png",
  },
  {
    title: "FullStack npm",
    category: "QuickStart",
    description: "",
    code: "npm init -y && npm i bcryptjs express-session body-parser concurrently cookie-parser dotenv express jsonwebtoken mongoose multer nodemon mysql2 sequelize sequelize-cli",
    img: "/react-helper/images/QuickStart/Fullstack npm.png",
  },
  {
    title: "Frontend npm (clean up folders)",
    category: "QuickStart",
    description:
      "Delete react-helper and  folder * Delete App.css file * rafce App.jsx * clear index.css * remove strictmode from main.jsx",
    code: "cd frontend && npm i react-icons react-redux @reduxjs/toolkit react-router react-router-dom react-slick react-toastify slick-carousel && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
    img: "/react-helper/images/QuickStart/frontend npm.png",
  },
  {
    title: "Backend npm",
    category: "QuickStart",
    description: "",
    code: "cd backend && npx sequelize-cli init",
    img: null,
  },
  {
    title: "Configure Tailwind",
    category: "QuickStart",
    description: "",
    code: 'content: [\n    "./index.html",\n    ".//**/*.{js,ts,jsx,tsx}",\n  ],',
    img: [
      "/react-helper/images/QuickStart/configure tailwind 1.png",
      "/react-helper/images/QuickStart/configure tailwind 2.png",
    ],
  },

  {
    title: ".env",
    category: "QuickStart",
    description: null,
    code: "POST=3000 MONGO_URI='mongodb://127.0.0.1:27017/moviesApp' NODE_ENV='development' JWT_SECRET=abcdefghi",
    img: "/react-helper/images/QuickStart/env.png",
  },
  {
    title: "npm Scripts",
    category: "QuickStart",
    description: "In the package.json file in root",
    code: '"fullstack": "concurrently \\"npm run backend\\" \\"npm run frontend\\"",\n    "backend": "nodemon backend/index.js",\n    "frontend": "cd frontend && npm run dev"',
    img: "/react-helper/images/QuickStart/scripts.png",
  },
  {
    title: "Folders",
    category: "Backend setup",
    description: "",
    code: "",
    img: "/react-helper/images/Backend setup/Folders.png",
  },
  {
    title: "Index",
    category: "User management",
    description: "",
    code: 'const express = require("express");\nconst cookieParser = require("cookie-parser");\nconst cors = require("cors");\nconst createSession = require("./utils/session");\nconst bodyParser = require("body-parser");\nconst db = require("./models");\n\nconst app = express();\napp.use(createSession());\napp.use(\n  cors({\n    origin: ["http://localhost:5173"],\n    methods: ["GET", "POST"],\n    credentials: true,\n  })\n);\napp.use(cookieParser());\napp.use(express.json());\napp.use(bodyParser.urlencoded({ extended: true }));\n\n// Routers\nconst usersRouter = require("./routes/usersRoute");\napp.use("/users", usersRouter);\n\ndb.sequelize.sync().then(() => {\n  app.listen(3001, () => {\n    console.log("Server running on PORT 3001");\n  });\n});',
    img: [
      "/react-helper/images/Backend setup/Backend index 1.png",
      "/react-helper/images/Backend setup/Backend index 2.png",
    ],
  },
  {
    title: "Model",
    category: "User management",
    description: "",
    code: 'module.exports = (sequelize, DataTypes) => {\n  const Users = sequelize.define("Users", {\n    email: {\n      type: DataTypes.STRING,\n      allowNull: false,\n    },\n    password: {\n      type: DataTypes.STRING,\n      allowNull: false,\n    },\n    isAdmin: {\n      type: DataTypes.BOOLEAN,\n      allowNull: false,\n      default: false,\n    },\n  });\n  return Users;\n};',
    img: [
      "/react-helper/images/Backend setup/Backend model 1.png",
      "/react-helper/images/Backend setup/Backend model 2.png",
    ],
  },
  {
    title: "config",
    category: "User management",
    description: "Enter your database details",
    code: null,
    img: [
      "/react-helper/images/Backend setup/config 1.png",
      "/react-helper/images/Backend setup/config 2.png",
    ],
  },
  {
    title: "session",
    category: "User management",
    description: "",
    code: 'const session = require("express-session");\n\nconst sessionOptions = {\n  key: "userId",\n  secret: "secretverysecret",\n  resave: false,\n  saveUninitialized: false,\n  cookie: {\n    secure: false,\n    httpOnly: true,\n    maxAge: 1000 * 60 * 60,\n  },\n};\nmodule.exports = createSession = () => session(sessionOptions);',
    img: [
      "/react-helper/images/Backend setup/session 1.png",
      "/react-helper/images/Backend setup/session 2.png",
    ],
  },
  {
    title: "Routes",
    category: "User management",
    description: "",
    code: 'const express = require("express");\nconst router = express.Router();\nconst db = require("../models");\nconst bcrypt = require("bcryptjs");\nconst Users = db.Users;\nconst { sequelize } = db;\n\n// Users\nrouter.get("/", async (req, res) => {\n  try {\n    const [results] = await sequelize.query("SELECT * from Users");\n    res.json(results);\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\n// Register\nrouter.post("/", async (req, res) => {\n  const data = req.body;\n  const [existingUser] = await sequelize.query(\n    "SELECT * FROM Users WHERE email = ?",\n    {\n      replacements: [data.email],\n      type: sequelize.QueryTypes.SELECT,\n    }\n  );\n  if (!data.email || !data.password) {\n    return res.status(400).json({ error: "Fill all fields" });\n  }\n  if (existingUser) {\n    return res.status(500).json({ error: "User already exists" });\n  }\n\n  try {\n    const hashedPassword = await bcrypt.hash(data.password, 10);\n    data.password = hashedPassword;\n    data.isAdmin = false;\n    await Users.create(data);\n    res.status(200).json({ message: "Successfully created user" });\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\n// Login\nrouter.post("/login", async (req, res) => {\n  const data = req.body;\n  if (!data.email || !data.password) {\n    return res.status(400).json({ error: "Fill all fields" });\n  }\n  const [existingUser] = await sequelize.query(\n    "SELECT * FROM Users where email=?",\n    {\n      replacements: [data.email],\n      type: sequelize.QueryTypes.SELECT,\n    }\n  );\n\n  if (!existingUser) {\n    return res.status(400).json({ message: "User not found" });\n  }\n  const isValid = await bcrypt.compare(data.password, existingUser.password);\n  if (isValid) {\n    req.session.user = {\n      id: existingUser.id,\n      email: existingUser.email,\n      password: existingUser.password,\n      isAdmin: existingUser.isAdmin,\n    };\n    res\n      .status(200)\n      .json({ message: "Login successful", isAdmin: existingUser.isAdmin });\n  } else {\n    res.status(404).json({ message: "Incorrect credentials" });\n  }\n});\n\nrouter.get("/login", async (req, res) => {\n  if (req.session.user) {\n    res.send({ loggedIn: true, user: req.session.user });\n  } else {\n    res.send({ loggedIn: false });\n  }\n});\n\n// Logout\nrouter.post("/logout", (req, res) => {\n  req.session.destroy((err) => {\n    if (err) {\n      return res.status(500).json({ error: "Failed to log out" });\n    }\n    res.clearCookie("userId", { secure: false, httpOnly: true });\n    res.status(200).json({ message: "Logged out successfully" });\n  });\n});\n\nmodule.exports = router;',
    img: [
      "/react-helper/images/Backend setup/route 1.png",
      "/react-helper/images/Backend setup/route 2.png",
      "/react-helper/images/Backend setup/route 3.png",
      "/react-helper/images/Backend setup/route 4.png",
    ],
  },
  {
    title: "Folders and Files",
    category: "Frontend Users",
    description: "",
    code: null,
    img: "/react-helper/images/Frontend Users/Folders.png",
  },
  {
    title: "Home.jsx",
    category: "Frontend Users",
    description: "",
    code: `import React, { useContext } from "react"; import { Context } from "../App"; import axios from "axios"; import { useNavigate } from "react-router-dom"; const Home = () => { const [email, setEmail] = useContext(Context); const navigate = useNavigate(); const handleLogout = () => { axios.post("http://localhost:3001/users/logout").then((response) => { console.log(response); }); navigate("/"); }; return ( <div> <button className="fixed top-5 left-10 p-2 border-[2px] border-gray-800 rounded-lg" onClick={() => { handleLogout(); }}> Logout </button> <h1>Welcome {email}</h1> </div> ); }; export default Home;`,
    img: "/react-helper/images/blank.png",
  },
  {
    title: "Login.jsx",
    category: "Frontend Users",
    description: "",
    code: `import React, { useContext, useEffect, useState } from "react"; import { useNavigate } from "react-router-dom"; import { ToastContainer, toast } from "react-toastify"; import { Context } from "../App"; import axios from "axios"; const Login = () => { axios.defaults.withCredentials = true; const [email, setEmail] = useContext(Context); const [password, setPassword] = useState("1234"); let isAdmin = false; const navigate = useNavigate(); const handleSubmit = (e) => { e.preventDefault(); const data = { email: email, password: password, }; axios .post("http://localhost:3001/users/login", data) .then((response) => { toast.success("Login Successful"); isAdmin = response.data.isAdmin; setEmail(""); setPassword(""); setTimeout(() => { if (isAdmin) { navigate("/users"); } else { navigate("/home"); } }, 1000); }) .catch((error) => { toast.error(Object.values(error.response.data).flat().join(", ")); }); }; useEffect(() => { axios.get("http://localhost:3001/users/login").then((response) => { if (response.data.loggedIn && response.data.user) { if (response.data.user.isAdmin) { navigate("/users"); } else { navigate("/home"); } } }); }, []); return ( <form onSubmit={handleSubmit}> <div className="flex flex-col justify-center items-center mt-2"> <h1>Login Page</h1> <input className="border-2 m-2 border-cyan-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); }} /> <input className="border-2 m-2 border-cyan-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" type="text" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); }} /> <button className="border-2 border-gray-800 rounded-full w-[100px]" type="submit"> Login </button> <a href="/register" className="text-blue-600"> Register </a> </div> <ToastContainer /> </form> ); }; export default Login;`,
    img: "/react-helper/images/blank.png",
  },
  {
    title: "Register.jsx",
    category: "Frontend Users",
    description: "",
    code: `import React, { useState } from "react"; import axios from "axios"; import { ToastContainer, toast } from "react-toastify"; import { useNavigate } from "react-router"; const Register = () => { const navigate = useNavigate(); const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [error, setError] = useState(""); const handleSubmit = (e) => { e.preventDefault(); const data = { email: email, password: password, isAdmin: false, }; axios .post("http://localhost:3001/users", data) .then(() => { toast.success("User Created successfully"); setEmail(""); setPassword(""); setTimeout(() => { navigate("/"); }, 1000); }) .catch((error) => { toast.error(Object.values(error.response.data).flat().join(", ")); }); }; return ( <form onSubmit={handleSubmit}> <div className="flex flex-col justify-center items-center mt-2"> <h1>Register Page</h1> <input className="border-2 m-2 border-cyan-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" value={email} onChange={(e) => { setEmail(e.target.value); }} type="email" placeholder="Email" /> <input className="border-2 m-2 border-cyan-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600" value={password} onChange={(e) => { setPassword(e.target.value); }} type="password" placeholder="Password" /> <button className="border-2 border-gray-800 rounded-full w-[100px]" type="submit"> Submit </button> <a href="/" className="text-blue-600"> Login </a> </div> <ToastContainer /> </form> ); }; export default Register;`,
    img: "/react-helper/images/blank.png",
  },
  {
    title: "Users.jsx",
    category: "Frontend Users",
    description: "",
    code: `import React, { useState, useEffect } from "react"; import axios from "axios"; import { useNavigate } from "react-router-dom"; const Users = () => { const navigate = useNavigate(); const [data, setData] = useState([]); const [username, setUsername] = useState(""); const handleLogout = () => { axios.post("http://localhost:3001/users/logout").then((response) => { console.log(response); }); navigate("/"); }; useEffect(() => { axios.get("http://localhost:3001/users/login").then((response) => { if (response.data.loggedIn && response.data.user) { setUsername(response.data.user.email); } else { setUsername(""); navigate("/"); } }); axios .get("http://localhost:3001/users") .then((response) => { setData(response.data); }) .catch((error) => { setError(error.message); }); }, []); return ( <div className="flex flex-col justify-center items-center w-[100vw]"> <button className="fixed top-5 left-10 p-2 border-[2px] border-gray-800 rounded-lg" onClick={() => { handleLogout(); }}> Logout </button> <h1>Hello {username}</h1> {data.map((user, index) => { return ( <div key={index} className="flex-col text-center w-[50%] h-[100%]"> <div className="bg-blue-500 content-center rounded-full h-[50px] m-3"> <h4>Email: {user.email}</h4> </div> <div className="bg-gray-400 content-center rounded-full h-[50px] m-3"> <h4>Password: {user.password}</h4> </div> </div> ); })} </div> ); }; export default Users;`,
    img: "/react-helper/images/blank.png",
  },
  {
    title: "App.jsx",
    category: "Frontend Users",
    description: "",
    code: `import React, { createContext, useState } from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // pages import Users from "./pages/Users"; import Login from "./pages/Login"; import Register from "./pages/Register"; import Home from "./pages/Home"; export const Context = createContext(); const App = () => { const [email, setEmail] = useState("mohamed@gmail.com"); return ( <Context.Provider value={[email, setEmail]}> <Router> <Routes> <Route path="/" exact element={<Login />} /> <Route path="/register" exact element={<Register />} /> <Route path="/users" exact element={<Users />} /> <Route path="/home" exact element={<Home />} /> </Routes> </Router> </Context.Provider> ); }; export default App;`,
    img: "/react-helper/images/blank.png",
  },
];

data.forEach((item, index) => {
  item.id = index;
});

export default data;

/* 
        {
          title: ,
          category: ,
          description: ,
          code: null,
          img: null,
        },                         
*/
