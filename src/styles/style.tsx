import styled, { css } from "styled-components"

// Color
export const hsl = (color: string, lightness: number) => {
  let hs: string

  switch (color) {
    case "neutral":
      hs = "216, 8%"
      break
    case "navy":
      hs = "220, 16%"
      break
    case "blue":
      hs = "224, 64%"
      break
    default:
      hs = "216, 8%"
      break
  }
  return `hsl(${hs}, ${lightness}%)`
}

// Typography
export const fontSet = {
  sans: `'Inter', sans-serif`,
  heading: `'raf', 'Inter', sans-serif`,
  serif: `serif`,
}

export const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  xl2: "1.5rem",
  xl3: "2rem",
  xl4: "2.5rem",
  xl5: "3rem",
  xl6: "3.25rem",
}

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
}

export const textLineHeight = {
  tight: 1.25,
  normal: 1.5,
  loose: 1.65,
}

export const textLetterSpacing = {
  tighter: "-0.04em",
  tight: "-0.025em",
  normal: 0,
  loose: "0.025em",
}

// Custom styles
export const LinkStyle = css`
  display: block;
  padding: 4px 8px;
  margin-left: -8px;
  margin-right: -8px;
  border-radius: 6px;
  background-color: transparent;
  transition: all 0.16s linear 0s;

  &:hover {
    color: ${({ theme }) => theme.text.neutral.l1};
    background-color: ${({ theme }) => theme.background.l3};
  }
`

// Responsiveness
export const deviceSize = {
  tiny: `(max-width: 340px)`,
  mobile: `(max-width: 480px)`,
  phablet: `(max-width: 640px)`,
  tablet: `(max-width: 850px)`,
  landscape: `(max-width: 1080px)`,
  laptop: `(max-width: 1140px)`,
}
