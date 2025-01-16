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
    code: "npm init -y && npm i bcryptjs body-parser concurrently cookie-parser dotenv express jsonwebtoken mongoose multer nodemon mysql2 sequelize sequelize-cli",
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
