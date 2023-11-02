import React from 'react'
import styled from 'styled-components'
import bgimg from '../assets/bg.png'
import Sidebar from './Sidebar'
import Main from './Main'

const login = () => {
  return (
    <div>
        <Container>
          <Wrapper>
           <Sidebar/>
           <Main/>
          </Wrapper>
        </Container>
    </div>
  )
}
const Container = styled.div`
background: #eefcff;
position:absolute;
top:0;
bottom:0;
left: 0;
right: 0
`;
const Wrapper = styled.div`
background-image: url(${bgimg});
width: 100%;
height: 100%;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;

`;


export default login