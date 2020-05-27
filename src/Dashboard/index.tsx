import React from 'react';

interface IProps{
  logs: string[]
}

const Dashboard = (props: IProps) => {
  return(
    <>
      {
        props.logs.map((log: string)=><p>log</p>)
      }
    </>
  )
};

export default Dashboard;