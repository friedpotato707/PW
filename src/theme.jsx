import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6C6A6A",
    },
    headerBackground: {
      color1: "rgb(255, 253, 150)",
      // color2: "rgb(168, 150, 255)",
      color3: "rgba(252, 180, 47, 1)",
      highlightColor: "rgba(252, 252, 252, 0.8)",
    },
    button: {
      header: "rgba(21, 22, 24, 1)",
    },
    image: {
      background: "rgba(0, 0, 0, 0.05)",
    },
    text: {
      headerButton: "rgba(234, 234, 234, 0.78)",
      title: "rgba(21, 22, 24, 0.88)",
      bio: "rgba(234, 234, 234, 0.78)",
      sectionTitle: "rgba(234, 234, 234, 0.78)",
      main: "rgba(234, 234, 234, 0.78)",
    },
    card: {
      main: "rgba(255, 255, 255, 0.26)",
    },
    sectionOption1: {
      paper: "rgba(0, 0, 0, 0.81)",
    },
    sectionOption2: {
      paper: "rgba(56, 56, 56, 0.8)",
    },
  },
  typography: {
    fontFamily: "Cardo",
    fontStyle: "normal",
    button: {
      textTransform: "none",
    },
  },
  imageSize: {
    size: "5x",
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
      },
      textTransform: "none",
    },
  },
});

theme.typography.h1 = {
  fontSize: "1.3rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.6rem",
  },
  // [theme.breakpoints.up("l")]: {
  //   fontSize: "1.875rem",
  // },
  // [theme.breakpoints.up("xl")]: {
  //   fontSize: "2.15rem",
  // },
};

theme.typography.h2 = {
  fontSize: "1.4rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
  // [theme.breakpoints.up("l")]: {
  //   fontSize: "1.675rem",
  // },
  // [theme.breakpoints.up("xl")]: {
  //   fontSize: "1.95rem",
  // },
};

theme.typography.h3 = {
  fontSize: "1rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.175rem",
  },
  // [theme.breakpoints.up("l")]: {
  //   fontSize: "1.175rem",
  // },
  // [theme.breakpoints.up("xl")]: {
  //   fontSize: "1.35rem",
  // },
};

theme.typography.h4 = {
  fontSize: "0.8rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "0.975rem",
  },
  // [theme.breakpoints.up("l")]: {
  //   fontSize: "0.975rem",
  // },
  // [theme.breakpoints.up("xl")]: {
  //   fontSize: "1.15rem",
  // },
};

theme.typography.h5 = {
  fontSize: "0.6rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "0.775rem",
  },
  // [theme.breakpoints.up("l")]: {
  //   fontSize: "0.775rem",
  // },
  // [theme.breakpoints.up("xl")]: {
  //   fontSize: "0.95rem",
  // },
};

theme.typography.h6 = {
  fontSize: "0.6rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "0.775rem",
  },
  // [theme.breakpoints.up("l")]: {
  //   fontSize: "0.775rem",
  // },
  // [theme.breakpoints.up("xl")]: {
  //   fontSize: "0.95rem",
  // },
};

theme.typography.body1 = {
  fontSize: "0.6rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "0.775rem",
  },
  // [theme.breakpoints.up("l")]: {
  //   fontSize: "0.775rem",
  // },
  // [theme.breakpoints.up("xl")]: {
  //   fontSize: "0.95rem",
  // },
};

theme.typography.body2 = {
  fontSize: "0.6rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "0.775rem",
  },
  // [theme.breakpoints.up("l")]: {
  //   fontSize: "0.775rem",
  // },
  // [theme.breakpoints.up("xl")]: {
  //   fontSize: "0.95rem",
  // },
};

theme.imageSize = { size: "5x" };

export default theme;
