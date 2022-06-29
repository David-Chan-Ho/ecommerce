import { createGlobalStyle } from "styled-components";
import { fonts } from "../theme/fonts";

export default createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  h1 {
    font-size: ${fonts.h1};
  }
  h2 {
    font-size: ${fonts.h2};
  }
  h3 {
    font-size: ${fonts.h3};
  }
  h4 {
    font-size: ${fonts.h4};
  }
  p { 
    font-size: ${fonts.body};
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
