import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import VizSensor from "react-visibility-sensor";
import Slide from "@material-ui/core/Slide";
import CircularProgress from "@material-ui/core/CircularProgress";
import YouTube from "react-youtube";
import PhotoGrid from "./PhotoGrid";
import GridList from "@material-ui/core/GridList";
import { IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  getBackgroundColorIndex,
  getPageSectionFlags,
} from "../redux/selectors";
import { backgroundColors } from "../redux/types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Gradient from "rgt";
import { isMobile } from "react-device-detect";

const useStyles = (props) =>
  makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      width: "100%",
      color: theme.palette.text.bio,
      background: "transparent",
    },
    img: {
      borderRadius: "100%",
      maxWidth: "120px",
      maxHeight: "120px",
    },
    highlightsLogo: {
      borderRadius: "50%",
      maxWidth: "100px",
      maxHeight: "100px",
      minWidth: "70px",
      minHeight: "70px",
    },
    gridBreak: {
      width: "100%",
      height: props.gridBreakSize,
      maxHeight: "100px",
      minHeight: "50px",
    },
    text: {
      textAlign: "left",
    },
    progress: {},
    photoGrid: {
      margin: "0 auto",
    },
    imageDialog: {
      backgroundColor: theme.palette.image.background,
      boxShadow: "none",
      overflow: "hidden",
    },
    media: {
      height: 140,
    },
    projectTitle: {},
    root: {
      width: "100%",
    },
    techStack: {
      display: "flex",
      justifyContent: "space-between",
      height: "100px",
      alignItems: "center",
    },
    leftSide: {},
    gridRightSide: {
      width: "100%",
    },
    titleRightSide: {},
    demoButton: {
      backgroundColor: theme.palette.button.header,
      color: backgroundColors[props.backgroundColorIndex],
      borderRadius: "8px",
    },
    jobInfo: {
      width: "100%",
      textAlign: "center",
    },
    leftSideWrapper: {
      width: isMobile || window.innerWidth < 800 ? "100%" : "30%",
      left: 0,
    },
    rightSideWrapper: {
      width:
        window.innerWidth >= 800 &&
        !isMobile &&
        (props.splitView || props.sorting)
          ? "70%"
          : "100%",
      right: 0,
    },
    titleIconWrapper: {},
    githubIconWrapper: {
      paddingRight: "10px",
      height: "100%",
    },
    titleWrapper: {
      height: "100%",
    },
  }));

const mapStateToProps = (state) => {
  return {
    backgroundColorIndex: getBackgroundColorIndex(state),
    pageSectionFlags: getPageSectionFlags(state),
  };
};

const PortfolioGridEntry = (props) => {
  const classes = useStyles(props)();
  let [active, setActive] = useState(props.disableAnimations ? true : false);
  let [loaded, setLoaded] = useState(false);
  let [githubIconActive, setGithubIconActive] = useState(false);
  let [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleImageLoad = function () {
    setLoaded(true);
  };

  setTimeout(function () {
    setLoaded(true);
  }, 5000);

  const opts = {
    width: "100%",
    height: props.video ? props.video.height : 0,
  };

  const handleResize = function () {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <VizSensor
      partialVisibility={true}
      offset={0}
      onChange={(isVisible) => {
        if (props.disableAnimations) {
          setActive(true);
        } else if (isVisible) {
          setTimeout(function () {
            setActive(isVisible);
          }, 150);
        }
      }}
    >
      <div className={classes.root}>
        <Slide direction="right" in={active}>
          <Grid
            container
            spacing={2}
            align="center"
            justify="center"
            alignItems="center"
            key={`Experience.${props.index}`}
          >
            <Fragment>
              {props.index > 0 && <div className={classes.gridBreak} />}
              {props.showLogo === true && (
                <div className={classes.leftSideWrapper}>
                  <Grid item className={classes.leftSide}>
                    <div>
                      <img
                        className={classes.img}
                        alt="complex"
                        src={props.logos[0].src}
                        style={{
                          width: props.logos[0].width,
                          height: props.logos[0].height,
                        }}
                      />
                      {props.logos[0].title != "" && (
                        <Typography
                          gutterBottom
                          variant="h3"
                          className={classes.projectTitle}
                        >
                          {props.logos[0].title}
                        </Typography>
                      )}
                      <div>
                        <Typography
                          gutterBottom
                          variant={props.headerTextSize}
                          className={classes.jobInfo}
                          style={{
                            color: backgroundColors[props.backgroundColorIndex],
                          }}
                        >
                          {props.company}
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          gutterBottom
                          variant={props.textSize}
                          className={classes.jobInfo}
                        >
                          {props.location}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant={props.textSize}
                          className={classes.jobInfo}
                        >
                          {props.dates}
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <br />
                </div>
              )}
              <div className={classes.rightSideWrapper}>
                <div>
                  <div>
                    <div className={classes.gridRightSide}>
                      <Grid
                        container
                        spacing={2}
                        align="center"
                        justify="center"
                        alignItems="center"
                      >
                        <div className={classes.githubIconWrapper}>
                          {props.githubUrl && (
                            <IconButton
                              color="primary"
                              aria-label="view on Github"
                              onClick={() =>
                                window.open(props.githubUrl, "_blank").focus()
                              }
                            >
                              <FontAwesomeIcon
                                icon={faGithub}
                                size="2x"
                                color={
                                  githubIconActive
                                    ? "white"
                                    : backgroundColors[
                                        props.backgroundColorIndex
                                      ]
                                }
                                onMouseEnter={() => setGithubIconActive(true)}
                                onMouseLeave={() => setGithubIconActive(false)}
                              />
                            </IconButton>
                          )}
                        </div>
                        <div className={classes.titleWrapper}>
                          <Typography
                            gutterBottom
                            variant={props.headerTextSize}
                            className={classes.titleRightSide}
                            style={{
                              color:
                                backgroundColors[props.backgroundColorIndex],
                            }}
                          >
                            {!props.highlightTitle && props.title}
                          </Typography>
                        </div>
                        {props.highlightTitle && (
                          <div>
                            <h2>
                              <Gradient
                                dir="bottom-to-top"
                                from={"white"}
                                to={"rgb(196, 142, 250)"}
                              >
                                {props.title}
                              </Gradient>
                            </h2>
                          </div>
                        )}
                      </Grid>
                      <br />
                      {props.showLogo === false && (
                        <div className={classes.titleWrapper}>
                          {props.dates && (
                            <Typography
                              gutterBottom
                              variant={props.textSize}
                              className={classes.titleRightSide}
                              style={{
                                color:
                                  backgroundColors[props.backgroundColorIndex],
                              }}
                            >
                              {props.dates}
                            </Typography>
                          )}
                          {props.type && (
                            <Typography
                              gutterBottom
                              variant="h4"
                              className={classes.titleRightSide}
                              style={{
                                color:
                                  backgroundColors[props.backgroundColorIndex],
                              }}
                            >
                              {"Type: " + props.type}
                            </Typography>
                          )}
                          <br />
                        </div>
                      )}
                      <div>
                        {props.description.map((item, index) => (
                          <Fragment key={`PortfolioDescription.${index}`}>
                            {item !== "~" && (
                              <Typography
                                variant={props.textSize}
                                gutterBottom
                                className={classes.text}
                              >
                                {item}
                              </Typography>
                            )}
                            {item === "~" && <br />}
                          </Fragment>
                        ))}
                        {props.demoText && (
                          <Fragment>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={() =>
                                window.open(props.demoLink, "_blank").focus()
                              }
                              className={classes.demoButton}
                            >
                              <Typography
                                variant="h4"
                                gutterBottom
                                className={classes.text}
                              >
                                {props.demoText}
                              </Typography>
                            </Button>
                          </Fragment>
                        )}
                        {props.video &&
                          (loaded ? (
                            <YouTube
                              videoId={props.video.id}
                              onReady={handleImageLoad}
                              opts={opts}
                            />
                          ) : (
                            <div className={classes.progress}>
                              <CircularProgress color="secondary" />
                            </div>
                          ))}
                      </div>
                      <div className={classes.photoGrid}>
                        {props.images && (
                          <Fragment>
                            <PhotoGrid images={props.images} />
                            <br />
                          </Fragment>
                        )}
                      </div>
                      {(props.logos.length > 1 ||
                        (!props.showLogo && props.logos.length >= 1)) && (
                        <div>
                          <br />
                          <Typography
                            variant="h2"
                            gutterBottom
                            style={{
                              color:
                                backgroundColors[props.backgroundColorIndex],
                            }}
                          >
                            {props.highlightsText}
                          </Typography>
                          <br />
                          <GridList cols={4} cellHeight="auto">
                            {props.logos.map(
                              (item, index) =>
                                (!props.showLogo || index > 0) && (
                                  <div key={`logo${index}`}>
                                    <img
                                      className={classes.highlightsLogo}
                                      alt="complex"
                                      src={item.src}
                                      style={{
                                        width: item.width,
                                        minHeight: item.height,
                                      }}
                                    />
                                    {item.title != "" && (
                                      <Typography gutterBottom variant="h4">
                                        {item.title}
                                      </Typography>
                                    )}
                                  </div>
                                )
                            )}
                          </GridList>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          </Grid>
        </Slide>
      </div>
    </VizSensor>
  );
};

export default connect(mapStateToProps, null)(PortfolioGridEntry);
