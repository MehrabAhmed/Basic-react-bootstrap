import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/form';
import { TestButton } from './Compnents/Buttons/Index';


function App() {
  return (
    <div className="App">
      REACT APP DEMO
      <TestButton buttonname={"Login"}/>
      <TestButton buttonname={"Sign Up"}/>
      <BasicExample></BasicExample>
    </div>
  );
}

export default App;
