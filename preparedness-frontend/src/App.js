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
      <h1 className="title">Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
        </div>
        <div className="user-input">
          <Input type="text" value={userInput} onChange={handleChange} />
        </div>
        <div className="buttons">
        <Button className="click-me" onClick={toggle}>Click Me</Button>
        <Button className="reset" onClick={reset}>Reset</Button>
        <ModalComponent isOpen={modal} name={userInput} toggle={toggle}/>
        </div>
      </div>
    </div>
  )
}

export default App
