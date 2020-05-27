import React from 'react';
import Log from '../Log';
import LogsListStyled from '../../styles/LogsListStyled'

interface IProps{
  logs: string[],
  regexes: RegExp[]
}

const LogList = (props: IProps) => {
  return(
    <LogsListStyled>
      {
        props.logs.map((log: string, index: number)=><Log key={index} log={log} regexes={props.regexes}/>)
      }
    </LogsListStyled>
  )
};

export default LogList;