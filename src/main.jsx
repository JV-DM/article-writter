import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FaGithub } from "react-icons/fa";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="navbar bg-base-100 flex justify-between">
      <img src='/book.svg' className='invert w-8' ></img>
      <p>
        You can check the code for this peage on
        <a href='https://github.com/JV-DM' className='ml-2'><FaGithub></FaGithub></a>
      </p>
    </div>
    <App />
  </React.StrictMode>,
)
