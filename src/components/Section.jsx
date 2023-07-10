import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { setActivePageSectionFlag } from "../redux/actions";
import VizSensor from "react-visibility-sensor";
import { connect } from "react-redux";
import CardMedia from "@material-ui/core/CardMedia";
import { getBackgroundColorIndex } from "../redux/selectors";
import { backgroundColors } from "../redux/types";
import { isMobile } from "react-device-detect";

const HEADER_BOTTOM_MARGIN = window.innerHeight * 0.1;

const useStyles = (
  backgroundColorIndex,
  fullWidth,
  colorTitle,
  mainBackgroundColor,
  backgroundTransparency,
  forcedHeight,
  windowHeight,
  maxWidth,
  anchorOffset
) =>
  makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.sectionOption1.paper,
      width: "100%",
      backgroundColor: mainBackgroundColor
        ? mainBackgroundColor
        : backgroundColors[backgroundColorIndex],
      height:
        forcedHeight && window.innerWidth >= 800 && window.innerHeight >= 700
          ? Math.max(windowHeight - (HEADER_BOTTOM_MARGIN * 5) / 6, 800)
          : null,
    },
    credits: {
      width: "100%",
      textAlign: "center",
      color: theme.palette.text.bio,
    },
    blurFrame: {
      height: "100%",
    },
    blurFrameContents: {
      height: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    contentWrapper: {
      maxWidth: isMobile || fullWidth ? "100%" : maxWidth + "px",
    },

    gap: {
      backgroundColor: "rgba(56, 56, 56, " + 0.8 + ")",
      borderTop: "3px solid " + backgroundColors[backgroundColorIndex],
      borderBottom: "3px solid " + backgroundColors[backgroundColorIndex],
    },
    title: {
      color: colorTitle ? backgroundColors[backgroundColorIndex] : "white",
      textAlign: "center",
      paddingBottom: "10px",
    },
    dots: {
      color: "white",
    },
    card: {
      minHeight: "10vh",
      display: "flex",
      alignItems: "center",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    anchor: {
      display: "block",
      position: "relative",
      top: anchorOffset,
      visibility: "hidden",
    },
  }));

const mapDispatchToProps = {
  setActivePageSectionFlag: setActivePageSectionFlag,
};

const mapStateToProps = (state) => {
  return {
    backgroundColorIndex: getBackgroundColorIndex(state),
  };
};

const Section = (props) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const classes = useStyles(
    props.backgroundColorIndex,
    props.fullWidth,
    props.colorTitle,
    props.backgroundColor,
    props.backgroundTransparency,
    props.forcedHeight,
    windowHeight,
    props.maxWidth,
    props.anchorOffset
  )();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    });
  }, [windowHeight, windowWidth]);

  return (
    <VizSensor
      partialVisibility={true}
      offset={0}
      onChange={(isVisible) => {
        props.setActivePageSectionFlag(props.index, isVisible);
      }}
    >
      <div>
        <CardMedia className={classes.root} image={props.backgroundImage}>
          <div
            className={classes.blurFrame}
            style={{
              backgroundColor:
                "rgba(56, 56, 56, " + props.backgroundTransparency + ")",
            }}
          >
            <div className={classes.blurFrameContents}>
              <div className={classes.contentWrapper}>
                {props.title && (
                  <a className={classes.anchor} id={props.sectionLink}>
                    <br />
                  </a>
                )}
                <Typography gutterBottom variant="h1" className={classes.title}>
                  {props.title}
                </Typography>
                {props.children}
                {!props.forcedHeight && (
                  <Fragment>
                    <br />
                    <Typography variant="h4" className={classes.credits}>
                      {props.credits}
                    </Typography>
                    <br />
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </CardMedia>
      </div>
    </VizSensor>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
