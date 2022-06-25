import { Global, css } from '@emotion/react'

const styles = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: grid;
    place-items: center;
    min-height: 100vh;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  textarea,
  select {
    border: none;

    &:focus-visible {
      outline: none;
    }
  }
`

export const GlobalStyle = () => <Global styles={styles} />
