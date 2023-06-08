import {useState} from 'react';
import './Darkmode.css';


const Darkmode = () => {   

    const [isDark, setDarked] = useState(false);

    const handleToggle = () => {
        setDarked(!isDark);
        console.log(isDark);
        /*true:라이트 , false:다크 */
    }
    return(
        <div className="darkmode">
            <h1 className="title">DarkMode</h1>
            <div className="darkmode-switch">
                <label className={`toggle ${isDark ? 'checked' : '' }`}>
                    <input type="checkbox" onChange={handleToggle}/>
                    <span className="slider"></span>
                </label>
            </div>
            <div className="darkmode-section">
                <div className="articles">
                    <ul>
                        <li className="article">
                            <div className="article-title">홀리 몰리</div>
                            <img src="/src/cat.jpg" alt="고양이 사진"/>
                            <div className="article-content">배가 고픕니다.</div>
                        </li>
                        <li className="article">
                            <div className="article-title">과카 몰리</div>
                            <img src="/src/cat.jpg" alt="고양이 사진"/>
                            <div className="article-content">돼지 조감귤</div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Darkmode;