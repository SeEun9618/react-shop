//context 전
// import './App.css';
// import Header from "./components/Header";
// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from "./components/Carousel";
// import Products from "./components/Products";
// import styled, {ThemeProvider} from "styled-components";
// import {useState} from "react";
// import Button from './components/Button';
// import {dark, light} from "./components/Theme";
// import {BrowserRouter} from "react-router-dom";
//
// function App() {
//     const [themeMode, setThemeMode] = useState('light');
//     const theme = themeMode === 'light' ? light : dark;
//
//     const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');
//
//     // const theme = {
//     //     colors: {
//     //         bgColor: '#DF01A5',
//     //     }
//     // }
// console.log(themeMode)
//
//     return (
//         <ThemeProvider theme={theme}>
//             <S.Main>
//                 {/*<Button click={toggleTheme} />*/}
//                 <div className="App">
//                     <Header click={toggleTheme} props={themeMode}/>
//                     <Carousel />
//                     <Products />
//                 </div>
//             </S.Main>
//         </ThemeProvider>
//     );
// }
//
// export default App;
//
//
// const S = {};
//
// S.Main = styled.div`
//     background-color: ${props => props.theme.colors.bgColor};
// `


import './App.css';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import styled from "styled-components";
import UserInfoContext from './components/context'


function App() {
    return (
        <UserInfoContext >
            <S.Main>
                <Header/>
                <Carousel />
                <Products />
            </S.Main>
        </UserInfoContext>
    );
}

export default App;


const S = {};

S.Main = styled.div`
    background-color: ${props => props.theme.colors.bgColor};
  h1, span, svg{
    color: ${props => props.theme.colors.titleColor};
  }
  li {
    border: ${props => props.theme.colors.borderColor};
  }
  li > div {
    background: ${props => props.theme.colors.listBgColor};
  }
  li > div > p {
    background: ${props => props.theme.colors.listBgColor};
    color: ${props => props.theme.colors.titleColor};
  }
`