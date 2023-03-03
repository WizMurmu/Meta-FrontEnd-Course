import './App.css';
import InputComponent from './InputComponent';
import PropDrillin from './PropDrillin';
import TextInputWithFocusButton from './TextInputWithFocusButton';

function App() {
  return (
    <div >
      {/* <InputComponent/>
      <TextInputWithFocusButton/> */}
      <PropDrillin  msg="I passed through the Header and the Wrapper and I reached the Button component" />
    </div>
  );
}

export default App;
