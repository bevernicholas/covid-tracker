import React, { useState } from 'react';
import { Cards, Chart, CountryPicker, Header } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/covid-app.png';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  };

  handleCountrChange = async(country: string) => {
    this.setState({ data: await fetchData(country), country });
  };

  render() {
    const { data,country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID Tracker"/>
        <Header country={country} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountrChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;
