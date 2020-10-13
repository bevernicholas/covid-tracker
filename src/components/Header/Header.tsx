import React from 'react';
import { Typography } from '@material-ui/core';

import styles from './Header.module.css';

interface Props {
  country: string;
}

const Header: React.FC<Props> = ({country}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h4">{country === '' ? 'Global' : country} Metrics</Typography>
    </div>
  )
}

export default Header;