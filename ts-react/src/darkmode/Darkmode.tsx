import './Darkmode.css';

const Darkmode = () => {
    return(
        <div className="darkmode">
            <h1>DarkMode</h1>
            <div className="darkmode-switch">
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    )
}

export default Darkmode;