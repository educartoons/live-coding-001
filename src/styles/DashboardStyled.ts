import styled from 'styled-components';

const DashboardStyled = styled.div`
  align-items: stretch;
  background-color: rgb(34, 41, 51);
  display: flex;
  min-height: 100vh;
  text-align: center;
  .navigation{
    background-color: #1c1a32;
    flex-direction: column;
    padding: 1em 0.5em;
    ul{
      margin: 3em 0 0 0;
      padding: 0;
      li{
        display: block;
        margin: 0 0 0.5em 0;
        a{
          display: inline-block;
          padding: 0.8em 1em;
          &:hover{
            background-color: #5843d0;
            border-radius: 4px;
          }
          svg{
            fill: #ffffff;
            font-size: 14px;
            opacity: 0.9;
          }
        }
      }
    }
    .user{
      background-color: #0351ca;
      border-radius: 4px;
      color: #ffffff;
      display: inline-block;
      padding: 0.6em 0.8em;
    }
  }
  .component{
    width: 100%;
    h2{
      color: #ffffff;
      font-size: 1.25em;
      padding: 0 1em;
      text-align: left;
    }
  }
`;

export default DashboardStyled;