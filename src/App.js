import './App.css';
import { useState } from 'react';
import Button from './Button';

function App() {

  const [color, setColor] = useState('white');

  return (
    <div className={`App`} style = {{backgroundColor : color}}>
      <div className="container">
      <h1>Hello World</h1>
      <Button color = "red" setColor = {setColor} />
      <Button color = "blue"  setColor = {setColor}/>
      <Button color = "yellow" setColor = {setColor}/> 
      <Button color = "purple" setColor = {setColor}/> 
    </div>
    </div>
  );
}

export default App;
