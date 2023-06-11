
import ReactDOM from 'react-dom/client';
import "../src/services/navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';


import Dashboard from './components/Dashboard';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
        <Dashboard />
 </BrowserRouter>
);


