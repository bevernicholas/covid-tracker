import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';
import { AnyRecord } from 'dns';
import { FetchedData } from '../../types';

interface Props {
  data: FetchedData;
  country: string;
}

const Chart: React.FC<Props> = ({data: {confirmed, recovered, deaths, lastUpdate}, country}) => {
  const [dailyData, setDailyData] = useState<any>({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }
    fetchAPI();
  }, []);

  const lineChart = dailyData && dailyData.length > 0? (
    <Line
      data={{
        labels: dailyData.map(({ date } : {date: any}) => new Date(date).toLocaleDateString()),
        datasets: [{
          data: dailyData.map(({ confirmed } : {confirmed: any}) => confirmed),
          label: 'Infected Cases US',
          borderColor: '#3333ff',
          fill: true
        }, {
          data: dailyData.map(({ deaths } : {deaths: any}) => deaths),
          label: 'Deaths US',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill: true
        }],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
    data={{
      labels: ['Infected', 'Recovered', 'Deaths'],
      datasets: [{
        label: 'People',
        backgroundColor: [
          'rgba(0, 0, 255, 0.5)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)'
        ],
        data: [confirmed.value, recovered.value, deaths.value]
      }]
    }}
    options={{
      legend: {display: false},
      text: {display: true, text: 'Current state in ' + country, }
    }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>

  )
}

export default Chart;