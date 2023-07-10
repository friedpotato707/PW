import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PortfolioGridEntry from "./PortfolioGridEntry";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.bio,
    background: "transparent",
    boxShadow: "none",
  },
  img: {
    display: "block",
    borderRadius: "50%",
    marginLeft: "50px",
    marginRight: "50px",
  },
  text: {
    textAlign: "left",
  },
  title: {
    textAlign: "left",
  },
}));

const PortfolioGrid = (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Container maxWidth="xl">
            {props.items.map((item, index) => (
              <PortfolioGridEntry
                key={`gridEntry${index}`}
                index={index}
                logos={item.logos}
                title={item.title}
                text={item.text}
                video={item.video}
                company={item.company}
                dates={item.dates}
                location={item.location}
                description={item.description}
                images={item.images}
                githubUrl={item.githubUrl}
                showLogo={item.showLogo}
                demoText={item.demoText}
                demoLink={item.demoLink}
                textSize={props.textSize}
                headerTextSize={props.headerTextSize}
                splitView={props.splitView}
                highlightsText={props.highlightsText}
                gridBreakSize={props.gridBreakSize}
                highlightTitle={props.highlightTitle}
                sorting={props.sorting}
                sortingCategories={props.sortingCategories}
                disableAnimations={props.disableAnimations}
                type={item.type}
              />
            ))}
          </Container>
        </Paper>
      </div>
    </Container>
  );
};

export default PortfolioGrid;
