
import './App.css';
import Form from './components/Form';
import ReactSwitch from 'react-switch';
import { useContext } from 'react';
import { ThemeContext } from './context/UseContext';


function App() {
 const {theme,ToggleTheme}=useContext(ThemeContext);

  return (
    <div className="App" id={theme}>
      <Form/>
      <div className='switch'>
        <label>{theme==="light"?"Light Mode":"Dark Mode"}</label>
        <ReactSwitch onChange={ToggleTheme} checked={theme==="dark"}></ReactSwitch>
        {/* we can add button for toggle as well ,but switch looks better */}
        {/* <button onClick={ToggleTheme}>Change Theme</button> */}
      </div>
    </div>
  );
}

export default App;


// const data=[{name:"raaz",img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/3/j/v/xxl-st10-vebnor-original-imagnvrqgv7e5crg.jpeg?q=70",name:"riya",img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/u/j/t/l-ttsh001418-tokyo-talkies-original-imagqahprrganfpe.jpeg?q=70",img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/6/l/u/l-pw430-purshottam-wala-original-imagqjhgh9xkb3c4.jpeg?q=70",img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/u/a/m-201-tf-wh-blue-ronin-original-imagff494he58xu6-bb.jpeg?q=70"}]