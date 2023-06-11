//useState | useEffect | Recoil로 가능하나 customhook 시도
// 현재 테마 와 테마를 변경하고 localStorage에 저장해주는 함수르 를 반환하여
// 바로 사용할 수 있게 기능 구현 
import {useState, useEffect} from 'react';

export const useDarkMode = (): [string, () => void] => {
    // const localTheme = window.localStorage.getItem('theme');
    // const initialState = localTheme ? localTheme : 'light';
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if(theme === 'light') {
            window.localStorage.setItem('theme', 'light');
            setTheme('dark');
        } else {
            window.localStorage.setItem('theme', 'light');
            setTheme('light');
        }
        //테마 변경 후 유지를 위해 로컬 스토리지에 저장 
        //window.localStorage로 로컬 스토리지 접근 가능
    };

    //useEffect를 사용하여 이전에 저장된 테마 값을 읽고 그 값을 setTheme함수를 통해 컴포넌트의 상태 기본으로 설정
    // 초기 렌더링 시 테마가 올바르게 설정되도록 합니다. 
    //getItem은 windlow.localStorage객체의 메서드 중 하나 
    // : 로컬 스토리지에 접근하고 데이터를 저장 및 검색할 수 있는 기능을 제공 ( 특정 키에 해당하는 값을 가져옴)
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, [])

    return [theme, toggleTheme];
};

