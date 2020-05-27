import React from 'react';
import Log from '../Log';

interface IProps{
  logs: string[],
  regexes: RegExp[]
}

const LogList = (props: IProps) => {
  return(
    <>
      {
        props.logs.map((log: string, index: number)=><Log key={index} log={log} regexes={props.regexes}/>)
      }
    </>
  )
};

export default LogList;