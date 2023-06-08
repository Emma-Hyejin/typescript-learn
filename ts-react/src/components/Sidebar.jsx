import {Link} from 'react-router-dom';
import Darkmode from '../darkmode/Darkmode';
import Home from '../Home';
import '../App.css';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Link className="sidebar-link" to='/' element={<Home/>}>Home</Link>
            <Link className="sidebar-link" to='/darkmode' element={<Darkmode/>}>Dark Mode</Link>
        </div>
    )
}

export default Sidebar;