import React from 'react'
import styled from 'styled-components'

const QuestionWrapper = styled.div`
border: 2px greenyellow solid;
border-radius: 10px;
margin: 20px;
width: 400px;
padding: 20px;

@media ${props => props.theme.mediaQueries.below400}{
    width: 300px;
    border-radius: 5px;
    margin: 20px;
    padding: 20px;
}

`

const Button = styled.button`
background: greenyellow;
color: black;
padding: 12px;
margin-top:20px;
border: none;
width: 100%;
font-weight: bold;
`

const Option = styled.input.attrs({type: 'radio'})`
background: ${props => props.theme.colors.primaryDark};
color: black;
`

class Question extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            answer: this.props.option1,
        }
    }

    checkAnswer = async(e) => {

        e.preventDefault();

        if(this.state.answer === e.target.elements.answer.value){
            
            return true;

        }
    }

    render(){
        return(
            <QuestionWrapper>
                <h2>Question:</h2>
                <p>{this.props.count}. {this.props.question}</p><br></br>
                <form onSubmit={this.props.response}>
                    <Option name="answer" value={this.props.option1}/><label for="answer"> {this.props.option1}</label><br></br>
                    <Option name="answer" value={this.props.option2}/><label for="answer"> {this.props.option2}</label><br></br>
                    <Button>Submit</Button>
                </form>
                
            </QuestionWrapper>
        );
    }
}

export default Question;