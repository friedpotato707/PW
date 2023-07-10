import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setActivePageSectionFlag } from "../redux/actions";
import VizSensor from "react-visibility-sensor";
import { connect } from "react-redux";
import { getBackgroundColorIndex } from "../redux/selectors";

const useStyles = (
  backgroundColorIndex,
  fullWidth,
  colorTitle,
  mainBackgroundColor,
  backgroundTransparency,
  forcedHeight,
  windowHeight
) =>
  makeStyles((theme) => ({
    gap: {
      backgroundColor: "rgba(56, 56, 56, " + backgroundTransparency + ")",
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

const SectionGap = (props) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const classes = useStyles(
    props.backgroundColorIndex,
    props.fullWidth,
    props.colorTitle,
    props.backgroundColor,
    props.backgroundTransparency,
    props.forcedHeight,
    windowHeight
  )();

  useEffect(() => {
    window.addEventListener("resize", () =>
      setWindowHeight(window.innerHeight)
    );
  }, [windowHeight]);

  return (
    <VizSensor
      partialVisibility={true}
      offset={0}
      onChange={(isVisible) => {
        props.setActivePageSectionFlag(props.index, isVisible);
      }}
    >
      <div className={classes.gap}>
        {props.credits && (
          <div>
            <br />
          </div>
        )}
      </div>
    </VizSensor>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionGap);
