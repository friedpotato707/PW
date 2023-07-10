import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { backgroundColors, highlightColor } from "../redux/types";
import { getBackgroundColorIndex } from "../redux/selectors";
import { connect } from "react-redux";

const useStyles = (color) =>
  makeStyles((theme) => ({
    wrapper: {
      color: color,
    },
  }));

const mapStateToProps = (state) => {
  return {
    backgroundColorIndex: getBackgroundColorIndex(state),
  };
};

const MagnifyableButton = (props) => {
  let [active, setActive] = useState(false);
  const classes = useStyles(
    active ? highlightColor : backgroundColors[props.backgroundColorIndex]
  )();

  const magnify = () => {
    setActive(!active);
  };

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.destination ? props.destination : ""}
      height={props.width}
      width={props.width}
    >
      <div className={classes.wrapper}>
        <img
          src={props.image}
          style={{
            width: props.width + (active ? props.magnifyAmount : 0),
          }}
          onMouseEnter={() => magnify()}
          onMouseLeave={() => magnify()}
        />
      </div>
    </a>
  );
};

export default connect(mapStateToProps, null)(MagnifyableButton);
