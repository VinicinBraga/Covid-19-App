import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import styles from "./Cards.module.css";

const Cards = (props) => {
  console.log(props);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
