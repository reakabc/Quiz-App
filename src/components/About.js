import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
background: black;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
color: greenyellow;
`

const Content = styled.div`
margin: 20px;
`

const About = () => {
    return(
        <AboutWrapper>
            <Content>
                <center>
                <h3>About Me</h3>
                <p>My name is Nitish Kumar. I am a passionate software developer with background Metallurgy and Materials Engineering from National Institute of Foundry and Forge Technology Ranchi.</p>
                <h3>About Quiz App</h3>
                <p>Basic quiz app for java beginners to test their programming knowledge of java basics.</p>
                </center>
            </Content>
        </AboutWrapper>
    )
}

export default About;