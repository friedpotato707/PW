import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import PhotoGridTile from "./PhotoGridTile";

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
}));

export default function PhotoGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cols={3} className={classes.gridList}>
        {props.images &&
          props.images.map((tile, index) => (
            <PhotoGridTile
              key={`photoTile${index}`}
              image={tile}
              title={tile.title}
            />
          ))}
      </GridList>
    </div>
  );
}
