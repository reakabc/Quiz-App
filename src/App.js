import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Home from './components/Home'
import About from "./components/About"
import Result from './components/Result'

const LinkWrapper = styled.div`
width: 100%;
height: 40px;
background: greenyellow;
display: flex;
flex-direction: row;
justify-content: center;

@media ${props => props.theme.mediaQueries.below400}{
    flex-direction: column;
    justify-content: center;
    height:120px;
}

`

const StyledLink = styled(Link)`
width: 100px;
height: 40px;
color: black;
align-items: center;
text-decoration: none;
display: flex;
justify-content: center;
font-weight: bolder;

&:hover{
    background: black;
    color: greenyellow;
}

@media ${props => props.theme.mediaQueries.below400}{
    flex-direction: column;
    justify-content: center;
    width: 100%;
}
`

const Info = styled.p`
width: 100%;
background:red;
color: black;
justify-content:center;
`

const App = () => {
    return(
        <Router>
            <LinkWrapper>
                <StyledLink to="/">HOME</StyledLink>
                <StyledLink to="/result">RESULTS</StyledLink>
                <StyledLink to="/about">ABOUT US</StyledLink>
            </LinkWrapper>
            <Info>This project is built to improve and apply all learnt React Js concept. It is purely a static website. We don't store your name and email. Input is just for fun so you can put any thing as your name and email. Thank You!</Info>

            <Route exact path="/" component={Home}/>
            <Route path="/result" component={Result}/>
            <Route path="/about" component={About}/>
        </Router>
    )
}

export default App;