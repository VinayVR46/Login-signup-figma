import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import Input from './Input'

const sidebar = () => {
  return (
    <Container>
       <LogoCard>
        <img src={logo} alt="logo" />
        <h3>Shutter<span>pro</span></h3>
       </LogoCard>
       <Form>
        <h3>Sign up</h3>
        <Input type = {"text"} placeholder={" Enter your Name"}/>
        <Input type={"email"} placeholder={"Email"}/>
        <Input type={"password"} placeholder={"Password"}/>
        <Input type={"password"} placeholder={"Confirm Password"}/>
        <button>Sign up</button>
        </Form>
    </Container>
  )
}
const Form = styled.form`
h3{
  color: #666666;
  margin-bottom: 20px

}
button{
  margin-top: 10px;
  background-color: #70EDB9;
  width: 250px;
  height: 50px;
  border-radius: 5px;
  color: black
}`
const LogoCard = styled.div`
img{
  height: 6rem;
}
h3{
  color:#5DC399;
  font-size: 28px;
  span{
    color:#FF8D8D;
    font-size: 21px;
  }
}
`
const Container = styled.div`
min-width: 400px;
height: 100vh;
backdrop-filter: blur(35px);
background-color: rgba(235,235,235, 0.8);
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 0 2rem;`
export default sidebar