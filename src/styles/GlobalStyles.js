import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-reddit-orange: #FF4500;
    --color-reddit-blue: #0079D3;
    --color-gray-dark: #1A1A1B;
    --color-gray-light: #DAE0E6;
    --color-background: #F7FAFC;
    --color-white: #FFFFFF;
    --color-text: #1A1A1B;
    --color-border: #E2E8F0;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--color-background);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
      @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`;
