import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country?: string) => {
  let dynamicUrl = url;
  if (country && country !== 'global') {
    dynamicUrl = url + '/countries/' + country;
  }
  try {
    console.log(dynamicUrl);
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(dynamicUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
    return data.map(({ positive, recovered, death, dateChecked: date }:{positive: any, recovered:any, death:any, dateChecked: any}) => ({ confirmed: positive, recovered, deaths: death, date }));
  } catch (error) {
    console.log(error);
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(url + '/countries');
    return countries.map(({name}: {name: string}) => (name));
  } catch (error) {
    console.log(error);
  }
}