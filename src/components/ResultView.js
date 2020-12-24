import React from 'react'
import styled from 'styled-components'

const ResultWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
border: 2px greenyellow solid;
padding: 20px;
margin: 20px;
width: 80%;

@media ${props=>props.theme.mediaQueries.below400}{
    flex-direction: column;
}

`

const P = styled.p`
margin-inline: 10px;
`

const ResultView = (props) => {
    return(
        <ResultWrapper>
            <h4>{props.name}</h4>
            <P>{props.email}</P>
            <P>{props.score}</P>
            <P>{props.time}</P>
        </ResultWrapper>
    )
}

export default ResultView;