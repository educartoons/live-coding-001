import React from 'react'
import {Intervals, Interval} from '../../utils'

interface IProps{
  log: string;
  regexes: RegExp[];
}

function getPositions(log: string, regexes: RegExp[]): Interval[]{
  const positions: Interval[] = [];
  regexes.forEach((regex: RegExp)=>{
    try{
      for(let result = regex.exec(log); result!==null; result = regex.exec(log)){
        const start = result.index;
        const end = start + result[0].length;
        positions.push([start, end]);
      }
    }catch(e){
      console.log('Bad regex');
    }
  })
  return positions;
}

function highlightWords(log: string, regexes: RegExp[]){
  if(regexes===undefined || regexes.length===0){
    return log;
  }
  const positions = getPositions(log, regexes);
  if(positions.length===0){
    return log;
  }

  const intervalsObj = new Intervals(positions);
  const mergedPositions = intervalsObj.mergeOverlapped();

  let html = '';
  for(let i=0; i<mergedPositions.length;i++){
    const start = mergedPositions[i][0];
    const end = mergedPositions[i][1];

    let before = '';
    let middle = '';
    let after = ''

    if(i===0){
      before = log.substring(0, start);
    }
    middle = `<strong>${log.substring(start, end)}</strong>`;
    if(mergedPositions[i+1]!==undefined){
      after = log.substring(end, mergedPositions[i+1][0]);
    }else{
      after = log.substring(end);
    }
    html = html + before + middle + after;
  }
  return html;

}


const Highlight = (props: IProps) => {
  return(
    <div dangerouslySetInnerHTML={{
      __html: highlightWords(props.log, props.regexes)
    }}/>
  )
}

export default Highlight;
