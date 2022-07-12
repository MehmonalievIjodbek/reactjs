import logo from './logo.svg';
import './App.css';
import Head from "./components/head/head";
import Furniking from "./components/furniking/furniking";
import Navbar from './components/navbar/navbar'

function App() {
    return (
        <div className="App">
            <Head/>
            <Furniking/>
            <Navbar/>
        </div>
    );
}

export default App;
