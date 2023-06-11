import styled from 'styled-components';

interface ThemeToggle {
    themeMode: string;
    toggleTheme: () => void;
}

interface ThemeWrapper {
    themeMode:string;
}


const Wrapper = styled.button<ThemeWrapper>`
    background: ${({ theme }) => theme.mode.mainBackground};
    border: 1px solid ${({ theme }) => theme.mode.border};
    box-shadow: 0 1px 3px ${({ theme }) => theme.mode.divider};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    position: fixed;
    z-index: 1;
    width: 4rem;
    height: 2rem;
    bottom: 2rem;
    right: 1rem;
    span:nth-child{
        background-color: ${({theme}) => theme.mode.slider};
        color: ${({theme}) => theme.mode.textColor};
        border-radius:50%;
        transform: ${({themeMode}) => 
            themeMode === "dark" ? "translateY(0)" : "translateY(2rem)"};
        transition: background 0.25s ease 2s; 
    }
    span:nth-child(2){
        background-color: ${({theme}) => theme.mode.slider};
        color: ${({theme}) => theme.mode.textColor};
        transform: ${({themeMode}) => 
            themeMode === "light" ? "translateY(0)" : "translateyY(-2rem"};
        transition: background 0.25s ease 2s;
        }

`;

const Toggle = ({themeMode, toggleTheme}: ThemeToggle) => {


    return (
            <Wrapper onClick={toggleTheme} themeMode={themeMode}>
                {themeMode === 'light' ? (<span>빔</span>) : (<span>낮</span>)}
            </Wrapper>
    )
}

export default Toggle;