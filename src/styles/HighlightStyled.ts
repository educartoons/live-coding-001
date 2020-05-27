import styled from 'styled-components';

const HighlightStyled = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: rgb(192, 196, 208);
  font-family: 'Source Code Pro', monospace;
  font-size: 0.85em;
  font-weight: 300;
  line-height: 1.5;
  padding: 0.5em 1em;
  text-align: left;
  strong{
    background-color: yellow;
    border-bottom: 1px dotted #ff1444;
    // color: #ff1414;
    color: #000000;
    font-weight: 300;
  }
`

export default HighlightStyled;