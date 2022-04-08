import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import axios from "axios"
// Find all widget divs

// Setup Axios once here
axios.defaults.headers = { Accept: "application/json" }
const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: " https://swapi.dev/api/",
})
export default axiosInstance

console.log("axios", axios)

setTimeout(() => {
  let widgetDiv = document.querySelectorAll(".daoalert-widget")
  console.log("widgetDiv", widgetDiv)
  console.log("React", React)

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
