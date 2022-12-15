import type { AppProps } from "next/app"
import { useState, useEffect } from "react"
require("destyle.css")
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "src/styles/theme"
import * as style from "src/styles/style"

type ThemeType = typeof lightTheme

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-width: 320px;
    font-family: ${style.fontSet.sans};
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.background.l1};
  }

  @font-face {
    font-family: 'raf';
    src: url('/fonts/raf-bold.eot');
    src: url('/fonts/raf-bold.eot?#iefix') format('embedded-opentype'), url('/fonts/raf-bold.woff2') format('woff2'), url('/fonts/raf-bold.woff') format('woff');
    font-weight: 700;
    font-style: bold;
    font-display: block;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true)
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const colorScheme = e.matches ? true : false
        setDarkMode(colorScheme)
      })

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {})
    }
  }, [])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  )
}
export default MyApp
