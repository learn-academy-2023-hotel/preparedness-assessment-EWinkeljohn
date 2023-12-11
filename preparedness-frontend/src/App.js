import React, {useState} from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [userInput, setUserInput] = useState("")
  const handleChange = (e) => {
    // .target.value to extract user input
    setUserInput(e.target.value)
  }
  const reset = (e) => {
    setUserInput("")
  }
    // State variable for modal being open or close. Beginning state false (closed)
    const [modal, setModal] = useState(false)
    // Toggle funciton updates modal state to opposite of starting value when invoked
    const toggle = (props) => setModal(!modal)
  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input type="text" value={userInput} onChange={handleChange} />
        </div>
        <Button onClick={toggle}>Click Me</Button>
        <Button onClick={reset}>Reset</Button>
        <ModalComponent isOpen={modal} name={userInput} toggle={toggle}/>
      </div>
    </div>
  )
}

export default App
