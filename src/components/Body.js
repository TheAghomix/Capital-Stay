import React from "react";
import { Link, makeStyles, Typography } from "@material-ui/core";
import background from "../components/brett-jordan-HWiSlio5TUg-unsplash 2.png";
const useStyles = makeStyles({
  root: {},
  body1: {
    position: "absolu1440pxte",
    width: "900px",
    height: "112px",
    left: "0px",
    top: "0px",
    backgroundImage: "../components/brett-jordan-HWiSlio5TUg-unsplash 2.png",
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
    backgroundSize: "cover",
  },
});

const Body = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.body1}>
        {/* <img src={background} alt="" /> */}
      </div>
    </div>
  );
};
export default Body;
