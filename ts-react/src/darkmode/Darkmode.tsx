import {Article, Content, Circle,Title, Back} from './ModeChange';
// import './Darkmode.css';


import Toggle from '../components/Toggle';
import {useDarkMode} from '../hooks/useDarkMode';
import {ThemeProvider} from 'styled-components';
import {light, dark} from '../style/theme';


const Darkmode = () => {   

    //useDakrMode훅을 사용해서 상태값을 받아온다. 
    //아래 theme = themeMode가 light이면 전역에 light를  dark 면 전역에 dark를 전달
    const [themeMode, toggleTheme] = useDarkMode();
    const theme = themeMode === 'light' ? {mode: light} : {mode: dark};

    return(
        <div className="darkmode">
            <ThemeProvider theme={theme}>
                <Back>
                <Title >DarkMode</Title> 
                <Toggle themeMode={themeMode} toggleTheme={toggleTheme}/>
                <div className="darkmode-section">
                    <Article>
                        <Title>This is the DarkMode || LIGHT MODE</Title>
                        <Content>will it change?</Content>
                        <Circle></Circle>
                    </Article>
                </div>
                </Back>
            </ThemeProvider>
        </div>
    );
};

//ThemeProvider: -styled-components에서 제공하는 컴포넌트 테마 값을 전역으로 제공하기 위해 사용됩니다. 
//theme={theme}로 전달되는 테마 값은 전체에서 테마를 일괄되게 설정하고 스타일을 적용할 수 있습니다. 
//style.theme

export default Darkmode;