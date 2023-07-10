import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import CardMedia from "@material-ui/core/CardMedia";
import { previewImage } from "../redux/actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },

  cardWrapper: {
    cursor: "pointer",
  },
  layer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 255, 0.3)",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

const mapDispatchToProps = {
  previewImage: previewImage,
};

const PhotoGridTile = (props) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  return (
    <GridListTile
      style={{
        ...props.style,
        height: props.image.height,
        width: props.image.width,
      }}
      key={props.image}
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => {
        props.previewImage(props.image.src);
      }}
    >
      <div className={classes.cardWrapper}>
        <CardMedia
          style={{ height: props.image.height, paddingTop: "0px" }}
          image={props.image.src}
        />
        <div
          className={classes.layer}
          style={{ display: active ? "block" : "none" }}
        >
          {props.title}
        </div>
      </div>
    </GridListTile>
  );
};

export default connect(null, mapDispatchToProps)(PhotoGridTile);
