import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import { setBackgroundColor } from "../redux/actions";
import {
  getBackgroundColorIndex,
  getPageSectionFlags,
} from "../redux/selectors";
import React, { useState, useEffect } from "react";
import { backgroundColors } from "../redux/types";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Fragment } from "react";
import { getVh } from "../utils/Utils";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

const HEADER_BOTTOM_MARGIN = window.innerHeight * 0.1;

const useStyles = (backgroundColorIndex) =>
  makeStyles(function (theme) {
    return {
      navigation: {
        backgroundColor: backgroundColors[backgroundColorIndex],
        border: "none",
        boxShadow: "none",
      },
      toggleDrawer: {
        position: "fixed",
        [theme.breakpoints.up("xs")]: {
          display: "none",
        },
        [theme.breakpoints.down("xs")]: {
          display: "inline",
        },
      },
      title: {
        flexGrow: 1,
        color: theme.palette.text.title,
        fontFamily: "Cardo",
        fontStyle: "normal",
        paddingLeft: "60px",
        paddingRight: "60px",
      },
      actionArea: {
        height: "100%",
      },
      cardWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        [theme.breakpoints.up("xs")]: {
          height: "50px",
        },
        [theme.breakpoints.down("xs")]: {
          height: "50px",
        },
      },
      headerOptions: {
        width: "100%",
        [theme.breakpoints.up("xs")]: {
          height: "50px",
          display: "flex",
        },
        [theme.breakpoints.down("xs")]: {
          display: "inline",
          height: window.innerHeight - (HEADER_BOTTOM_MARGIN * 5) / 6 / 2,
          minHeight: "200px",
        },
      },
      headerButton: {
        backgroundColor: theme.palette.button.header,
        color: theme.palette.text.headerButton,
        overflow: "hidden",
        textOverflow: "ellipsis",
        textTransform: "none",

        fontFamily: "Cardo",
        fontStyle: "normal",

        width: "100%",

        [theme.breakpoints.up("xs")]: {
          height: "50px",
        },
        [theme.breakpoints.down("xs")]: {
          height: "20%",
        },
      },
      card: {
        backgroundColor: theme.palette.card.main,
        height: "100%",
      },

      root: {
        flexGrow: 2,
        fontFamily: "Cardo",
        fontStyle: "normal",
      },
    };
  });

const mapStateToProps = (state) => {
  return {
    backgroundColorIndex: getBackgroundColorIndex(state),
    pageSectionFlags: getPageSectionFlags(state),
  };
};

const mapDispatchToProps = {
  setBackgroundColor: setBackgroundColor,
};

const Header = (props) => {
  const classes = useStyles(props.backgroundColorIndex)();

  const handleColorUpdate = function () {
    props.setBackgroundColor(props.backgroundColorIndex + 1);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [drawerVisible, setDrawerVisible] = useState(true);
  const [isSmallScreenWidth, setIsSmallScreenWidth] = useState(false);
  let [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const handleHeaderButtonClick = function (link) {
    window.location.href = link;
    setVisible(false);
    if (isSmallScreenWidth) {
      setDrawerVisible(false);
    }
  };

  const toggleDrawer = function () {
    setDrawerVisible(!drawerVisible);
  };

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setDrawerVisible(false);
    } else {
      setDrawerVisible(true);
    }
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      prevScrollPos > currentScrollPos || currentScrollPos < getVh(25)
    );

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    handleResize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    if (window.innerWidth < 800) {
      setIsSmallScreenWidth(true);
    } else {
      setIsSmallScreenWidth(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos, visible, handleScroll, screenWidth, screenHeight]);

  return (
    <Fragment>
      {visible && (
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.navigation}>
            <Toolbar>
              <IconButton
                aria-label="Menu"
                className={classes.toggleDrawer}
                onClick={() => toggleDrawer()}
              >
                <MenuIcon />
              </IconButton>

              <div className={classes.cardWrapper}>
                <Card className={classes.card} onClick={handleColorUpdate}>
                  <CardActionArea className={classes.actionArea}>
                    <Typography variant="h3" className={classes.title}>
                      {props.title}
                    </Typography>
                  </CardActionArea>
                </Card>
              </div>
            </Toolbar>

            {drawerVisible && (
              <div className={classes.headerOptions}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => handleHeaderButtonClick("#about")}
                  className={classes.headerButton}
                >
                  <Typography noWrap variant="h4">
                    About
                  </Typography>
                </Button>

                {/* <Button
                  color="primary"
                  variant="contained"
                  onClick={() => handleHeaderButtonClick("#experience")}
                  className={classes.headerButton}
                >
                  <Typography noWrap variant="h4">
                    Experience
                  </Typography>
                </Button> */}

                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => handleHeaderButtonClick("#education")}
                  className={classes.headerButton}
                >
                  <Typography noWrap variant="h4">
                    Education
                  </Typography>
                </Button>

                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => handleHeaderButtonClick("#courses")}
                  className={classes.headerButton}
                >
                  <Typography noWrap variant="h4">
                    Courses
                  </Typography>
                </Button>

                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => handleHeaderButtonClick("#projects")}
                  className={classes.headerButton}
                >
                  <Typography noWrap variant="h4">
                    Projects
                  </Typography>
                </Button>
              </div>
            )}
          </AppBar>
        </div>
      )}
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
