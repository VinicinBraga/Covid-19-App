import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Card.module.css";

const CardComponent = ({
  className,
  cardTitle,
  value,
  lastUpdate,
  cardSubtitle,
}) => (
  <Grid
    item
    xs={12}
    md={3}
    component={Card}
    className={cx(styles.card, className)}
    style={{ backgroundColor: "#1a1d22", color: "white" }}
  >
    <CardContent>
      <Typography color="textSecondary" gutterBottom style={{ color: "white" }}>
        {cardTitle}
      </Typography>
      <Typography variant="h5" component="h2">
        <CountUp start={0} end={value} duration={2.75} separator="," />
      </Typography>
      <Typography color="textSecondary" style={{ color: "white" }}>
        {new Date(lastUpdate).toDateString()}
      </Typography>
      <Typography variant="body2" component="p" style={{ color: "white" }}>
        {cardSubtitle}
      </Typography>
    </CardContent>
  </Grid>
);

export default CardComponent;
