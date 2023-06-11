// export const lightTheme = {
//     background1: "#eeee",
//     background2: "#999899",
//     color: "#222",
//     contentText: "#999899",
//     hover: "#eeee",
// }

// export const darkTheme : Theme  = {
//     background1: "#191825",
//     background2: "#eeee",
//     color: "#eee",
//     contentText: "#FFA3FD",
//     hover:"#865DFF",
// }

// export type Theme = typeof lightTheme;
// //typeof를 사용하면 지정한 객체(lightTheme)의 프로퍼티 타입들을 참조해 타입 선언 가능.

//2차 시도
const dark = {
    mainBackground:"#eee",
    sidebarBackground:"#999899",
    textColor: "#222",
    contentColor: "#bebcbc",
    hoverColor: "#FFA3FD",
    border: "#d1d5da",
    divider: "rgba(255, 255, 255, 0.6)",
    slider: "##FBE302",
};

const light ={
    mainBackground: "#191825",
    sidebarBackground:"#eee",
    textColor: "#eee",
    contentColor: "#FFA3FD",
    hoverColor: "#865DFF",
    border: "#d1d5da",
    divider: "rgba(106, 115, 125, 0.3)",
    slider:"#1fab89",
};



export {dark, light};