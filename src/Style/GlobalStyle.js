import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Telex&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Geologica:wght@100;200;300;400;500;600;700;800;900&family=Telex&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: white;
    margin: 0;
    scroll-margin-top: 0;
    font-family: Telex;
  }
`;

export default GlobalStyle;