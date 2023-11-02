import React from 'react'
import styled from 'styled-components'

const Input = ({type, placeholder}) => {
  return (
    <Container>
        <StyledInput type ={type && type} placeholder={placeholder && placeholder}/>
        <Status/>
    </Container>
  )
}
const StyledInput = styled.input`
  border-radius: 11px;
  width: 80%;
  height: 45px;
  min-width:250px;
  max-width: 350px;
  background: #F5F5F5;
  margin-top: 15px;
  box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
  border: 1px solid #FE6F5E;
  background-color: #f5f5f5;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  
  &: hover{
    transform: translate(-3px);
  }
`
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Status = styled.div`

`

export default Input