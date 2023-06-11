import styled from 'styled-components';

interface ThemeMode{
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    border?: string;
};

export const Article = styled.div<ThemeMode>`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.div<ThemeMode>`
  font-weight: bolder;
  font-size: 1.5rem;
  border-bottom: 1px solid gray;
  width: 100%;
  text-align:center;
  padding: 10px;
  color: ${({theme}) => (theme.mode.textColor) };
`;

export const Content = styled.div<ThemeMode>`
    width: 100%;
    text-align:center;
    padding: 5px;
    color: ${({theme}) => (theme.mode.contentColor)};
`;

export const Circle = styled.span<ThemeMode>`
    display: block;
    position: relative;
    left: 45%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor:pointer;
    background-color: ${({theme}) => theme.mode.sidebarBackground};
    &:hover {
        background-color: ${({theme}) => theme.mode.hoverColor};
    }
`;

export const Back = styled.div<ThemeMode>`
    background-color: ${({theme}) => theme.mode.mainBackground};
`;