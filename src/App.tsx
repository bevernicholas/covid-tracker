import React, { useState } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

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
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountrChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;
