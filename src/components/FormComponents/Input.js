import styled from "styled-components"

const Input = styled.input`
  width: 326px;
  height: 58px;
  margin-top: 12px;
  padding: 0 15px;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  color: #C4C4C4;
  background-color: #232B60;

  @media (min-width: 600px){
    width: 500px;
    height: 60px;
}

@media (min-width: 700px){
    width: 600px;
    height: 70px;
}

  &::placeholder{
    text-align: center;
    font-size: 20px;
    color: #C4C4C4;
  }
`


export default Input;