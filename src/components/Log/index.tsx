import React from 'react';
import Highlight from '../Highlight';

import HighlightStyled from '../../styles/HighlightStyled'

interface IProps{
  log: string;
  regexes: RegExp[]
}

const Log = (props: IProps) => {
  return (
  <HighlightStyled>
    <Highlight log={props.log} regexes={props.regexes}/>
  </HighlightStyled>
  )
}

export default Log;