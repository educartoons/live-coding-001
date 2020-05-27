import React from 'react';
import Highlight from '../Highlight';

interface IProps{
  log: string;
  regexes: RegExp[]
}

const Log = (props: IProps) => {
  return (
  <div>
    {
      <Highlight log={props.log} regexes={props.regexes}/>
    }
  </div>
  )
}

export default Log;