const defaultTheme = {
  // Temp fonts
  fonts: {
    main: "Source Sans pro, sans-serif",
    title: "Source Sans Pro, sans-serif",
  },
  // Breakpoints for responsive design
  breakpoints: {
    vsm: 'screen and (min-width: 440px)',
    smlr: 'screen and (min-width: 530px)',
    sm: 'screen and (min-width: 640px)',
    md: 'screen and (min-width: 768px)',
    lg: 'screen and (min-width: 1024px)'
  },
}

const light = {
  colors: {
    primary1: "#1e1e1e", // dark grey
    background1: "#ffffff", // white
    accent1: "#d7f6f6", // light tourquoise
    accent2: "#ff0000", // red
    accent3: "#c6c6c6", // light grey
    social1: "grey"
  }
}

const dark = {
  colors: {
    primary1: "#ffffff",
    background1: "#242526",
    accent1: "#006769", // darker tourquoise
    accent2: "#ff0000", // red
    accent3: "#626262", // light grey
    social1: "white",
  }
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
