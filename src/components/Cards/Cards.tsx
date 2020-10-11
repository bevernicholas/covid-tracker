import * as React from "react";
import { FetchedData } from "../../types";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from 'react-countup';
import cx from 'classnames';

interface Props {
  data: FetchedData;
};

const Cards: React.FC<Props> = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={confirmed? confirmed.value : 0} duration={2.5} separator=","/>
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of people infected by COVID-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={recovered? recovered.value : 0} duration={2.5} separator=","/>
              </Typography>
              <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of people recovered from COVID-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={deaths? deaths.value : 0} duration={2.5} separator=","/>
              </Typography>
              <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of deaths from COVID 19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
