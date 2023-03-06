import React from 'react';
import './App.css';
import InputComponent from './InputComponent';
import PropDrillin from './PropDrillin';
import TextInputWithFocusButton from './TextInputWithFocusButton';
import Context from "./Context"
const val ={
  name : "wiz",
  roll : 66
}
export const UserContext = React.createContext();
function App() {
  return (
    <div >
      {/* <InputComponent/>
      <TextInputWithFocusButton/> */}
      {/* <PropDrillin  msg="I passed through the Header and the Wrapper and I reached the Button component" /> */}
      <UserContext.Provider value = {val}>
        <Context/>
      </UserContext.Provider>

    </div>
  );
}

export default App;
