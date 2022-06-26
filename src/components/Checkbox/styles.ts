import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;

  input {
    position: absolute;
    width: 0;
    height: 0;
    cursor: pointer;
    opacity: 0;
  }
`

export const CustomCheckBox = styled.span`
  position: absolute;
  top: 0;
  left: -25px;
  width: 25px;
  height: 25px;
  margin-right: 2em;
  border: 2px solid green;
  cursor: pointer;

  input:checked + & {
    background-color: teal;
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked + &:after {
    display: block;
    left: 6px;
    top: -3px;
    width: 10px;
    height: 21px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`
