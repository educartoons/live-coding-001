import React from 'react';
import { data } from '../data';
import Dashboard from '../Dashboard';
import LogList from '../LogList'

const Application = () => {
  return(
    <>
      <h2>logs</h2>
      <LogList logs={data} regexes={[/Incapsula/g, /main\.css/g]}/>
    </>
  )
}

export default Application;