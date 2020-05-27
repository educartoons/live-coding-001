import React from 'react';
import { data } from '../../data';
import Dashboard from '../Dashboard';
import GlobalStyles from '../../styles/GlobalStyles';

const Application = () => {
  return(
    <>
      <GlobalStyles />
      <Dashboard logs={data} regexes={[/Incapsula/g, /main\.css/g]}/>
    </>
  )
}

export default Application;