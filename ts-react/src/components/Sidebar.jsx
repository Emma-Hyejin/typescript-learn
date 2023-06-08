import {Link} from 'react-router-dom';
import Darkmode from '../darkmode/Darkmode';
import '../App.css';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Link className="sidebar-link" to='/' element={<Darkmode/>}>Dark Mode</Link>
        </div>
    )
}

export default Sidebar;