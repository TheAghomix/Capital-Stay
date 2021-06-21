import React from "react";
import { Link, makeStyles, Typography } from "@material-ui/core";
import logo from "../components/image 11.jpg";
const useStyles = makeStyles({
  root: {},
  header: {
    width: "1300px",
    height: "112px",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    width: "702px",
    height: "72px",
    display: "flex",
    flexWrap: "nowrap",
    position: "absolute",
  },
  text: {
    position: "static",

    width: "96px",
    height: "24px",
    left: "0px",
    top: "24px",

    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    /* identical to box height */

    color: "#444444",

    /* Inside Auto Layout */

    flex: "none",
    order: "0",
    flexGrow: "0",
    height: "72px",
    width: "142px",
    left: "320px",
    top: "0px",
    borderRadius: "0px",
  },
  logo: {
    marginLeft: "60px",
    marginRight: "60px",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <div className={classes.content}>
          <Typography variant="" className={classes.text}>
            LIVE WITH US
          </Typography>
          <Typography variant="" className={classes.text}>
            STAY WITH US
          </Typography>
          <img src={logo} className={classes.logo} />
          <Typography variant="" className={classes.text}>
            SALES
          </Typography>
          <Typography variant="" className={classes.text}>
            ABOUT US
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Header;
