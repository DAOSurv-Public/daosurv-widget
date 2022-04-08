import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import axios from "axios"

// Setup Axios once here
axios.defaults.headers = { Accept: "application/json" }
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})
export default axiosInstance

setTimeout(() => {
  let widgetDiv = document.querySelectorAll(".daoalert-widget")

  // Inject our React App into each class
  widgetDiv.forEach((div) => {
    ReactDOM.render(
      <React.StrictMode>
        <App symbol={div.dataset.symbol} />
      </React.StrictMode>,
      div
    )
  })
}, 5000)
