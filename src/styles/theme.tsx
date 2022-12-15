import { DefaultTheme } from "styled-components"
import * as style from "src/styles/style"

export const lightTheme = {
  background: {
    l1: style.hsl("neutral", 100),
    l2: style.hsl("neutral", 98),
    l3: style.hsl("neutral", 96),
    l4: style.hsl("neutral", 92),
    l5: style.hsl("neutral", 80),
    l9: style.hsl("navy", 24),
  },
  text: {
    neutral: {
      l1: style.hsl("neutral", 0),
      l2: style.hsl("neutral", 32),
      l3: style.hsl("neutral", 48),
      l4: style.hsl("neutral", 64),
      l5: style.hsl("neutral", 72),
    },
    navy: {
      l1: style.hsl("navy", 16),
      l2: style.hsl("navy", 24),
      l3: style.hsl("navy", 32),
    },
  },
}

export const darkTheme = {
  background: {
    l1: style.hsl("neutral", 0),
    l2: style.hsl("neutral", 8),
    l3: style.hsl("neutral", 16),
    l4: style.hsl("neutral", 24),
    l5: style.hsl("neutral", 32),
    l9: style.hsl("neutral", 92),
  },
  text: {
    neutral: {
      l1: style.hsl("neutral", 100),
      l2: style.hsl("neutral", 64),
      l3: style.hsl("neutral", 48),
      l4: style.hsl("neutral", 32),
      l5: style.hsl("neutral", 24),
    },
    navy: {
      l1: style.hsl("navy", 80),
      l2: style.hsl("navy", 72),
      l3: style.hsl("navy", 64),
    },
  },
}
