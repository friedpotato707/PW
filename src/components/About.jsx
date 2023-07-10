import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Fading from "./Fading";
import SocialMedia from "./SocialMedia";
import Slide from "@material-ui/core/Slide";
import Container from "@material-ui/core/Container";
import MemojiAvatar2 from "../assets/avatar3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "100%",
    color: theme.palette.text.bio,
    background: "transparent",
    boxShadow: "none",
    textAlign: "center",
  },
  image: {
    width: "100%",
  },
  img: {
    maxWidth: "150px",
    maxHeight: "150px",
    minWidth: "120px",
    minHeight: "120px",
    width: "30%",
    height: "30%",
    borderRadius: "50%",
    border: "2px solid white",
  },
  anchor: {
    top: "-250px",
    display: "block",
    position: "relative",
    visibility: "hidden",
  },
}));

const About = (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Fading duration={1500}>
          <Paper className={classes.paper}>
            <a className="anchor" id={"about"}></a>
            <Slide in={true} direction="right">
              <div>
                <Typography
                  gutterBottom
                  variant={props.headerTextSize}
                  className={classes.text}
                >
                  {props.title}
                </Typography>
              </div>
            </Slide>
            <br />
            <br />
            <div className={classes.image}>
              <img className={classes.img} alt="complex" src={MemojiAvatar2} />
            </div>
            <br />
            <Slide in={true} direction="right">
              <div>
                <div>
                  {props.bio.map((item, index) => (
                    <div key={`bioLine${index}`}>
                      <br />
                      <Typography
                        variant={props.textSize}
                        gutterBottom
                        className={classes.bio}
                      >
                        {item}
                      </Typography>
                    </div>
                  ))}
                  <br />
                  <br />
                  <SocialMedia />
                  <br />
                </div>
              </div>
            </Slide>
          </Paper>
        </Fading>
      </div>
    </Container>
  );
};

export default About;
