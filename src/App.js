import logo from './logo.svg';
import './App.css';
import MyForm from "./componants/MyForm.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from "./componants/MyNavBar.js";


function App() {
  return (
    <div className="App">
     <MyNavBar />

      <MyForm />

        
    </div>
  );
}

export default App;
