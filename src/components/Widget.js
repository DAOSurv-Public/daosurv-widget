import axiosInstance from "../index"
import { useEffect, useState } from "react"
const Widget = (props) => {
  const [name, setName] = useState()
  useEffect(() => {
    test()
  }, [])

  const test = async () => {
    const res = await axiosInstance.get("people/1/")
    setName(res.data.name)
  }

  return (
    <div style={{ backgroundColor: "red", fontSize: 24 }}>
      Hello Widget. {props.symbol} {name}
    </div>
  )
}

export default Widget
