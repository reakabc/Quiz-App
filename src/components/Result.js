import React from 'react'
import styled from 'styled-components'
import ResultView from './ResultView';

const ResultWrapper = styled.div`
background: black;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:greenyellow;
`

class Result extends React.Component {

    constructor(){
        super();
        this.state = {
            result:[
                {name:'Nitish Kumar', email:'xyz@gmail.com', score:'6/9', time:'04:20 24:12:2020'},
                {name:'Umesh Kumar', email:'xyz1@gmail.com', score:'8/9', time:'04:25 24:12:2020'},
                {name:'Nikesh Kumar', email:'xyz2@gmail.com', score:'5/9', time:'04:30 24:12:2020'}
            ]
        }
    }

    render(){
        return(
            <ResultWrapper>
                {this.state.result.map((item)=>
                    <ResultView name={item.name} email={item.email} score={item.score} time={item.time}/>
                )}
            </ResultWrapper>
        )
    }

}

export default Result;