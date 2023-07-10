import { makeStyles } from "@material-ui/core/styles";
import { backgroundColors } from "../redux/types";
import { getBackgroundColorIndex, getPreviewImage } from "../redux/selectors";
import { previewImage } from "../redux/actions";
import { connect } from "react-redux";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const HEADER_BOTTOM_MARGIN = window.innerHeight * 0.1;

const useStyles = makeStyles(function (theme) {
  return {
    main: {
      width: "100%",
      height: "100%",
      fontFamily: "Cardo",
      fontStyle: "normal",
      [theme.breakpoints.up("xs")]: {
        paddingTop: "100px",
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: (HEADER_BOTTOM_MARGIN * 5) / 6 / 2 + "px",
      },
    },
  };
});

const mapStateToProps = (state) => {
  return {
    backgroundColorIndex: getBackgroundColorIndex(state),
    imagePreview: getPreviewImage(state),
  };
};

const mapDispatchToProps = {
  previewImage: previewImage,
};

const Background = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.main}
      style={{ backgroundColor: backgroundColors[props.backgroundColorIndex] }}
    >
      <Dialog maxWidth={false} open={props.imagePreview != null}>
        <DialogContent>
          <DialogContentText>
            <img
              alt="complex"
              src={props.imagePreview}
              style={{ maxWidth: "100%" }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.previewImage(null)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <div>{props.children}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Background);
