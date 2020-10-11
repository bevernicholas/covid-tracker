import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from './CountryPicker.module.css';

import { fetchCountries } from "../../api";

interface Props {
  handleCountryChange: any;
}

const CountryPicker: React.FC<Props> = ({handleCountryChange}) => {

  const [countries, setCountries] = useState<any>([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    }
    fetchAPI();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
        <option value='global'>Global</option>
        {countries.map((country: string, i: number) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;