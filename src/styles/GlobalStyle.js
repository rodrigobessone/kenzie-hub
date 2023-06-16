import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";

export const GlobalStyle = createGlobalStyle`
   *{
      box-sizing:border-box;
      font-weight: 400;
      font-family: 'Inter', sans-serif;
      margin:0;
      list-style: none;
      padding:0;
      text-decoration:none;
  }

  body, html{
      height:100vh;
      background-color: ${Theme.colors.gray4};
  }
`;
