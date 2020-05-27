import React from 'react';

import {FaTerminal, FaRegBell, FaRegHdd, FaRegSun} from 'react-icons/fa'

import LogList from '../LogList'

import DashboardStyled from '../../styles/DashboardStyled'

interface IProps{
  logs: string[]
  regexes: RegExp[];
}

const Dashboard = (props: IProps) => {
  return(
    <DashboardStyled>
      <div className="navigation">
        <span className="user">E</span>
        <nav>
          <ul>
            <li><a href=""><FaTerminal /></a> </li>
            <li><a href=""><FaRegBell /> </a> </li>
            <li><a href=""><FaRegHdd /> </a> </li>
            <li><a href=""><FaRegSun /> </a> </li>
          </ul>
        </nav>
      </div>
      <div className="component">
        <h2>Logs</h2>
        <LogList logs={props.logs} regexes={props.regexes}/>
      </div>
    </DashboardStyled>
  )
};

export default Dashboard;