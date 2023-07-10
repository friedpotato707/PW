import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MagnifyableButton from "./MagnifyableButton";
import { getBackgroundColorIndex } from "../redux/selectors";
import { connect } from "react-redux";
import GithubIcon from "../assets/githubIcon.png";
import LinkedInIcon from "../assets/linkedInIcon.png";
import MediumIcon from "../assets/mediumLogo.png";

const mapStateToProps = (state) => {
  return {
    backgroundColorIndex: getBackgroundColorIndex(state),
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    [theme.breakpoints.down("xs")]: {
      height: "160px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "80px",
    },
    [theme.breakpoints.up("md")]: {
      height: "60px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "60px",
    },
  },
}));
function GridItem({ classes, media }) {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={6}>
      <div className={classes.tile}>
        <MagnifyableButton
          width={50}
          magnifyAmount={10}
          image={media.image}
          destination={media.destination}
        />
      </div>
    </Grid>
  );
}

const socialMedia = [
  {
    image: GithubIcon,
    destination: "https://github.com/friedpotato707",
  },
  {
    image: MediumIcon,
    destination: "https://medium.com/@atlast_turtle",
  },
];

function SocialMedia() {
  const classes = useStyles();
  return (
    <div>
      {/* container Grid with 1 (8px) spacing*/}
      <Grid container spacing={1} className={classes.media}>
        {socialMedia.map((item, index) => (
          <GridItem
            key={`socialMediaButton${index}`}
            classes={classes}
            media={item}
          />
        ))}
      </Grid>
    </div>
  );
}

export default connect(mapStateToProps, null)(SocialMedia);
