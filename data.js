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
    description: "insert the type:module in package.json file",
    code: "npm init -y && npm i bcryptjs body-parser concurrently cookie-parser dotenv express jsonwebtoken mongoose multer nodemon",
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
    title: "Backend Folders",
    category: "Backend setup",
    description: "Create this file and folders",
    code: null,
    img: "/react-helper/images/Backend setup/backend folders.png",
  },
  {
    title: "config db",
    category: "Backend setup",
    description: "",
    code: 'import mongoose from "mongoose";\n\nconst connectDB = async () => {\n  try {\n    await mongoose.connect(process.env.MONGO_URI);\n    console.log("Successfully connected to DB");\n  } catch (error) {\n    console.log(`Error: ${error}`);\n    process.exit(1);\n  }\n};\n\nexport default connectDB;',
    img: [
      "/react-helper/images/Backend setup/config db 2.png",
      "/react-helper/images/Backend setup/config db 1.png",
    ],
  },
  {
    title: "Backend index",
    category: "Users Management",
    description: "",
    code: '// Packages\nimport express from "express";\nimport cookieParser from "cookie-parser";\nimport dotenv from "dotenv";\nimport path from "path";\n\n// Files\nimport connectDB from "./config/db.js";\nimport userRoutes from "./routes/userRoutes.js";\n\n// Configuration\ndotenv.config();\nconnectDB();\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\n// Middlewares\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\napp.use(cookieParser());\n\n// Routes\napp.use("/api/v1/users", userRoutes);\n\napp.listen(PORT, () => {\n  console.log("Server is running on PORT 3000");\n});',
    img: [
      "/react-helper/images/Users management/Backend index 1.png",
      "/react-helper/images/Users management/Backend index 2.png",
    ],
  },
  {
    title: "Users Schema",
    category: "Users Management",
    description: "",
    code: 'import mongoose from "mongoose";\n\nconst userSchema = mongoose.Schema(\n  {\n    username: {\n      type: String,\n      required: true,\n    },\n    email: {\n      type: String,\n      required: true,\n      unique: true,\n    },\n    password: {\n      type: String,\n      required: true,\n    },\n    isAdmin: {\n      type: Boolean,\n      required: true,\n      default: false,\n    },\n  },\n  { timestamps: true }\n);\nconst User = mongoose.model("User", userSchema);\nexport default User;',
    img: [
      "/react-helper/images/Users management/Users Schema 1.png",
      "/react-helper/images/Users management/Users Schema 2.png",
    ],
  },
  {
    title: "User Route",
    category: "Users Management",
    description: "",
    code: 'import express from "express";\n\n// controllers\nimport {\n  createUser,\n  loginUser,\n  logoutCurrentUser,\n  getAllUsers,\n  getCurrentUserProfile,\n  updateCurrentUserProfile,\n} from "../controllers/userController.js";\n// middlewares\nimport { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";\n\nconst router = express.Router();\n\nrouter\n  .route("/")\n  .post(createUser)\n  .get(authenticate, authorizeAdmin, getAllUsers);\nrouter.post("/auth", loginUser);\nrouter.post("/logout", logoutCurrentUser);\nrouter\n  .route("/profile")\n  .get(authenticate, getCurrentUserProfile)\n  .put(authenticate, updateCurrentUserProfile);\nexport default router;',
    img: [
      "/react-helper/images/Users management/User Route 1.png",
      "/react-helper/images/Users management/User Route 2.png",
    ],
  },
  {
    title: "async Handler (nd)",
    category: "Users Management",
    description: "",
    code: "const asyncHandler = (fn) => (req, res, next) => {\n  Promise.resolve(fn(req, res, next)).catch((error) => {\n    res.status(500).json({ message: error.message });\n  });\n};\nexport default asyncHandler;",
    img: [
      "/react-helper/images/Users management/async Handler 1.png",
      "/react-helper/images/Users management/async Handler 2.png",
    ],
  },
  {
    title: "auth Middleware",
    category: "Users Management",
    description: "",
    code: 'import jwt from "jsonwebtoken";\nimport User from "../models/User.js";\nimport asyncHandler from "./asyncHandler.js";\n\nconst authenticate = asyncHandler(async (req, res, next) => {\n  let token;\n  token = req.cookies.jwt;\n  if (token) {\n    try {\n      const decoded = jwt.verify(token, process.env.JWT_SECRET);\n      req.user = await User.findById(decoded.userId).select("-password");\n      next();\n    } catch (error) {\n      res.status(401);\n      throw new Error("Not authorized. Token failed");\n    }\n  } else {\n    res.status(401);\n    throw new Error("not Authorized, no Token");\n  }\n});\n\nconst authorizeAdmin = (req, res, next) => {\n  if (req.user && req.user.isAdmin) {\n    next();\n  } else {\n    res.status(401).send("Not authorized as an admin");\n  }\n};\nexport { authenticate, authorizeAdmin };',
    img: [
      "/react-helper/images/Users management/auth Middleware.png",
      "/react-helper/images/Users management/async Handler 2.png",
    ],
  },
  {
    title: "Create Token",
    category: "Users Management",
    description: "",
    code: 'import jwt from "jsonwebtoken";\n\nconst generateToken = (res, userId) => {\n  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {\n    expiresIn: "30d",\n  });\n\n  res.cookie("jwt", token, {\n    httpOnly: true,\n    secure: process.env.NODE_ENV !== "development",\n    sameSite: "strict",\n    maxAge: 30 * 24 * 60 * 60 * 1000,\n  });\n  return token;\n};\nexport default generateToken;',
    img: [
      "/react-helper/images/Users management/Create Token 1.png",
      "/react-helper/images/Users management/Create Token 2.png",
    ],
  },
  {
    title: "User Controller",
    category: "Users Management",
    description: "",
    code: 'import User from "../models/User.js";\nimport bcrypt from "bcryptjs";\nimport asyncHandler from "../middlewares/asyncHandler.js";\nimport createToken from "../utils/createToken.js";\n\nconst createUser = asyncHandler(async (req, res) => {\n  const { username, email, password } = req.body;\n  if (!username || !email || !password) {\n    throw new Error("Please fill all the fields");\n  }\n  const userExists = await User.findOne({ email });\n  if (userExists) {\n    res.status(400).send("User already exists");\n    return;\n  }\n\n  const salt = await bcrypt.genSalt(10);\n  const hashedPassword = await bcrypt.hash(password, salt);\n  const newUser = new User({ username, email, password: hashedPassword });\n  try {\n    await newUser.save();\n    createToken(res, newUser._id);\n    res.status(201).json({\n      _id: newUser._id,\n      username: newUser.username,\n      email: newUser.email,\n      isAdmin: newUser.isAdmin,\n    });\n  } catch (error) {\n    res.status(400);\n    throw new Error("Invalid user data");\n  }\n});\n\nconst loginUser = asyncHandler(async (req, res) => {\n  const { email, password } = req.body;\n  const existingUser = await User.findOne({ email });\n  if (existingUser) {\n    const isPasswordValid = await bcrypt.compare(\n      password,\n      existingUser.password\n    );\n    if (isPasswordValid) {\n      createToken(res, existingUser._id);\n      res.status(200).json({\n        _id: existingUser._id,\n        username: existingUser.username,\n        email: existingUser.email,\n        isAdmin: existingUser.isAdmin,\n      });\n    } else {\n      res.status(401).json({ message: "Invalid Password" });\n    }\n  } else {\n    res.status(401).json({ message: "User not found" });\n  }\n});\n\nconst logoutCurrentUser = asyncHandler(async (req, res) => {\n  res.cookie("jwt", "", {\n    httpOnly: true,\n    expires: new Date(0),\n  });\n  res.status(200).json({ message: "Logged out successfully" });\n});\n\nconst getAllUsers = asyncHandler(async (req, res) => {\n  const users = await User.find({});\n  res.json(users);\n});\n\nconst getCurrentUserProfile = asyncHandler(async (req, res) => {\n  const user = await User.findById(req.user._id);\n  if (user) {\n    res.json({\n      _id: user._id,\n      username: user.username,\n      email: user.email,\n    });\n  } else {\n    res.status(404);\n    throw new Error("User not found");\n  }\n});\n\nconst updateCurrentUserProfile = asyncHandler(async (req, res) => {\n  const user = await User.findById(req.user._id);\n  if (user) {\n    user.username = req.body.username || user.username;\n    user.email = req.body.email || user.email;\n\n    if (req.body.password) {\n      const salt = await bcrypt.genSalt(10);\n      const hashedPassword = await bcrypt.hash(req.body.password, salt);\n      user.password = hashedPassword;\n    }\n    const updatedUser = await user.save();\n    res.json({\n      _id: updatedUser._id,\n      username: updatedUser.username,\n      email: updatedUser.email,\n      isAdmin: updatedUser.isAdmin,\n    });\n  } else {\n    res.status(404);\n    throw new Error("User not found");\n  }\n});\n\nexport {\n  createUser,\n  loginUser,\n  logoutCurrentUser,\n  getAllUsers,\n  getCurrentUserProfile,\n  updateCurrentUserProfile,\n};',
    img: [
      "/react-helper/images/Users management/User Controller 1.png",
      "/react-helper/images/Users management/User Controller 2.png",
      "/react-helper/images/Users management/User Controller 3.png",
      "/react-helper/images/Users management/User Controller 4.png",
    ],
  },
  {
    title: "vite config",
    category: "Redux Toolkit/rtk Query",
    description: "Config file in frontend directory",
    code: 'import { defineConfig } from "vite";\nimport react from "@vitejs/plugin-react";\n\n// https://vite.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n  server: {\n    proxy: {\n      "/api/": "http://localhost:3000",\n      "/uploads/": "http://localhost:3000",\n    },\n  },\n});',
    img: "/react-helper/images/Redux Toolkit and rtk Query/vite config.png",
  },
  {
    title: "Files and Folders",
    category: "Redux Toolkit/rtk Query",
    description: "Create these files and folders in the frontend folder",
    code: null,
    img: "/react-helper/images/Redux Toolkit and rtk Query/Files and Folders.png",
  },
  {
    title: "Store",
    category: "Redux Toolkit/rtk Query",
    description: "Add more slices depending on project",
    code: 'import { configureStore } from "@reduxjs/toolkit";\nimport { setupListeners } from "@reduxjs/toolkit/query/react";\nimport { apiSlice } from "./api/apiSlice";\nimport authReducer from "./features/auth/authSlice";\n\nconst store = configureStore({\n  reducer: {\n    [apiSlice.reducerPath]: apiSlice.reducer,\n    auth: authReducer,\n  },\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(apiSlice.middleware),\n  devTools: true,\n});\n\nsetupListeners(store.dispatch);\nexport default store;',
    img: [
      "/react-helper/images/Redux Toolkit and rtk Query/Store 1.png",
      "/react-helper/images/Redux Toolkit and rtk Query/Store 2.png",
    ],
  },
  {
    title: "main.jsx",
    category: "Redux Toolkit/rtk Query",
    description: "Directs user to those pages depending on routes",
    code: 'import { createRoot } from "react-dom/client";\nimport "./index.css";\nimport App from "./App.jsx";\nimport store from "./redux/store.js";\nimport { Provider } from "react-redux";\nimport { Route, RouterProvider, createRoutesFromElements } from "react-router";\nimport { createBrowserRouter } from "react-router-dom";\n\n// Auth\n\n// Restricted\nimport Home from "./pages/Home.jsx";\nimport Login from "./pages/Auth/Login.jsx";\n\nconst router = createBrowserRouter(\n  createRoutesFromElements(\n    <Route path="/" element={<App />}>\n      <Route index={true} path="/" element={<Home />} />\n      <Route index={true} path="/auth" element={<Login />} />\n    </Route>\n  )\n);\n\ncreateRoot(document.getElementById("root")).render(\n  <Provider store={store}>\n    <RouterProvider router={router} />\n  </Provider>\n);',
    img: "/react-helper/images/Redux Toolkit and rtk Query/main.jsx.png",
  },
  {
    title: "redux authSlice",
    category: "Redux Toolkit/rtk Query",
    description: "",
    code: 'import { createSlice } from "@reduxjs/toolkit";\n\nconst initialState = {\n  userInfo: localStorage.getItem("userInfo")\n    ? JSON.parse(localStorage.getItem("userInfo"))\n    : null,\n};\nconst authSlice = createSlice({\n  name: "auth",\n  initialState,\n  reducers: {\n    setCredentials: (state, action) => {\n      state.userInfo = action.payload;\n      localStorage.setItem("userInfo", JSON.stringify(action.payload));\n\n      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;\n      localStorage.setItem("expirationTime", expirationTime);\n    },\n\n    logout: (state) => {\n      state.userInfo = null;\n      localStorage.clear();\n    },\n  },\n});\nexport const { setCredentials, logout } = authSlice.actions;\nexport default authSlice.reducer;',
    img: [
      "/react-helper/images/Redux Toolkit and rtk Query/redux authSlice 1.png",
      "/react-helper/images/Redux Toolkit and rtk Query/redux authSlice 2.png",
    ],
  },
  {
    title: "redux constants",
    category: "Redux Toolkit/rtk Query",
    description: "",
    code: 'export const BASE_URL = "";\nexport const USERS_URL = "/api/v1/users";',
    img: [
      "/react-helper/images/Redux Toolkit and rtk Query/redux constants 1.png",
      "/react-helper/images/Redux Toolkit and rtk Query/redux constants 2.png",
    ],
  },
  {
    title: "apiSlice",
    category: "Redux Toolkit/rtk Query",
    description: "",
    code: 'import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";\nimport { BASE_URL } from "../constants";\n\nconst baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });\n\nexport const apiSlice = createApi({\n  baseQuery,\n  endpoints: () => ({}),\n});',
    img: [
      "/react-helper/images/Redux Toolkit and rtk Query/apiSlice 1.png",
      "/react-helper/images/Redux Toolkit and rtk Query/apiSlice 2.png",
    ],
  },
  {
    title: "api users",
    category: "Redux Toolkit/rtk Query",
    description: "",
    code: 'import { apiSlice } from "./apiSlice";\nimport { USERS_URL } from "../constants";\n\nexport const userApiSlice = apiSlice.injectEndpoints({\n  endpoints: (builder) => ({\n    login: builder.mutation({\n      query: (data) => ({\n        url: `${USERS_URL}/auth`,\n        method: "POST",\n        body: data,\n      }),\n    }),\n\n    register: builder.mutation({\n      query: (data) => ({\n        url: `${USERS_URL}`,\n        method: "POST",\n        body: data,\n      }),\n    }),\n\n    logout: builder.mutation({\n      query: () => ({\n        url: `${USERS_URL}/logout`,\n        method: "POST",\n      }),\n    }),\n\n    profile: builder.mutation({\n      query: (data) => ({\n        url: `${USERS_URL}/profile`,\n        method: "PUT",\n        body: data,\n      }),\n    }),\n\n    getUsers: builder.query({\n      query: () => ({\n        url: USERS_URL,\n      }),\n    }),\n  }),\n});\n\nexport const {\n  useLoginMutation,\n  useRegisterMutation,\n  useLogoutMutation,\n  useProfileMutation,\n  useGetUsersQuery,\n} = userApiSlice;',
    img: [
      "/react-helper/images/Redux Toolkit and rtk Query/api users 1.png",
      "/react-helper/images/Redux Toolkit and rtk Query/api users 2.png",
      "/react-helper/images/Redux Toolkit and rtk Query/api users 3.png",
    ],
  },
  {
    title: "pages Home",
    category: "Register User (frontend)",
    description: "",
    code: null,
    img: null,
  },
  {
    title: "pages auth Login",
    category: "Register User (frontend)",
    description: "",
    code: null,
    img: null,
  },
  {
    title: "App.jsx",
    category: "Register User (frontend)",
    description: "",
    code: null,
    img: null,
  },
  {
    title: "Navigation",
    category: "Register User (frontend)",
    description: "",
    code: null,
    img: null,
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
