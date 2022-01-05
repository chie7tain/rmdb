import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family:"Abel", sans-serif;
  }
  :root{
    --maxWidth:1280px;
    --white: #fff;
    --lightGrey:#eee;
    --medGrey:#353535;
    --darkGrey:#1c1c1c;
    --fontSuperBig:2.5rem;
    --fontBig:1.5rem;
    --fontMed:1.2rem;
    --fontSmall:1rem;
  }
  body{
    margin: 0;
    padding: 0;
  }
//styles for h1
  h1{
    font-size: 2rem;
    font-weight:600;
    color:var(--white);
  }
//styles for h3
  h3{
    font-size:1.1rem;
    font-weight:600
  }
  //styles for p tag
  p{
    font-size:1rem;
    color:var(--white);
  }
  `;
